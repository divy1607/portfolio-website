import PropTypes from "prop-types";
import { ArrowUpRight, ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { socialLinks } from "../data/portfolio";

const iconMap = {
    GitHub: Github,
    LinkedIn: Linkedin,
};

function XIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.48 22H3.36l7.24-8.28L2.7 2h6.4l4.42 5.85L18.9 2Zm-1.1 17.85h1.73L8.16 4.05H6.3L17.8 19.85Z" />
        </svg>
    );
}

XIcon.propTypes = { size: PropTypes.number };

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="section-shell footer-top">
                <div>
                    <a className="brand footer-brand" href="#home">d<span>.</span></a>
                    <p className="footer-tagline">Ideas into code. Code into impact.</p>
                </div>
                <a className="back-to-top" href="#home">
                    Back to the top <span><ArrowUp size={16} /></span>
                </a>
            </div>
            <div className="section-shell footer-bottom">
                <p>© {year} Divyansh Tripathi. Transformed caffeine into this.</p>
                <div className="social-links" aria-label="Social media links">
                    {socialLinks.map(({ name, href }) => {
                        const Icon = iconMap[name] || XIcon;
                        return (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                title={name}
                            >
                                <Icon size={17} strokeWidth={1.7} />
                            </a>
                        );
                    })}
                </div>
                <a className="footer-contact" href="mailto:tripathidivy5647@gmail.com" aria-label="Email Divyansh"><Mail size={14} /> Say hello <ArrowUpRight size={14} /></a>
            </div>
        </footer>
    );
}
