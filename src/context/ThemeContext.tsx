import { createContext, useState, useEffect, type ReactNode } from "react"
import type { ThemeColors } from "../styles/colors"
import axios from "axios"

type ThemeType = "light" | "dark"

interface ThemeContextType {
    theme: ThemeType
    colors: ThemeColors
    setTheme: (theme: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    colors: { background: "#fff", text: "#000" } as ThemeColors,
    setTheme: () => { },
})

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>("light")
    const [themes, setThemes] = useState<Record<ThemeType, ThemeColors>>({
        light: { background: "#fff", text: "#000" } as ThemeColors,
        dark: { background: "#000", text: "#fff" } as ThemeColors,
    })

    useEffect(() => {
        axios.get("http://localhost:8000/api/styles/")
            .then(res => {
                const fetchedThemes = res.data.reduce((acc: any, item: any) => {
                    if (item.name === "light" || item.name === "dark") {
                        acc[item.name] = item.data;
                    }
                    return acc;
                }, {} as Record<ThemeType, ThemeColors>);
                setThemes(fetchedThemes);

                // apply stored theme if available
                const storedTheme = localStorage.getItem("theme") as ThemeType | null;
                const activeTheme = storedTheme && fetchedThemes[storedTheme] ? storedTheme : "light";
                setTheme(activeTheme);
            })
            .catch(err => {
                console.error("Failed to fetch themes from API:", err);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const currentColors = themes[theme] || themes.light;

    return (
        <ThemeContext.Provider value={{ theme, colors: currentColors, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
