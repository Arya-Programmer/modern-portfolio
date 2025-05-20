import { useState, useContext, type ChangeEvent, type FormEvent } from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./Contact.module.css"

export default function Contact() {
    const { theme } = useContext(ThemeContext)
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
        console.log("Form submitted:", formData)
        // Here you would typically send the form data to your backend or a service like Formspree
        alert("Thanks for your message! I'll get back to you soon.")
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    return (
        <section id="contact" className={`${styles.contact} ${theme === "dark" ? styles.dark : styles.light}`}>
            <div className={styles.container}>
                <h2 className={styles.title}>Contact Me</h2>
                <div className={styles.contactContent}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <Mail className={styles.contactIcon} />
                            <div>
                                <h3>Email</h3>
                                <p>your.email@example.com</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone className={styles.contactIcon} />
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (123) 456-7890</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin className={styles.contactIcon} />
                            <div>
                                <h3>Location</h3>
                                <p>San Francisco, CA</p>
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
                                rows={5}
                            />
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            <Send size={16} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
