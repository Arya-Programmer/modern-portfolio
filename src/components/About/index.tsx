import { useContext, useEffect, useState } from "react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./About.module.css"
import { getAbout } from "@/api/about";

type About = {
    name: string;
    occupation: string;
    bio: string;
    description: string;
    self_portrait: string;
    email: string;
    phone: string;
    location: string;
}
export default function About() {
    const { colors } = useContext(ThemeContext)
    const [about, setAbout] = useState<About>();

    useEffect(() => {
        getAbout().then(data => setAbout(data[0])).catch(console.error);
    }, [])

    const sectionStyle = {
        backgroundColor: colors.background,
        color: colors.text,
    }

    const titleAfterStyle = {
        backgroundColor: colors.primary,
    }

    const textStyle = {
        color: colors.textDimmed,
        whiteSpace: "break-spaces"
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
                            {about?.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
