import { useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun, Menu, X } from "lucide-react";
import { ColorModeContext } from "./theme";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import CursorGlow from "./components/CursorGlow";
import "./App.css";

const STORAGE_KEY = "theme-mode";
const navItems = [
    ["home", "Home"],
    ["experience", "Work"],
    ["journey", "Education"],
    ["contact", "Contact"],
];

function getInitialMode() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "dark" || stored === "light") return stored;
    } catch {
        // Browsers with storage disabled can still use the theme switcher.
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export default function App() {
    const [mode, setMode] = useState(getInitialMode);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        document.documentElement.dataset.theme = mode;
        document.documentElement.style.colorScheme = mode;
        document.querySelector('meta[name="theme-color"]')
            ?.setAttribute("content", mode === "dark" ? "#131714" : "#f5f2ea");
        try {
            localStorage.setItem(STORAGE_KEY, mode);
        } catch {
            // Keep the in-memory theme when localStorage is unavailable.
        }
    }, [mode]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: "-25% 0px -60%", threshold: 0 },
        );
        navItems.forEach(([id]) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-open", menuOpen);
        return () => document.body.classList.remove("menu-open");
    }, [menuOpen]);

    const toggleColorMode = () =>
        setMode((previous) => (previous === "dark" ? "light" : "dark"));

    return (
        <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
            <a className="skip-link" href="#main">Skip to content</a>
            <ProgressBar />
            <CursorGlow />

            <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
                <a className="brand" href="#home" aria-label="Divyansh Tripathi — home">
                    d<span>.</span>
                </a>
                <nav className="desktop-nav" aria-label="Main navigation">
                    {navItems.map(([id, name]) => (
                        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
                            {name}
                        </a>
                    ))}
                </nav>
                <div className="header-actions">
                    <button
                        className="icon-button theme-toggle"
                        onClick={toggleColorMode}
                        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
                        title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
                    >
                        <span className="theme-icon-wrap" key={mode}>
                            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </span>
                    </button>
                    <a className="header-contact desktop-only" href="#contact">
                        Get in touch <ArrowUpRight size={14} />
                    </a>
                    <button
                        className="icon-button mobile-menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
                <nav
                    id="mobile-nav"
                    className={`mobile-nav ${menuOpen ? "open" : ""}`}
                    aria-label="Mobile navigation"
                    inert={!menuOpen ? true : undefined}
                >
                    {navItems.map(([id, name], index) => (
                        <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                            <span>0{index + 1}</span> {name}
                        </a>
                    ))}
                </nav>
            </header>

            <main id="main">
                <Home />
                <Experience />
                <Education />
                <ContactForm />
            </main>
            <Footer />
        </ColorModeContext.Provider>
    );
}
