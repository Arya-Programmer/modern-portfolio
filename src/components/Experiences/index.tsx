import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Experiences.module.css"

export default function Experiences() {
    const { colors } = useContext(ThemeContext)

    const experiences = [
        {
            company: "Company One",
            role: "Senior Frontend Developer",
            period: "2021 - Present",
            description: "Led the development of the company's main product, improving performance by 40%.",
            logo: "https://via.placeholder.com/80",
        },
        {
            company: "Company Two",
            role: "Frontend Developer",
            period: "2019 - 2021",
            description: "Worked on multiple client projects using React and Next.js.",
            logo: "https://via.placeholder.com/80",
        },
        {
            company: "Company Three",
            role: "Junior Developer",
            period: "2017 - 2019",
            description: "Started my career working on UI components and responsive layouts.",
            logo: "https://via.placeholder.com/80",
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
                            <div className={styles.logoContainer} style={logoContainerStyle}>
                                <img src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} className={styles.logo} />
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
