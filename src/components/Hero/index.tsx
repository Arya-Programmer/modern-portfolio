import { useContext, useState, useEffect } from "react"

import { ArrowDown } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Hero.module.css"

export default function Hero() {
    const { colors } = useContext(ThemeContext)

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    const sectionStyle = {
        backgroundColor: colors.background,
        color: colors.text,
    }

    const highlightStyle = {
        color: colors.primary,
    }

    const primaryButtonStyle = {
        backgroundColor: colors.primary,
        color: "#ffffff",
    }

    const primaryButtonHoverStyle = {
        backgroundColor: colors.primaryHover,
    }

    const secondaryButtonStyle = {
        backgroundColor: "transparent",
        color: colors.text,
        borderColor: colors.text,
    }

    const scrollDownStyle = {
        color: colors.text,
    }

    const profileImageWrapperStyle = {
        borderColor: colors.backgroundElevated,
    }

    return (
        <section id="home" className={styles.hero} style={sectionStyle}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            Hi, I'm{" "}
                            <span className={styles.highlight} style={highlightStyle}>
                            Arya Kurdo
                            </span>
                        </h1>
                        <h2 className={styles.subtitle}>Software Engineer</h2>
                        <p className={styles.description}>I build exceptional and accessible digital experiences across platforms.</p>
                        <div className={styles.actions}>
                            <button
                                className={styles.primaryButton}
                                style={primaryButtonStyle}
                                onClick={() => scrollToSection("contact")}
                                onMouseOver={(e) => {
                                    Object.assign(e.currentTarget.style, primaryButtonHoverStyle)
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.primary
                                }}
                            >
                                Contact Me
                            </button>
                            <button
                                className={styles.secondaryButton}
                                style={secondaryButtonStyle}
                                onClick={() => scrollToSection("projects")}
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                    <div className={styles.imageWrapper} style={profileImageWrapperStyle}>
                        <img className={styles.profileImage} src={"/snapshot.jpg"} />
                    </div>
                </div>
                <button
                    className={styles.scrollDown}
                    style={scrollDownStyle}
                    onClick={() => scrollToSection("skills")}
                    aria-label="Scroll to skills section"
                >
                    <ArrowDown size={24} />
                </button>
            </div>
        </section>
    )
}
