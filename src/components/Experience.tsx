import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";

const companyLogos: Record<string, string> = {
  Klumex: "klumex",
  "INNOFA de México": "innofa",
  "La Josefina": "la-josefina",
  Tenneco: "tenneco",
  "Benteler de México": "benteler",
};

function CompanyLogo({
  company,
  featured = false,
}: {
  company: string;
  featured?: boolean;
}) {
  const logo = companyLogos[company];
  if (!logo) return null;
  const pngAsset = logo === "klumex" ? "klumex-dark" : logo;
  return (
    <div
      className={`company-logo-slot${featured ? " company-logo-slot-featured" : ""}`}
      aria-hidden="true"
    >
      <picture className="company-logo">
        {logo !== "klumex" && (
          <source srcSet={`/images/logos/${logo}.webp`} type="image/webp" />
        )}
        <img
          src={`/images/logos/${pngAsset}.png`}
          alt=""
          width="360"
          height="112"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
}

function Responsibilities({ items }: { items: string[] }) {
  return (
    <ul className="responsibilities">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export function Experience() {
  const [current, ...previous] = copy.experience;

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
          <span>2012 — Actualidad</span>
        </div>

        <div className="experience-layout">
          <article className="experience-current reveal">
            <div className="experience-date">{current.date}</div>
            <div className="experience-current-grid">
              <div className="experience-current-info">
                <CompanyLogo company={current.company} featured />
                <h3>{current.company}</h3>
                <p className="role">{current.role}</p>
                <span className="current-position">ACTUAL</span>
              </div>
              <div className="experience-current-details">
                <Responsibilities items={current.description} />
                <Tags tags={current.tags} />
              </div>
            </div>
          </article>

          <div className="experience-history">
            {previous.map((experience) => (
              <article
                className="experience-item reveal"
                key={experience.company}
              >
                <div className="experience-date">{experience.date}</div>
                <div className="experience-body">
                  <CompanyLogo company={experience.company} />
                  <h3>{experience.company}</h3>
                  <p className="role">{experience.role}</p>
                  <Responsibilities items={experience.description} />
                  <Tags tags={experience.tags} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
