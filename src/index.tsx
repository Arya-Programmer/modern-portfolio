import React from "react"

import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from "./context/ThemeContext"
import App from "./App"
import "./index.css"

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root")

    if (!rootElement) {
        console.error("Could not find root element to mount React application")
        return
    }

    const root = createRoot(rootElement)

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>,
    )
})
