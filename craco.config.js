const path = require("path");
const fs = require("fs");

const evalSourceMapMiddleware = require("react-dev-utils/evalSourceMapMiddleware");
const noopServiceWorkerMiddleware = require("react-dev-utils/noopServiceWorkerMiddleware");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const craPaths = require("react-scripts/config/paths");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
        },
    },

    // react-router 7 exposes `react-router/dom` through its package `exports`
    // map. Webpack 5 resolves it, but the jest 27 that react-scripts 5.0.1 pins
    // predates `exports` support, so point it at the CJS build directly.
    jest: {
        configure: (jestConfig) => {
            const reactRouterDist = path.join(
                path.dirname(require.resolve("react-router/package.json")),
                "dist/development"
            );

            jestConfig.moduleNameMapper = {
                ...jestConfig.moduleNameMapper,
                "^react-router/dom$": path.join(reactRouterDist, "dom-export.js"),
            };

            return jestConfig;
        },
    },

    // react-scripts 5.0.1 ships webpack-dev-server 4, which has unpatched
    // advisories (source-code exposure, HMR websocket interception, CSRF).
    // package.json `overrides` pins v5 instead; v5 dropped a few options CRA
    // still passes, so translate them to their v5 equivalents here.
    devServer: (devServerConfig) => {
        const {
            onBeforeSetupMiddleware,
            onAfterSetupMiddleware,
            https,
            ...config
        } = devServerConfig;

        // v5 replaced the two middleware hooks with a single setupMiddlewares.
        config.setupMiddlewares = (middlewares, devServer) => {
            if (!devServer) {
                throw new Error("webpack-dev-server is not defined");
            }

            // Lets the error overlay fetch source contents from webpack. Has to
            // stay ahead of redirectServedPath or it has no effect.
            devServer.app.use(evalSourceMapMiddleware(devServer));

            if (fs.existsSync(craPaths.proxySetup)) {
                require(craPaths.proxySetup)(devServer.app);
            }

            middlewares.push(
                redirectServedPath(craPaths.publicUrlOrPath),
                // Resets any service worker left registered by a production build
                // on the same host:port, so dev doesn't hit the production cache.
                noopServiceWorkerMiddleware(craPaths.publicUrlOrPath)
            );

            return middlewares;
        };

        // v5 replaced `https: false | {key, cert}` with the `server` option.
        config.server = https ? { type: "https", options: https } : "http";

        // v5 validates the client schema strictly, and CRA leaves these
        // undefined unless the WDS_SOCKET_* env vars are set.
        if (config.client && config.client.webSocketURL) {
            const webSocketURL = Object.fromEntries(
                Object.entries(config.client.webSocketURL).filter(
                    ([, value]) => value !== undefined
                )
            );

            if (Object.keys(webSocketURL).length) {
                config.client = { ...config.client, webSocketURL };
            } else {
                const { webSocketURL: unused, ...client } = config.client;
                config.client = client;
            }
        }

        // v5 only accepts the array form of `proxy`.
        if (config.proxy && !Array.isArray(config.proxy)) {
            config.proxy = [config.proxy];
        }

        return config;
    },
};
