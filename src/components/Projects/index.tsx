import { useContext, useState, useEffect } from "react"

import { ExternalLink, Github } from "lucide-react"

import { getProjects } from '@/api/projects';

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Projects.module.css"

type Tag = {
    id: number;
    name: string;
}

type Project = {
    title: string;
    description: string;
    image: string;
    tags: Tag[];
    liveUrl: string;
    githubUrl: string;
}

export default function Projects() {
    const { colors } = useContext(ThemeContext)
    const [projects, setProjects] = useState<Project[]>();

    useEffect(() => {
        getProjects().then(setProjects).catch(console.error);
    }, [])

    // const projects = [
    //     {
    //         title: "E-commerce Website",
    //         description: "A fully responsive e-commerce platform built with React and Node.js.",
    //         image: "https://via.placeholder.com/500x300",
    //         tags: ["React", "Node.js", "MongoDB", "Express"],
    //         liveLink: "#",
    //         githubLink: "#",
    //     },
    //     {
    //         title: "Task Management App",
    //         description: "A drag-and-drop task management application with user authentication.",
    //         image: "https://via.placeholder.com/500x300",
    //         tags: ["React", "Firebase", "Tailwind CSS"],
    //         liveLink: "#",
    //         githubLink: "#",
    //     },
    //     {
    //         title: "Weather Dashboard",
    //         description: "A weather application that displays current and forecasted weather data.",
    //         image: "https://via.placeholder.com/500x300",
    //         tags: ["JavaScript", "API", "CSS"],
    //         liveLink: "#",
    //         githubLink: "#",
    //     },
    // ]

    const sectionStyle = {
        backgroundColor: colors.backgroundAlt,
        color: colors.text,
    }

    const titleAfterStyle = {
        backgroundColor: colors.primary,
    }

    const projectCardStyle = {
        backgroundColor: colors.card,
        boxShadow: `0 5px 15px ${colors.shadow}`,
    }

    const projectCardHoverStyle = {
        boxShadow: `0 10px 25px ${colors.shadowHover}`,
    }

    const projectDescriptionStyle = {
        color: colors.textDimmed,
    }

    const tagStyle = {
        backgroundColor: colors.tag,
        color: colors.tagText,
    }

    const projectLinkStyle = {
        color: colors.primary,
    }

    const projectLinkHoverStyle = {
        color: colors.primaryHover,
    }

    return (
        <section id="projects" className={styles.projects} style={sectionStyle}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Projects
                    <span className={styles.titleAfter} style={titleAfterStyle}></span>
                </h2>
                <div className={styles.projectsGrid}>
                    {projects?.map((project, index) => (
                        <div
                            key={index}
                            className={styles.projectCard}
                            style={projectCardStyle}
                            onMouseOver={(e) => {
                                Object.assign(e.currentTarget.style, projectCardHoverStyle)
                                e.currentTarget.style.transform = "translateY(-10px)"
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.boxShadow = `0 5px 15px ${colors.shadow}`
                                e.currentTarget.style.transform = "translateY(0)"
                            }}
                        >
                            <div className={styles.projectImage}>
                                <img src={project.image.split("/").pop() || "/placeholder.svg"} alt={project.title} />
                            </div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription} style={projectDescriptionStyle}>
                                    {project.description}
                                </p>
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.tag} style={tagStyle}>
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.projectLink}>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.projectLink}
                                        style={projectLinkStyle}
                                        onMouseOver={(e) => {
                                            Object.assign(e.currentTarget.style, projectLinkHoverStyle)
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = colors.primary
                                        }}
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.projectLink}
                                        style={projectLinkStyle}
                                        onMouseOver={(e) => {
                                            Object.assign(e.currentTarget.style, projectLinkHoverStyle)
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.color = colors.primary
                                        }}
                                    >
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
