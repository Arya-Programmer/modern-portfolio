import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Experiences.module.css"

export default function Experiences() {
    const { colors } = useContext(ThemeContext)

    const experiences = [
        {
            company: "2025 - Summer - Internship",
            role: "Fullstack Developer - Internship",
            period: "2025 - Spring",
            description: "Built a website to show different economic data of Iraq",
            logo: "/AUISLogo.png",
        },
        {
            company: "2025 - Spring - Internship",
            role: "IT Helpdesk - Internship",
            period: "2025 - Spring",
            description: "Taking a break from development world, helped in constant maintenance of IT Assets and Labs",
            logo: "/AUISLogo.png",
        },
        {
            company: "KurdsatTV",
            role: "Fullstack Developer - Internship",
            period: "2024 - Summer",
            description: "Rebuilding their main website, making it more feature rich and user friendly",
            logo: "/KurdsatLogo.jpg",
        },
        {
            company: "Arya Stationery",
            role: "Frontend Developer/Designer",
            period: "2023 - Present",
            description: "Created my own stationery, designed Textbooks for Teachers, and Applications to help 12th grade students",
            logo: "/AryaStationeryLogo.jpg",
        },
        {
            company: "Nova",
            role: "Junior Backend Developer",
            period: "2022 - 2023",
            description: "Started my carrier by building Applications and Web solutions",
            logo: "/NovaLogo.jpg",
        },
    ]

    const sectionStyle = {
        backgroundColor: colors.backgroundAlt,
        color: colors.text,
    }

    const titleAfterStyle = {
        backgroundColor: colors.primary,
    }

    const logoContainerStyle = {
        backgroundColor: colors.backgroundElevated,
        boxShadow: `0 0 15px ${colors.shadow}`,
    }

    const contentStyle = {
        backgroundColor: colors.card,
        boxShadow: `0 5px 15px ${colors.shadow}`,
        borderLeftColor: colors.timeline,
    }

    const periodStyle = {
        color: colors.textMuted,
    }

    const descriptionStyle = {
        color: colors.textDimmed,
    }

    return (
        <section id="experiences" className={styles.experiences} style={sectionStyle}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Work Experience
                    <span className={styles.titleAfter} style={titleAfterStyle}></span>
                </h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div >
                                <img className={styles.logoContainer} style={logoContainerStyle} src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} />
                            </div>
                            <div className={styles.content} style={contentStyle}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <div className={styles.companyInfo}>
                                    <span className={styles.company}>{exp.company}</span>
                                    <span className={styles.period} style={periodStyle}>
                                        {exp.period}
                                    </span>
                                </div>
                                <p className={styles.description} style={descriptionStyle}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
