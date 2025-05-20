import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Skills.module.css"

export default function Skills() {
    const { theme } = useContext(ThemeContext)

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

    return (
        <section id="skills" className={`${styles.skills} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill) => (
                        <div key={skill} className={styles.skillChip}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
