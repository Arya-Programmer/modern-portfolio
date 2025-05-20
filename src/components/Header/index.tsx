import { useState, useEffect, useContext } from "react"

import { Menu, X } from "lucide-react"

import { ThemeToggle } from "../ThemeToggle"
import { useMobile } from "@hooks/useMobile"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Header.module.css"

export default function Header() {
    const { colors } = useContext(ThemeContext)
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

    const headerStyle = {
        backgroundColor: colors.background + "E6", // Adding transparency
        backdropFilter: "blur(10px)",
        boxShadow: `0 2px 10px ${colors.shadow}`,
    }

    const logoStyle = {
        color: colors.text,
    }

    const navLinkStyle = {
        color: colors.textDimmed,
    }

    const activeNavLinkStyle = {
        color: colors.text,
    }

    const menuButtonStyle = {
        color: colors.text,
    }

    const mobileMenuStyle = {
        backgroundColor: colors.background + "F2", // More opacity for mobile menu
        boxShadow: `0 4px 10px ${colors.shadow}`,
    }

    return (
        <header className={styles.header} style={headerStyle}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo} style={logoStyle} onClick={() => handleNavClick("home")}>
                    <span className={styles.name}>Portfolio</span>
                </a>

                {isMobile ? (
                    <button className={styles.menuButton} style={menuButtonStyle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                ) : (
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <a
                                    href="#home"
                                    className={styles.navLink}
                                    style={activeSection === "home" ? activeNavLinkStyle : navLinkStyle}
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
                                    className={styles.navLink}
                                    style={activeSection === "skills" ? activeNavLinkStyle : navLinkStyle}
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
                                    className={styles.navLink}
                                    style={activeSection === "experiences" ? activeNavLinkStyle : navLinkStyle}
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
                                    className={styles.navLink}
                                    style={activeSection === "projects" ? activeNavLinkStyle : navLinkStyle}
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
                                    className={styles.navLink}
                                    style={activeSection === "contact" ? activeNavLinkStyle : navLinkStyle}
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
                    <div className={styles.mobileMenu} style={mobileMenuStyle}>
                        <nav>
                            <ul className={styles.mobileNavList}>
                                <li>
                                    <a
                                        href="#home"
                                        className={styles.mobileNavLink}
                                        style={activeSection === "home" ? activeNavLinkStyle : navLinkStyle}
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
                                        className={styles.mobileNavLink}
                                        style={activeSection === "skills" ? activeNavLinkStyle : navLinkStyle}
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
                                        className={styles.mobileNavLink}
                                        style={activeSection === "experiences" ? activeNavLinkStyle : navLinkStyle}
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
                                        className={styles.mobileNavLink}
                                        style={activeSection === "projects" ? activeNavLinkStyle : navLinkStyle}
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
                                        className={styles.mobileNavLink}
                                        style={activeSection === "contact" ? activeNavLinkStyle : navLinkStyle}
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
