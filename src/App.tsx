import { useContext } from "react"
import { Routes, Route } from "react-router-dom"

import Header from "@components/Header"
import Hero from "@components/Hero"
import Skills from "@components/Skills"
import Experiences from "@components/Experiences"
import Projects from "@components/Projects"
import About from "@components/About"
import Contact from "@components/Contact"
import Footer from "@components/Footer"

import { ThemeContext } from "@/context/ThemeContext"
import styles from "./App.module.css"

function HomePage() {
    const { colors } = useContext(ThemeContext)

    return (
        <div
            className={styles.container}
            style={{
                backgroundColor: colors.background,
                color: colors.text,
            }}
        >
            <Header />
            <main className={styles.main}>
                <Hero />
                <Skills />
                <Experiences />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default App
