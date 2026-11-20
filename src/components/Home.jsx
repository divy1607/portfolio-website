import Typewriter from "typewriter-effect";
import { ArrowDownRight, ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import portrait from "../assets/portrait.jpg";
import { socialLinks } from "../data/portfolio";

export default function Home() {
    return (
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
            <div className="hero-grid">
                <div className="hero-copy">
                    <div className="hero-eyebrow hero-enter">
                        <span className="availability-dot" />
                        <p className="eyebrow">Hello, I’m Divyansh Tripathi.</p>
                    </div>
                    <h1 id="hero-title" className="hero-title hero-enter delay-1">
                        I turn ideas into<br />
                        <em>experiences.</em>
                    </h1>
                    <div className="hero-type hero-enter delay-2" aria-hidden="true">
                        <span className="type-star">✳</span>
                        <Typewriter
                            options={{
                                strings: [
                                    "A developer.",
                                    "A dreamer.",
                                    "Entrepreneurship enthusiast.",
                                    "A Batman. :P",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 28,
                                pauseFor: 1600,
                            }}
                        />
                    </div>
                    <p className="hero-description hero-enter delay-3">
                        The internet runs on ideas. I code them into existence—building
                        thoughtful products for the web, and everything in between.
                    </p>
                    <div className="hero-actions hero-enter delay-4">
                        <a className="button button-primary" href="#experience">
                            Explore my experience <ArrowDownRight size={18} />
                        </a>
                        <a className="text-link" href="#contact">
                            Let’s talk <ArrowUpRight size={16} />
                        </a>
                    </div>
                    <div className="hero-social hero-enter delay-5">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.name === "X / Twitter" ? "X" : link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="portrait-column">
                    <div className="portrait-orbit" aria-hidden="true" />
                    <div className="portrait-blob" aria-hidden="true" />
                    <div className="portrait-wrap">
                        <div className="portrait-outline" aria-hidden="true" />
                        <div className="portrait-image-wrap">
                            <img
                                src={portrait}
                                alt="Divyansh Tripathi"
                                className="portrait-image"
                                width="667"
                                height="1000"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                    <div className="portrait-badge">
                        <Sparkles size={16} />
                        <span>Curious by nature.<br />Builder by choice.</span>
                    </div>
                    <div className="portrait-caption" aria-hidden="true">
                        <span className="handwritten">Let’s make<br />an impact.</span>
                        <svg viewBox="0 0 70 60" fill="none">
                            <path d="M4 5C22 2 40 9 48 23C56 37 48 46 38 43C27 40 29 23 42 25C54 27 59 41 59 55M59 55L50 48M59 55L65 45" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="hero-bottom hero-enter delay-5">
                <a className="scroll-hint" href="#experience">
                    <ArrowDown size={15} />
                    <span>Scroll to explore</span>
                </a>
                <p>Good ideas deserve great execution.</p>
                <span className="hero-location">Based in India <span>↗</span></span>
            </div>
        </section>
    );
}
