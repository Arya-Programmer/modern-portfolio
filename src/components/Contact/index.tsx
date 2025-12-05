import { useState, useContext, type ChangeEvent, type FormEvent, useEffect } from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Contact.module.css"

export default function Contact() {
    const { colors } = useContext(ThemeContext)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // TODO: Submit the data to telegram or something

        alert("Thanks for your message! I'll get back to you soon.")
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    const sectionStyle = {
        backgroundColor: colors.backgroundAlt,
        color: colors.text,
    }

    const titleAfterStyle = {
        backgroundColor: colors.primary,
    }

    const contactIconStyle = {
        backgroundColor: colors.backgroundElevated,
        color: colors.primary,
    }

    const contactItemTextStyle = {
        color: colors.textMuted,
    }

    const formControlStyle = {
        backgroundColor: colors.formBackground,
        borderColor: colors.formBorder,
        color: colors.text,
    }

    const formControlFocusStyle = {
        borderColor: colors.primary,
        boxShadow: `0 0 0 2px ${colors.primary}20`,
    }

    const submitButtonStyle = {
        backgroundColor: colors.primary,
        color: "#ffffff",
    }

    const submitButtonHoverStyle = {
        backgroundColor: colors.primaryHover,
    }

    return (
        <section id="contact" className={styles.contact} style={sectionStyle}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Contact Me
                    <span className={styles.titleAfter} style={titleAfterStyle}></span>
                </h2>
                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <Mail width="30" height="30" viewBox="-2 -2 28 28" className={styles.contactIcon} style={contactIconStyle} />
                            <div>
                                <h3>Email</h3>
                                <p style={contactItemTextStyle}>aryakurdo@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone width="30" height="30" viewBox="-2 -2 28 28" className={styles.contactIcon} style={contactIconStyle} />
                            <div>
                                <h3>Phone</h3>
                                <p style={contactItemTextStyle}>+964 772 152 4722</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin width="30" height="30" viewBox="-2 -2 28 28" className={styles.contactIcon} style={contactIconStyle} />
                            <div>
                                <h3>Location</h3>
                                <p style={contactItemTextStyle}>Kurdistan, Sulaymaniyah</p>
                            </div>
                        </div>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.formControl}
                                style={formControlStyle}
                                onFocus={(e) => {
                                    Object.assign(e.currentTarget.style, formControlFocusStyle)
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = colors.formBorder
                                    e.currentTarget.style.boxShadow = "none"
                                }}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.formControl}
                                style={formControlStyle}
                                onFocus={(e) => {
                                    Object.assign(e.currentTarget.style, formControlFocusStyle)
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = colors.formBorder
                                    e.currentTarget.style.boxShadow = "none"
                                }}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className={styles.formControl}
                                style={formControlStyle}
                                onFocus={(e) => {
                                    Object.assign(e.currentTarget.style, formControlFocusStyle)
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = colors.formBorder
                                    e.currentTarget.style.boxShadow = "none"
                                }}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={styles.formControl}
                                style={formControlStyle}
                                rows={5}
                                onFocus={(e) => {
                                    Object.assign(e.currentTarget.style, formControlFocusStyle)
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = colors.formBorder
                                    e.currentTarget.style.boxShadow = "none"
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.submitButton}
                            style={submitButtonStyle}
                            onMouseOver={(e) => {
                                Object.assign(e.currentTarget.style, submitButtonHoverStyle)
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = colors.primary
                            }}
                        >
                            <Send size={16} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
