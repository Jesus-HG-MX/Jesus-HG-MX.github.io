import { Icon } from "./Icon";
import { copy } from "../data/profile";
export function Metrics() {
  return (
    <section className="metrics" aria-label="Trayectoria en cifras">
      <div className="container metrics-grid">
        {copy.metrics.map((m, i) => (
          <div className={"metric metric-" + i} key={m.value}>
            <Icon name={m.icon} size={26} />
            <div>
              <p>
                {m.value}
                <span>{m.suffix}</span>
              </p>
              <small>{m.label}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
