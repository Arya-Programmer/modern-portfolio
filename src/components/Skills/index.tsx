import { useContext, useState, useEffect } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Skills.module.css"
import { getAbout } from "@/api/about";

type Skill = {
    id: number;
    name: string;
}

type About = {
    name: string;
    occupation: string;
    bio: string;
    self_portrait: string;
    email: string;
    phone: string;
    location: string;
    skills: Skill[];
}

export default function Skills() {
    const { colors } = useContext(ThemeContext)
    const [about, setAbout] = useState<About>();

    useEffect(() => {
        getAbout().then(data => { setAbout(data[0]); console.log(data) }).catch(console.error);
    }, [])

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
                    {about?.skills.map(skill => (
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
