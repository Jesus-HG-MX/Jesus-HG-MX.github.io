import { Icon } from "./Icon";
const metrics = [
  {
    value: "14+",
    suffix: " YEARS",
    label: "Manufacturing experience",
    icon: "factory",
  },
  {
    value: "TIER 1",
    suffix: " AUTOMOTIVE",
    label: "Benteler · Tenneco · INNOFA",
    icon: "gear",
  },
  {
    value: ">90%",
    suffix: "",
    label: "Production plan achievement",
    icon: "chart",
  },
  {
    value: "OPERATIONAL",
    suffix: " LEADERSHIP",
    label: "Production · Quality · Safety · People",
    icon: "people",
  },
];
export function Metrics() {
  return (
    <section className="metrics" aria-label="Career at a glance">
      <div className="container metrics-grid">
        {metrics.map((m, i) => (
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
