import { useContext } from "react"

import { Moon, Sun } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./ThemeToggle.module.css"

export function ThemeToggle() {
    const { theme, colors, setTheme } = useContext(ThemeContext)

    return (
        <button
            className={styles.themeToggle}
            style={{
                backgroundColor: theme === "dark" ? colors.backgroundElevated : colors.backgroundElevated,
                color: colors.text,
            }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}
