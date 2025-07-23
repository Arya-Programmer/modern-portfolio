import { useContext, useState, useEffect } from "react"

import { getExperiences } from '@/api/experiences';

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Experiences.module.css"

type Experience = {
    company: string;
    role: string;
    period: string;
    description: string;
    logo: string;
}

export default function Experiences() {
    const { colors } = useContext(ThemeContext)
    const [experiences, setExperiences] = useState<Experience[]>();

    useEffect(() => {
        getExperiences().then(setExperiences).catch(console.error);
    }, [])


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
                    {experiences?.slice().reverse().map((exp: any, index: number) => (
                        <div key={index} className={styles.timelineItem}>
                            <div >
                                <img className={styles.logoContainer} style={logoContainerStyle} src={exp.logo.split("/").pop() || "/placeholder.svg"} alt={`${exp.company} logo`} />
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
