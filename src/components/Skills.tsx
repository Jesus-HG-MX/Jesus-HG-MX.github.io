import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";
import { Icon } from "./Icon";
export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="COMPETENCIAS"
          title="Competencias Clave"
          number="02"
        />
        <div className="skills-grid">
          {copy.skills.map((s, i) => (
            <article className="skill-card reveal" key={s.title}>
              <div className="card-top">
                <Icon name={s.icon} size={30} />
                <span>0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={14} />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
