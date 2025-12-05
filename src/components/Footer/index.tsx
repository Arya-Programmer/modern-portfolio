import { useContext, useEffect, useState, ReactElement } from "react"

import { Github, Linkedin, Twitter, PenTool, Instagram, Facebook, Send } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Footer.module.css"

const socialMediaIcons: Record<string, ReactElement> = {
    twitter: <Twitter size={20} />,
    linkedin: <Linkedin size={20} />,
    behance: <PenTool size={20} />,
    github: <Github size={20} />,
    instagram: <Instagram size={20} />,
    facebook: <Facebook size={20} />,
    telegram: <Send size={20} />,
}

export default function Footer() {
    const { colors } = useContext(ThemeContext)
    const currentYear = new Date().getFullYear()
    const socials = [
        { name: "github", link: "https://github.com/Arya-Programmer" },
    ]

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
                    {socials?.map(data =>
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={data.name}
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
                            {socialMediaIcons[data.name.toLowerCase()]}
                        </a>
                    )}
                </div>
                <p className={styles.copyright} style={copyrightStyle}>
                    &copy; {currentYear} All rights reserved.
                </p>
            </div>
        </footer>
    )
}
