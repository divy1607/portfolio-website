import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
    return (
        <section className="education section-shell section-space" id="journey" aria-labelledby="education-title">
            <div className="education-grid">
                <Reveal>
                    <SectionHeading
                        eyebrow="The foundation"
                        title={<span id="education-title">Where it all <em>began.</em></span>}
                        description="A formal education, an informal obsession with figuring things out, and a lot of building along the way."
                    />
                    <div className="education-aside">
                        <div className="education-cap"><GraduationCap size={31} strokeWidth={1.3} /></div>
                        <p>Education gave me the foundation.<br />Curiosity keeps me going.</p>
                    </div>
                </Reveal>
                <div className="education-list">
                    {education.map((item) => (
                        <Reveal key={item.period} className="education-reveal">
                            <article className="education-item">
                                <div className="education-marker">
                                    <span className="education-dot" aria-hidden="true" />
                                    <span className="education-period">{item.period}</span>
                                </div>
                                <div className="education-content">
                                    <span className="education-card-icon" aria-hidden="true">
                                        <BookOpen size={18} strokeWidth={1.4} />
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p className="education-degree">{item.detail}</p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
