import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
    return (
        <section className="experience-section section-space" id="experience" aria-labelledby="experience-title">
            <div className="section-shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="My experience"
                        title={<span id="experience-title">Learning by <em>doing.</em></span>}
                        description="The places, people, and problems that have helped me grow from writing code into building products."
                    />
                </Reveal>
                <div className="experience-list">
                    {experience.map((job, index) => (
                        <Reveal key={job.company} delay={index * 50}>
                            <article className="experience-row">
                                <div className="experience-period">
                                    <p>{job.period}</p>
                                    <span className="experience-line" aria-hidden="true" />
                                </div>
                                <div className="experience-icon" aria-hidden="true">
                                    <BriefcaseBusiness size={18} strokeWidth={1.5} />
                                </div>
                                <div className="experience-content">
                                    <div className="experience-company-row">
                                        <p className="eyebrow">{job.company}</p>
                                        {index === 0 && <span className="current-role"><span />Current</span>}
                                    </div>
                                    <h3>{job.role}</h3>
                                    <p className="experience-description">{job.text}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
                <Reveal>
                    <div className="experience-note">
                        <p>Always learning. Always building.</p>
                        <a href="#contact" className="text-link">Let’s build something together <ArrowUpRight size={16} /></a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
