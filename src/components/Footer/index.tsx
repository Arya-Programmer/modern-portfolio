import { useContext } from "react"

import { Github, Linkedin, Twitter } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Footer.module.css"

export default function Footer() {
    const { colors } = useContext(ThemeContext)
    const currentYear = new Date().getFullYear()

    const footerStyle = {
        backgroundColor: colors.backgroundAlt,
        color: colors.text,
    }

    const socialLinkStyle = {
        backgroundColor: colors.backgroundElevated,
        color: colors.text,
    }

    const socialLinkHoverStyle = {
        backgroundColor: colors.chip,
    }

    const copyrightStyle = {
        color: colors.textMuted,
    }

    return (
        <footer className={styles.footer} style={footerStyle}>
            <div className={styles.container}>
                <div className={styles.social}>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        style={socialLinkStyle}
                        onMouseOver={(e) => {
                            Object.assign(e.currentTarget.style, socialLinkHoverStyle)
                            e.currentTarget.style.transform = "translateY(-3px)"
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = colors.backgroundElevated
                            e.currentTarget.style.transform = "translateY(0)"
                        }}
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        style={socialLinkStyle}
                        onMouseOver={(e) => {
                            Object.assign(e.currentTarget.style, socialLinkHoverStyle)
                            e.currentTarget.style.transform = "translateY(-3px)"
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = colors.backgroundElevated
                            e.currentTarget.style.transform = "translateY(0)"
                        }}
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        style={socialLinkStyle}
                        onMouseOver={(e) => {
                            Object.assign(e.currentTarget.style, socialLinkHoverStyle)
                            e.currentTarget.style.transform = "translateY(-3px)"
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = colors.backgroundElevated
                            e.currentTarget.style.transform = "translateY(0)"
                        }}
                    >
                        <Twitter size={20} />
                    </a>
                </div>
                <p className={styles.copyright} style={copyrightStyle}>
                    &copy; {currentYear} Your Name. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
