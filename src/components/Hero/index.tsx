"use client"

import { useContext } from "react"
import { ArrowDown } from "lucide-react"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./Hero.module.css"

export default function Hero() {
    const { theme } = useContext(ThemeContext)

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className={`${styles.hero} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            Hi, I'm <span className={styles.highlight}>Your Name</span>
                        </h1>
                        <h2 className={styles.subtitle}>Frontend Developer</h2>
                        <p className={styles.description}>I build exceptional and accessible digital experiences for the web.</p>
                        <div className={styles.actions}>
                            <button className={styles.primaryButton} onClick={() => scrollToSection("contact")}>
                                Contact Me
                            </button>
                            <button className={styles.secondaryButton} onClick={() => scrollToSection("projects")}>
                                View Projects
                            </button>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.profileImage} />
                    </div>
                </div>
                <button
                    className={styles.scrollDown}
                    onClick={() => scrollToSection("skills")}
                    aria-label="Scroll to skills section"
                >
                    <ArrowDown size={24} />
                </button>
            </div>
        </section>
    )
}
