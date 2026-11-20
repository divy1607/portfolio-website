import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, LoaderCircle, Mail, CheckCircle2, CircleAlert } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ type: "idle", message: "" });

    const updateField = (event) => {
        setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
        if (status.type === "error") setStatus({ type: "idle", message: "" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!form.name.trim() || !form.message.trim()) {
            setStatus({ type: "error", message: "Please add your name and a message." });
            return;
        }
        if (!EMAIL_PATTERN.test(form.email.trim())) {
            setStatus({ type: "error", message: "Please enter a valid email address." });
            return;
        }

        setStatus({ type: "loading", message: "Sending your message…" });
        try {
            await emailjs.send(
                "service_jxxtqaa",
                "template_lwf93gc",
                {
                    name: form.name.trim(),
                    email: form.email.trim(),
                    message: form.message.trim(),
                },
                "wtRwDST0ZepAbm-GZ",
            );
            setForm({ name: "", email: "", message: "" });
            setStatus({
                type: "success",
                message: "Message sent! Thanks for reaching out. I’ll get back to you soon.",
            });
        } catch {
            setStatus({
                type: "error",
                message: "That didn’t go through. Please try again, or email me directly.",
            });
        }
    };

    return (
        <section className="contact-section section-space" id="contact" aria-labelledby="contact-title">
            <div className="section-shell contact-grid">
                <Reveal className="contact-copy">
                    <SectionHeading
                        eyebrow="Get in touch"
                        title={<span id="contact-title">Have an idea?<br /><em>Let’s make it real.</em></span>}
                        description="Whether it’s an ambitious project, an interesting opportunity, or just a conversation about tech—I’m all ears."
                    />
                    <div className="contact-email">
                        <span className="contact-email-icon"><Mail size={20} /></span>
                        <span className="contact-direct-label">Email me <a href="mailto:tripathidivy5647@gmail.com">DIRECTLY</a></span>
                        <ArrowUpRight size={17} aria-hidden="true" />
                    </div>
                    <div className="contact-note">
                        <span className="availability-dot" />
                        Usually replies in a day or two
                    </div>
                </Reveal>

                <Reveal className="contact-form-reveal" delay={120}>
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-heading">
                            <span className="eyebrow">Drop me a note</span>
                            <svg viewBox="0 0 70 40" className="form-arrow" aria-hidden="true">
                                <path d="M3 20C23 7 50 9 59 20M59 20L51 13M59 20L52 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="form-field">
                            <label htmlFor="contact-name">Your name</label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                placeholder="What should I call you?"
                                value={form.name}
                                onChange={updateField}
                                autoComplete="name"
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="contact-email">Email address</label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={updateField}
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="contact-message">Your message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="4"
                                placeholder="Tell me what’s on your mind…"
                                value={form.message}
                                onChange={updateField}
                                required
                            />
                        </div>
                        <button
                            className="button button-primary submit-button"
                            type="submit"
                            disabled={status.type === "loading"}
                        >
                            {status.type === "loading" ? "Sending…" : "Send message"}
                            {status.type === "loading"
                                ? <LoaderCircle className="spin" size={18} />
                                : <ArrowUpRight size={18} />}
                        </button>
                        <div className="form-status" role="status" aria-live="polite">
                            {status.message && status.type !== "loading" && (
                                <p className={`status-${status.type}`}>
                                    {status.type === "success" ? <CheckCircle2 size={17} /> : <CircleAlert size={17} />}
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </form>
                    <div className="form-grain" aria-hidden="true" />
                </Reveal>
            </div>
        </section>
    );
}
