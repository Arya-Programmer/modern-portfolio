import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Skills.module.css"

export default function Skills() {
    const { colors } = useContext(ThemeContext)

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Node.js",
        "Git",
        "Tailwind CSS",
        "MongoDB",
        "GraphQL",
        "REST API",
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Testing",
    ]

    const sectionStyle = {
        backgroundColor: colors.background,
        color: colors.text,
    }

    const titleAfterStyle = {
        backgroundColor: colors.primary,
    }

    const skillChipStyle = {
        backgroundColor: colors.chip,
        color: colors.text,
        boxShadow: `0 2px 5px ${colors.shadow}`,
    }

    const skillChipHoverStyle = {
        boxShadow: `0 5px 10px ${colors.shadowHover}`,
    }

    return (
        <section id="skills" className={styles.skills} style={sectionStyle}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Skills
                    <span className={styles.titleAfter} style={titleAfterStyle}></span>
                </h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className={styles.skillChip}
                            style={skillChipStyle}
                            onMouseOver={(e) => {
                                Object.assign(e.currentTarget.style, skillChipHoverStyle)
                                e.currentTarget.style.transform = "translateY(-3px)"
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = `0 2px 5px ${colors.shadow}`
                                e.currentTarget.style.transform = "translateY(0)"
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
