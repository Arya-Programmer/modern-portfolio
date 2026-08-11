import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import App from "./App"
import { profileLinks, socials } from "./portfolio-data"

test("identifies Arya as a backend engineer with Rust as the primary language", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App />
        </MemoryRouter>,
    )

    expect(screen.getByRole("heading", { name: /systems behind the product/i })).toBeInTheDocument()
    expect(screen.getByText("Primary language")).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Rust" })).toBeInTheDocument()
})

test("renders the standalone links route", () => {
    render(
        <MemoryRouter initialEntries={["/links"]}>
            <App />
        </MemoryRouter>,
    )

    expect(screen.getByRole("heading", { name: "Arya Kurdo" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
        "href",
        "https://www.instagram.com/arya_kurdo/",
    )
})

test("renders a brand logo for each social link on the links page", () => {
    const { container } = render(
        <MemoryRouter initialEntries={["/links"]}>
            <App />
        </MemoryRouter>,
    )

    const optionalLabels = [
        ["Letterboxd", profileLinks.letterboxd],
        ["Spotify", profileLinks.spotify],
    ] as const

    const expected = [
        ...socials.filter(social => social.icon).map(social => social.label),
        ...optionalLabels.filter(([, href]) => href).map(([label]) => label),
        "Email",
    ]

    for (const label of expected) {
        const link = screen.getByRole("link", { name: new RegExp(label, "i") })
        const logo = link.querySelector(".profile-link-icon-brand svg path")

        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute("d", expect.stringMatching(/\S/))
    }

    // The monogram tile is deliberately still text, not a logo.
    const portfolio = container.querySelector(".profile-link-featured")
    expect(portfolio?.querySelector("svg")).toBeNull()
    expect(portfolio?.querySelector(".profile-link-icon")).toHaveTextContent("AK")

    // Profiles with an empty href are not rendered at all.
    expect(container.querySelectorAll(".profile-link-icon-brand svg")).toHaveLength(expected.length)
})
