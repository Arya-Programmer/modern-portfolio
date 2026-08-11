import type { BrandIconId } from "./brand-icons"

export type SocialLink = {
    label: string
    handle: string
    href: string
    // Kept as the fallback for anything without a brand mark.
    shortLabel: string
    icon?: BrandIconId
}

export type Experience = {
    company: string
    role: string
    period: string
    description: string
    // Optional: entries without a logo file fall back to the company initials.
    logo?: string
}

export type Project = {
    title: string
    description: string
    image: string
    tags: string[]
    source?: string
    live?: string
}

export type Book = {
    title: string
    author: string
    status: "Currently reading" | "Read"
    cover?: string
    accent: string
}

export type Movie = {
    title: string
    year?: string
    review: string
    rating?: string
    poster?: string
}

export const socials: SocialLink[] = [
    {
        label: "GitHub",
        shortLabel: "GH",
        icon: "github",
        handle: "@Arya-Programmer",
        href: "https://github.com/Arya-Programmer",
    },
    {
        label: "LinkedIn",
        shortLabel: "IN",
        icon: "linkedin",
        handle: "Arya Kurdo",
        href: "https://www.linkedin.com/in/arya-kurdo-8a8673175/",
    },
    {
        label: "Instagram",
        shortLabel: "IG",
        icon: "instagram",
        handle: "@arya_kurdo",
        href: "https://www.instagram.com/arya_kurdo/",
    },
    {
        label: "Facebook",
        shortLabel: "FB",
        icon: "facebook",
        handle: "Arya Kurdo",
        href: "https://www.facebook.com/arya.kurdo.2025/",
    },
]

export const profileLinks = {
    email: "mailto:aryakurdo@gmail.com",
    // Add the exact public profile URLs here. Empty values are not rendered,
    // so the site never sends visitors to a guessed personal profile.
    letterboxd: "https://letterboxd.com/arya_kurdo/",
    spotify: "",
}

export const skills = [
    "Axum",
    "API design",
    "SQLx",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "TypeScript",
    "React",
    "Flutter",
]

export const experiences: Experience[] = [
    {
        company: "Department of Information Technology, Erbil",
        role: "Backend Developer",
        period: "July 2026 — Present",
        description:
            "Build and maintain backend APIs, using clean architecture to keep the boundaries between layers explicit as the services grow.",
        logo: "/images/logos/dit.webp",
    },
    {
        company: "Arya Stationery",
        role: "Full-stack Developer",
        period: "2023 — Present",
        description:
            "Built educational products, textbooks, and applications designed to help grade 12 students and their teachers.",
        logo: "/images/logos/arya-stationery.webp",
    },
    {
        company: "Department of Information Technology, Erbil",
        role: "Backend Developer Intern",
        period: "Winter 2026",
        description: "Worked with the backend team on API development before joining full time.",
        logo: "/images/logos/dit.webp",
    },
    {
        company: "American University of Iraq, Sulaimani",
        role: "Backend Developer Intern",
        period: "Summer 2025",
        description: "Built backend services for a website that presents economic data from across Iraq.",
        logo: "/images/logos/auis.webp",
    },
    {
        company: "American University of Iraq, Sulaimani",
        role: "IT Helpdesk Intern",
        period: "Spring 2025",
        description: "Supported the maintenance of IT assets, university labs, and network infrastructure.",
        logo: "/images/logos/auis.webp",
    },
    {
        company: "Kurdsat TV",
        role: "Full-stack Developer Intern",
        period: "Summer 2024",
        description: "Worked on rebuilding the main website to make it more capable and easier to use.",
        logo: "/images/logos/kurdsat.webp",
    },
    {
        company: "Nova",
        role: "Junior Backend Developer",
        period: "2022 — 2023",
        description:
            "Started my engineering career by building application logic and backend services for web products.",
        logo: "/images/logos/nova.webp",
    },
]

export const projects: Project[] = [
    {
        title: "Iraqi Exchange",
        description:
            "A real-time dashboard for comparing Iraqi dinar exchange rates across major cities, with historical trends and clear regional context.",
        image: "/images/projects/iraqi-exchange.webp",
        tags: ["Next.js", "TypeScript", "APIs"],
        source: "https://github.com/Arya-Programmer/dollar-exchange-site",
    },
    {
        title: "Unicode to AliK Converter",
        description: "A fast Kurdish text utility that converts legacy AliK Arabic characters to Unicode and back.",
        image: "/images/projects/unicode-ali-k.webp",
        tags: ["Next.js", "Unicode", "Kurdish"],
        source: "https://github.com/Arya-Programmer/Unicode-to-AliK",
        live: "http://u2a.aryakurdo.com",
    },
    {
        title: "Math Challenge",
        description: "A focused, customizable arithmetic quiz with multiple operations and difficulty levels.",
        image: "/images/projects/math-challenge.webp",
        tags: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/Arya-Programmer/math-challenge",
        live: "https://math-challenge.neocities.org/",
    },
    {
        title: "Forward Fitness Club",
        description:
            "A bold, responsive fitness-club website built around clear navigation and an energetic visual identity.",
        image: "/images/projects/forward-fitness.webp",
        tags: ["HTML", "CSS", "Responsive UI"],
        live: "https://forward-fitness.neocities.org/",
    },
]

// `cover` is optional — without an image the shelf renders a typographic cover
// using the accent colour below.
export const books: Book[] = [
    {
        title: "Crime and Punishment",
        cover: "/images/books/crime-and-punishment.webp",
        author: "Fyodor Dostoevsky",
        status: "Currently reading",
        accent: "#8c2f2f",
    },
    {
        title: "Dr Jekyll and Mr Hyde",
        cover: "/images/books/jekyll-and-hyde.webp",
        author: "Robert Louis Stevenson",
        status: "Currently reading",
        accent: "#3f3a63",
    },
    {
        title: "Rust for Rustaceans",
        cover: "/images/books/rust-for-rustaceans.webp",
        author: "Jon Gjengset",
        status: "Currently reading",
        accent: "#b7410e",
    },
    {
        title: "Clean Code",
        cover: "/images/books/clean-code.webp",
        author: "Robert C. Martin",
        status: "Read",
        accent: "#1f6f8b",
    },
    {
        title: "Clean Architecture",
        cover: "/images/books/clean-architecture.webp",
        author: "Robert C. Martin",
        status: "Read",
        accent: "#2b5d34",
    },
    {
        title: "The Rust Programming Language",
        cover: "/images/books/the-rust-programming-language.webp",
        author: "Steve Klabnik and Carol Nichols",
        status: "Read",
        accent: "#d94f35",
    },
]

// `poster` is optional — without an image the card falls back to the initial.
export const movies: Movie[] = [
    {
        title: "Obsession",
        poster: "/images/movies/obsession.webp",
        // Curry Barker's horror debut — dated by its 2025 festival premiere,
        // the way Letterboxd lists it, not its 2026 wide release.
        year: "2025",
        review: "Basically amazing.",
        rating: "10/10",
    },
    {
        title: "The Odyssey",
        poster: "/images/movies/the-odyssey.webp",
        year: "2026",
        review: "Amazing.",
        rating: "10/10",
    },
]
