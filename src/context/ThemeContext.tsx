import { createContext, useState, useEffect, type ReactNode } from "react"
import { lightTheme, darkTheme, type ThemeColors } from "../styles/colors"

type ThemeType = "light" | "dark"

interface ThemeContextType {
    theme: ThemeType
    colors: ThemeColors
    setTheme: (theme: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    colors: lightTheme,
    setTheme: () => { },
})

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>("light")
    const [colors, setColors] = useState<ThemeColors>(lightTheme)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as ThemeType | null
        if (storedTheme) {
            setTheme(storedTheme)
            setColors(storedTheme === "dark" ? darkTheme : lightTheme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
        setColors(theme === "dark" ? darkTheme : lightTheme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, colors, setTheme }}>{children}</ThemeContext.Provider>
}
