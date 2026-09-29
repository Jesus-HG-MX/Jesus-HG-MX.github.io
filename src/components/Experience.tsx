import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";
const companyLogos: Record<string, string> = {
  "INNOFA de México": "innofa",
  "La Josefina": "la-josefina",
  Tenneco: "tenneco",
  "Benteler de México": "benteler",
};
export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="EXPERIENCIA"
          title="Experiencia Profesional"
          number="01"
        />
        <div className="section-intro">
          <p>Experiencia en manufactura automotriz y procesos industriales.</p>
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
                <picture className="company-logo">
                  <source
                    srcSet={`/images/logos/${companyLogos[e.company]}.webp`}
                    type="image/webp"
                  />
                  <img
                    src={`/images/logos/${companyLogos[e.company]}.png`}
                    alt=""
                    width="360"
                    height="112"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <span className="experience-index">0{i + 1}</span>
                <h3>{e.company}</h3>
                <p className="role">{e.role}</p>
                <ul className="responsibilities">
                  {e.description.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
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
