import { useEffect, useState, type CSSProperties } from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom"

import { BrandLogo, brandIcons, type BrandIconId } from "./brand-icons"
import {
    books,
    experiences,
    movies,
    profileLinks,
    projects,
    skills,
    socials,
} from "./portfolio-data"
import "./App.css"

type Theme = "light" | "dark"

const navigation = [
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#work" },
    { label: "Books", href: "/#books" },
    { label: "Movies", href: "/#movies" },
]

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
    return (
        <button
            className="theme-toggle"
            type="button"
            onClick={onToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
        </button>
    )
}

function SiteHeader({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="header-inner shell">
                <Link className="brand" to="/" aria-label="Arya Kurdo home" onClick={() => setMenuOpen(false)}>
                    AK<span>.</span>
                </Link>

                <nav className="desktop-nav" aria-label="Primary navigation">
                    {navigation.map(item => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                    <Link className="nav-links-route" to="/links">
                        Links
                    </Link>
                </nav>

                <div className="header-actions">
                    <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    <button
                        className={`menu-button ${menuOpen ? "is-open" : ""}`}
                        type="button"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(open => !open)}
                    >
                        <span />
                        <span />
                    </button>
                </div>

                {menuOpen ? (
                    <nav className="mobile-nav" aria-label="Mobile navigation">
                        {navigation.map(item => (
                            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                        <Link to="/links" onClick={() => setMenuOpen(false)}>
                            Links
                        </Link>
                    </nav>
                ) : null}
            </div>
        </header>
    )
}

function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="shell footer-inner">
                <div>
                    <Link className="brand footer-brand" to="/" aria-label="Arya Kurdo home">
                        AK<span>.</span>
                    </Link>
                    <p>Backend engineer in Sulaimani, Kurdistan.</p>
                </div>

                <div className="footer-socials" aria-label="Social profiles">
                    {socials.map(social => (
                        <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                            <span>{social.label}</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </div>

                <div className="footer-meta">
                    <Link to="/links">All links</Link>
                    <a href="mailto:aryakurdo@gmail.com">aryakurdo@gmail.com</a>
                    <span>© {new Date().getFullYear()} Arya Kurdo</span>
                </div>
            </div>
        </footer>
    )
}

// Fallback mark for experience entries with no logo file. Uses the capitalised
// words only, so "Department of Information Technology, Erbil" reads as "DIT".
function initialsOf(company: string) {
    return company
        .split(/[^A-Za-z]+/)
        .filter(word => word && word[0] === word[0].toUpperCase())
        .map(word => word[0])
        .join("")
        .slice(0, 3)
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
    return (
        <div className="section-heading">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {copy ? <p className="section-copy">{copy}</p> : null}
        </div>
    )
}

function Bookshelf() {
    if (books.length > 0) {
        return (
            <div className="books-grid">
                {books.map(book => (
                    <article className="book-entry" key={`${book.title}-${book.author}`}>
                        <div className="book-stage" tabIndex={0}>
                            <div className="book-object" style={{ "--book-accent": book.accent } as CSSProperties}>
                                <div className="book-cover">
                                    {book.cover ? (
                                        <img src={book.cover} alt="" />
                                    ) : (
                                        <>
                                            <span>{book.status}</span>
                                            <strong>{book.title}</strong>
                                            <small>{book.author}</small>
                                        </>
                                    )}
                                </div>
                                <div className="book-pages" />
                                <div className="book-back" />
                            </div>
                        </div>
                        <p className="media-kicker">{book.status}</p>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </article>
                ))}
            </div>
        )
    }

    return (
        <div className="books-grid books-empty" aria-label="Reading shelf ready for titles">
            {[
                { status: "Currently reading", accent: "#f1683c" },
                { status: "Read", accent: "#3478f6" },
                { status: "Read", accent: "#22a06b" },
            ].map((item, index) => (
                <article className="book-entry" key={`${item.status}-${index}`}>
                    <div className="book-stage" tabIndex={0}>
                        <div
                            className="book-object placeholder-book"
                            style={{ "--book-accent": item.accent } as CSSProperties}
                        >
                            <div className="book-cover">
                                <span>{item.status}</span>
                                <strong>Add a title</strong>
                                <small>Your shelf is ready</small>
                            </div>
                            <div className="book-pages" />
                            <div className="book-back" />
                        </div>
                    </div>
                    <p className="media-kicker">{item.status}</p>
                    <h3>Waiting for your pick</h3>
                    <p>Add it in portfolio-data.ts</p>
                </article>
            ))}
        </div>
    )
}

function MovieShelf() {
    if (movies.length > 0) {
        return (
            <div className="movies-grid">
                {movies.map(movie => (
                    <article className="movie-card" key={`${movie.title}-${movie.year ?? ""}`}>
                        <div className="movie-poster">
                            {movie.poster ? (
                                <img src={movie.poster} alt={`${movie.title} poster`} />
                            ) : (
                                <span>{movie.title.slice(0, 1)}</span>
                            )}
                            {movie.rating ? <strong>{movie.rating}</strong> : null}
                        </div>
                        <div className="movie-review">
                            <p className="media-kicker">{movie.year ?? "Watched"}</p>
                            <h3>{movie.title}</h3>
                            <p>“{movie.review}”</p>
                        </div>
                    </article>
                ))}
            </div>
        )
    }

    return (
        <div className="movies-grid movies-empty" aria-label="Movie review shelf ready for entries">
            {["A", "K"].map((letter, index) => (
                <article className="movie-card" key={letter}>
                    <div className={`movie-poster movie-placeholder movie-placeholder-${index + 1}`}>
                        <span>{letter}</span>
                    </div>
                    <div className="movie-review">
                        <p className="media-kicker">Your review</p>
                        <h3>Add a film</h3>
                        <p>Movie posters, ratings, and your own words will live here.</p>
                    </div>
                </article>
            ))}
        </div>
    )
}

function HomePage({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
    return (
        <>
            <SiteHeader theme={theme} onToggleTheme={onToggleTheme} />
            <main>
                <section className="hero shell" id="home" aria-labelledby="hero-title">
                    <div className="hero-copy">
                        <p className="eyebrow hero-eyebrow">
                            <span className="status-dot" aria-hidden="true" />
                            Backend engineer · Sulaimani
                        </p>
                        <h1 id="hero-title">
                            I build the systems <em>behind</em> the product.
                        </h1>
                        <p className="hero-description">
                            I&apos;m Arya Kurdo, a backend engineer focused on dependable APIs, clear data models, and
                            software that stays understandable as it grows. Rust is my strongest tool.
                        </p>
                        <div className="hero-actions">
                            <a className="button button-primary" href="#work">
                                See selected work <span aria-hidden="true">↓</span>
                            </a>
                            <a className="button button-secondary" href={profileLinks.email}>
                                Email me <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                        <div className="hero-notes" aria-label="Engineering focus">
                            <span>01 / Rust</span>
                            <span>02 / APIs</span>
                            <span>03 / Data</span>
                        </div>
                    </div>

                    <div className="portrait-wrap">
                        <div className="portrait-frame">
                            <img
                                className="portrait"
                                src="/images/arya-kurdo.webp"
                                alt="Arya Kurdo outdoors in the mountains of Kurdistan"
                            />
                        </div>
                        <div className="portrait-label">
                            <span>Backend</span>
                            <strong>Engineer</strong>
                        </div>
                    </div>
                </section>

                <section className="section section-alt" id="skills">
                    <div className="shell">
                        <SectionHeading
                            eyebrow="01 / Craft"
                            title="Backend first. Built to last."
                            copy="I care about correctness, readable boundaries, and making the difficult parts of a system boring to operate."
                        />

                        <div className="skills-layout">
                            <article className="rust-card">
                                <div className="rust-card-topline">
                                    <span>Primary language</span>
                                    <span>01</span>
                                </div>
                                <div className="rust-mark" aria-hidden="true">
                                    <BrandLogo id="rust" className="rust-mark-logo" />
                                </div>
                                <div>
                                    <h3>Rust</h3>
                                    <p>
                                        Type-safe backend services, explicit failure handling, and performance without
                                        giving up clarity.
                                    </p>
                                </div>
                            </article>

                            <div className="skills-supporting">
                                <div className="skill-chips" aria-label="Other skills">
                                    {skills.map(skill => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                                <div className="principles-grid">
                                    <article>
                                        <span>Systems</span>
                                        <h3>Make states explicit.</h3>
                                    </article>
                                    <article>
                                        <span>Delivery</span>
                                        <h3>Ship the smallest complete thing.</h3>
                                    </article>
                                    <article>
                                        <span>Quality</span>
                                        <h3>Design for the next reader.</h3>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="experience">
                    <div className="shell">
                        <SectionHeading
                            eyebrow="02 / Experience"
                            title="A path through systems, products, and people."
                        />
                        <div className="experience-list">
                            {experiences.map((experience, index) => (
                                <article className="experience-row" key={`${experience.company}-${experience.role}`}>
                                    <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
                                    <div className="experience-logo">
                                        {experience.logo ? (
                                            <img src={experience.logo} alt="" />
                                        ) : (
                                            <span aria-hidden="true">{initialsOf(experience.company)}</span>
                                        )}
                                    </div>
                                    <div className="experience-main">
                                        <p>{experience.company}</p>
                                        <h3>{experience.role}</h3>
                                    </div>
                                    <p className="experience-description">{experience.description}</p>
                                    <time>{experience.period}</time>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section-alt" id="work">
                    <div className="shell">
                        <SectionHeading
                            eyebrow="03 / Selected work"
                            title="Useful software, grounded in real needs."
                            copy="A mix of backend-led products, data tools, and focused web experiences."
                        />
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <article className="project-card" key={project.title}>
                                    <div className="project-image">
                                        <img src={project.image} alt={`${project.title} interface`} loading="lazy" />
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                    </div>
                                    <div className="project-content">
                                        <div className="project-heading">
                                            <h3>{project.title}</h3>
                                            <div className="project-links">
                                                {project.source ? (
                                                    <a href={project.source} target="_blank" rel="noreferrer">
                                                        Code ↗
                                                    </a>
                                                ) : null}
                                                {project.live ? (
                                                    <a href={project.live} target="_blank" rel="noreferrer">
                                                        Visit ↗
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>
                                        <p>{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map(tag => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section" id="books">
                    <div className="shell">
                        <div className="media-section-header">
                            <SectionHeading
                                eyebrow="04 / Books"
                                title="Read, reread, still thinking about."
                                copy="An animated shelf for finished books and whatever is currently open on my desk."
                            />
                            <p className="interaction-note">Tap or focus a cover to open it.</p>
                        </div>
                        <Bookshelf />
                    </div>
                </section>

                <section className="section cinema-section" id="movies">
                    <div className="shell">
                        <div className="media-section-header">
                            <SectionHeading
                                eyebrow="05 / Movies"
                                title="Films I watched, in my own words."
                                copy="Posters, quick ratings, and short reviews — a smaller window into my taste beyond engineering."
                            />
                            {profileLinks.letterboxd ? (
                                <a className="text-link" href={profileLinks.letterboxd} target="_blank" rel="noreferrer">
                                    Follow on Letterboxd ↗
                                </a>
                            ) : (
                                <span className="pending-link">Letterboxd profile link pending</span>
                            )}
                        </div>
                        <MovieShelf />
                    </div>
                </section>

                <section className="section about-section" id="about">
                    <div className="shell about-grid">
                        <p className="eyebrow">06 / About</p>
                        <div>
                            <h2>Engineering is how I turn messy problems into clear systems.</h2>
                            <p>
                                I work across APIs, payments, data-heavy services, and public-facing products. I like
                                understanding the real constraint first, then using the simplest design that can carry
                                the responsibility.
                            </p>
                            <p>
                                Away from code, I read, watch films, cook, and keep finding reasons to explore Kurdistan.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="contact-section" id="contact">
                    <div className="shell contact-grid">
                        <p className="eyebrow">07 / Contact</p>
                        <div>
                            <h2>Have a hard backend problem?</h2>
                            <p>Tell me what needs to be reliable, and we can start from there.</p>
                            <a className="contact-email" href={profileLinks.email}>
                                arya<wbr />kurdo@gmail.com <span aria-hidden="true">↗</span>
                            </a>
                            <Link className="text-link contact-links-route" to="/links">
                                Or see every link in one place →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    )
}

function ProfileLinkIcon({ icon, shortLabel }: { icon?: BrandIconId; shortLabel: string }) {
    if (!icon) {
        return <span className="profile-link-icon">{shortLabel}</span>
    }

    const { light, dark } = brandIcons[icon]

    return (
        <span
            className="profile-link-icon profile-link-icon-brand"
            style={{ "--brand": light, "--brand-dark": dark } as CSSProperties}
        >
            <BrandLogo id={icon} />
        </span>
    )
}

function LinksPage({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
    const optionalProfiles = [
        {
            label: "Letterboxd",
            handle: "Films and reviews",
            shortLabel: "LB",
            icon: "letterboxd" as const,
            href: profileLinks.letterboxd,
        },
        {
            label: "Spotify",
            handle: "What I listen to",
            shortLabel: "SP",
            icon: "spotify" as const,
            href: profileLinks.spotify,
        },
    ].filter(profile => Boolean(profile.href))

    return (
        <main className="links-page">
            <div className="links-shell">
                <header className="links-topbar">
                    <Link className="brand" to="/" aria-label="Back to Arya Kurdo's portfolio">
                        AK<span>.</span>
                    </Link>
                    <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                </header>

                <section className="links-profile" aria-labelledby="links-name">
                    <div className="links-avatar">
                        <img src="/images/arya-kurdo.webp" alt="Arya Kurdo" />
                    </div>
                    <p className="eyebrow">Backend engineer</p>
                    <h1 id="links-name">Arya Kurdo</h1>
                    <p>Rust, APIs, useful software, books, movies, and the occasional mountain.</p>
                </section>

                <div className="link-stack">
                    <Link className="profile-link profile-link-featured" to="/">
                        <span className="profile-link-icon">AK</span>
                        <span>
                            <strong>Portfolio</strong>
                            <small>Work, experience, and everything else</small>
                        </span>
                        <span aria-hidden="true">→</span>
                    </Link>

                    {socials.map(social => (
                        <a className="profile-link" href={social.href} key={social.label} target="_blank" rel="noreferrer">
                            <ProfileLinkIcon icon={social.icon} shortLabel={social.shortLabel} />
                            <span>
                                <strong>{social.label}</strong>
                                <small>{social.handle}</small>
                            </span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    ))}

                    {optionalProfiles.map(profile => (
                        <a
                            className="profile-link"
                            href={profile.href}
                            key={profile.label}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ProfileLinkIcon icon={profile.icon} shortLabel={profile.shortLabel} />
                            <span>
                                <strong>{profile.label}</strong>
                                <small>{profile.handle}</small>
                            </span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    ))}

                    <a className="profile-link" href={profileLinks.email}>
                        <ProfileLinkIcon icon="email" shortLabel="@" />
                        <span>
                            <strong>Email</strong>
                            <small>aryakurdo@gmail.com</small>
                        </span>
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <footer className="links-footer">
                    <span>Sulaimani, Kurdistan</span>
                    <span>Built by Arya</span>
                </footer>
            </div>
        </main>
    )
}

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "light"

    const savedTheme = window.localStorage.getItem("arya-portfolio-theme")
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme

    return typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
}

function App() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        window.localStorage.setItem("arya-portfolio-theme", theme)
    }, [theme])

    const toggleTheme = () => setTheme(current => (current === "dark" ? "light" : "dark"))

    return (
        <Routes>
            <Route path="/" element={<HomePage theme={theme} onToggleTheme={toggleTheme} />} />
            <Route path="/links" element={<LinksPage theme={theme} onToggleTheme={toggleTheme} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default App
