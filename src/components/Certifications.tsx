import { copy } from "../data/profile";
import { Icon } from "./Icon";
export function Certifications() {
  return (
    <div className="certifications reveal">
      <h2 className="eyebrow">
        <span />
        CERTIFICATIONS
      </h2>
      <ul>
        {copy.certifications.map((c, i) => (
          <li key={c}>
            <Icon name="award" size={18} />
            <span>{c}</span>
            {i === 0 && <small>In Progress</small>}
          </li>
        ))}
      </ul>
    </div>
  );
}
