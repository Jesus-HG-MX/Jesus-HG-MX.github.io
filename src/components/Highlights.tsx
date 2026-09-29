import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";
import { Icon } from "./Icon";
export function Highlights() {
  return (
    <section className="section highlights" id="highlights">
      <div className="container">
        <SectionTitle
          eyebrow="HIGHLIGHTS"
          title="Career Highlights"
          number="03"
        />
        <div className="highlights-grid">
          {copy.highlights.map((h, i) => (
            <article
              className={"highlight-card highlight-" + i + " reveal"}
              key={h.title}
            >
              <div className="card-top">
                <Icon name={h.icon} size={29} />
                <Icon name="diagonal" size={20} />
              </div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
