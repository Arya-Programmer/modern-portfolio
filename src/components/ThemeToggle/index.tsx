import { useContext } from "react"

import { Moon, Sun } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./ThemeToggle.module.css"

export function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <button
            className={`${styles.themeToggle} ${theme === "dark" ? styles.dark : styles.light}`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}
