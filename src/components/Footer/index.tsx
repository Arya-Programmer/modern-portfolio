"use client"

import { useContext } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./Footer.module.css"

export default function Footer() {
    const { theme } = useContext(ThemeContext)
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`${styles.footer} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <div className={styles.social}>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                </div>
                <p className={styles.copyright}>&copy; {currentYear} Your Name. All rights reserved.</p>
            </div>
        </footer>
    )
}
