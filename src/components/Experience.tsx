import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";
export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="EXPERIENCE"
          title="Professional Experience"
          number="01"
        />
        <div className="section-intro">
          <p>A career built on the production floor.</p>
          <span>2012 — 2026</span>
        </div>
        <div className="timeline">
          {copy.experience.map((e, i) => (
            <article className="experience-item reveal" key={e.company}>
              <div className="timeline-date">
                <span
                  className={i === 0 ? "timeline-dot current" : "timeline-dot"}
                />
                {e.date}
              </div>
              <div className="experience-body">
                <span className="experience-index">0{i + 1}</span>
                <h3>{e.company}</h3>
                <p className="role">{e.role}</p>
                {e.description.map((d) => (
                  <p key={d}>{d}</p>
                ))}
                <div className="tags">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
