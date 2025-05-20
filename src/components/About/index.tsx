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
                            I'm a passionate frontend developer with a keen eye for creating elegant and functional user interfaces.
                            With several years of experience in web development, I specialize in building responsive, accessible, and
                            performant web applications using modern technologies like React and TypeScript.
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
