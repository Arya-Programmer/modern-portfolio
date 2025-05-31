import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./About.module.css"

export default function About() {
    const { colors } = useContext(ThemeContext)

    const sectionStyle = {
        backgroundColor: colors.background,
        color: colors.text,
    }

    const titleAfterStyle = {
        backgroundColor: colors.primary,
    }

    const textStyle = {
        color: colors.textDimmed,
    }

    return (
        <section id="about" className={styles.about} style={sectionStyle}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    About Me
                    <span className={styles.titleAfter} style={titleAfterStyle}></span>
                </h2>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p style={textStyle}>
                            I'm a full-stack developer with a strong focus on backend systems.
                            I build scalable, efficient server-side applications and clean, well-documented APIs.
                            On the frontend, I use React and TypeScript to create responsive, accessible interfaces.
                        </p>
                        <p style={textStyle}>
                            When I'm not coding, you can find me exploring new hiking trails, reading science fiction, or
                            experimenting with new recipes in the kitchen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
