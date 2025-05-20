"use client"

import { useState, useEffect, useContext } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "../ThemeToggle"
import { ThemeContext } from "../../context/ThemeContext"
import { useMobile } from "../../hooks/useMobile"
import styles from "./Header.module.css"

export default function Header() {
    const { theme } = useContext(ThemeContext)
    const isMobile = useMobile()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    const handleNavClick = (section: string) => {
        setActiveSection(section)
        setIsMenuOpen(false)

        const element = document.getElementById(section)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    useEffect(() => {
        if (!isMobile && isMenuOpen) {
            setIsMenuOpen(false)
        }
    }, [isMobile, isMenuOpen])

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "skills", "experiences", "projects", "about", "contact"]

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${styles.header} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo} onClick={() => handleNavClick("home")}>
                    <span className={styles.name}>Portfolio</span>
                </a>

                {isMobile ? (
                    <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                ) : (
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <a
                                    href="#home"
                                    className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick("home")
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`${styles.navLink} ${activeSection === "skills" ? styles.active : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick("skills")
                                    }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experiences"
                                    className={`${styles.navLink} ${activeSection === "experiences" ? styles.active : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick("experiences")
                                    }}
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`${styles.navLink} ${activeSection === "projects" ? styles.active : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick("projects")
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick("contact")
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ThemeToggle />
                    </nav>
                )}

                {isMobile && isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <nav>
                            <ul className={styles.mobileNavList}>
                                <li>
                                    <a
                                        href="#home"
                                        className={`${styles.mobileNavLink} ${activeSection === "home" ? styles.active : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick("home")
                                        }}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className={`${styles.mobileNavLink} ${activeSection === "skills" ? styles.active : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick("skills")
                                        }}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#experiences"
                                        className={`${styles.mobileNavLink} ${activeSection === "experiences" ? styles.active : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick("experiences")
                                        }}
                                    >
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className={`${styles.mobileNavLink} ${activeSection === "projects" ? styles.active : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick("projects")
                                        }}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className={`${styles.mobileNavLink} ${activeSection === "contact" ? styles.active : ""}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            handleNavClick("contact")
                                        }}
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li className={styles.mobileThemeToggle}>
                                    <ThemeToggle />
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
