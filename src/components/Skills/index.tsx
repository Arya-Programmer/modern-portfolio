import { useContext, useState, useEffect } from "react"

import { ThemeContext } from "@/context/ThemeContext"

import styles from "./Skills.module.css"

type Skill = {
    id: number;
    name: string;
}

export default function Skills() {
    const { colors } = useContext(ThemeContext)
    const skills = [
        { id: 1, name: "HTML/CSS" },
        { id: 2, name: "JavaScript/NodeJs" },
        { id: 3, name: "TypeScript" },
        { id: 4, name: "React" },
        { id: 5, name: "Git/Github" },
        { id: 6, name: "MongoDB" },
        { id: 7, name: "SQL" },
        { id: 8, name: "Django/DjangoREST" },
        { id: 9, name: "Figma" },
        { id: 10, name: "Java" },
        { id: 11, name: "NextJs" },
        { id: 12, name: "Flutter" },
        { id: 13, name: "Photoshop" },
        { id: 14, name: "Illustrator" },
        { id: 15, name: "100 WPM" },
        { id: 16, name: "CCNA" },
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
                    {skills.map(skill => (
                        <div
                            key={skill.id}
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
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
