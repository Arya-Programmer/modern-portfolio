import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Experiences.module.css"

export default function Experiences() {
    const { theme } = useContext(ThemeContext)

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

    return (
        <section id="experiences" className={`${styles.experiences} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <h2 className={styles.title}>Work Experience</h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.logoContainer}>
                                <img src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} className={styles.logo} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <div className={styles.companyInfo}>
                                    <span className={styles.company}>{exp.company}</span>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <p className={styles.description}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
