"use client"

import { useContext } from "react"
import { ExternalLink, Github } from "lucide-react"
import { ThemeContext } from "../../context/ThemeContext"
import styles from "./Projects.module.css"

export default function Projects() {
    const { theme } = useContext(ThemeContext)

    const projects = [
        {
            title: "E-commerce Website",
            description: "A fully responsive e-commerce platform built with React and Node.js.",
            image: "https://via.placeholder.com/500x300",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Task Management App",
            description: "A drag-and-drop task management application with user authentication.",
            image: "https://via.placeholder.com/500x300",
            tags: ["React", "Firebase", "Tailwind CSS"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that displays current and forecasted weather data.",
            image: "https://via.placeholder.com/500x300",
            tags: ["JavaScript", "API", "CSS"],
            liveLink: "#",
            githubLink: "#",
        },
    ]

    return (
        <section id="projects" className={`${styles.projects} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                            </div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.projectLinks}>
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                        <Github size={16} />
                                        <span>Source Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
