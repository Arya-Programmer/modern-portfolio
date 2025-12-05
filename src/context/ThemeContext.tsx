import { createContext, useState, useEffect, type ReactNode } from "react"
import type { ThemeColors } from "../styles/colors"
import axios from "axios"
import { BASE_URL } from "@/api"

type ThemeType = "light" | "dark"

interface ThemeContextType {
    theme: ThemeType
    colors: ThemeColors
    setTheme: (theme: ThemeType) => void
}

const FALLBACK_THEME: ThemeColors = {
    background: "#ffffff",
    backgroundAlt: "#f9f9f9",
    backgroundElevated: "#f0f0f0",
    border: "#e0e0e0",
    card: "#ffffff",
    chip: "#f0f0f0",
    formBackground: "#f9f9f9",
    formBorder: "#e0e0e0",
    icon: "#0070f3",
    primary: "#0060df",
    primaryHover: "#0060df",
    shadow: "rgba(0, 0, 0, 0.1)",
    shadowHover: "rgba(0, 0, 0, 0.15)",
    tag: "#f0f0f0",
    tagText: "#555555",
    text: "#333333",
    textDimmed: "#555555",
    textMuted: "#666666",
    timeline: "#e0e0e0"
} as ThemeColors; // Ensure this matches your imported type definition

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    colors: FALLBACK_THEME,
    setTheme: () => { },
})

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme") as ThemeType | null;
            return stored === "light" || stored === "dark" ? stored : "light";
        }
        return "light";
    });

    const [themes, setThemes] = useState<Record<ThemeType, ThemeColors>>({
        light: FALLBACK_THEME,
        dark: FALLBACK_THEME, 
    })

    useEffect(() => {
        axios.get(BASE_URL + "/api/styles/")
            .then(res => {
                const fetchedThemes = res.data.reduce((acc: any, item: any) => {
                    if (item.name === "light" || item.name === "dark") {
                        acc[item.name] = item.data;
                    }
                    return acc;
                }, {} as Record<ThemeType, ThemeColors>);

                setThemes(prev => ({ ...prev, ...fetchedThemes }));
            })
            .catch(err => {
                console.error("Failed to fetch themes from API, using fallback:", err);
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
