import { copy } from "../data/profile";
import { Icon } from "./Icon";
export function Education() {
  return (
    <div className="education-block reveal">
      <p className="eyebrow">
        <span />
        EDUCACIÓN
      </p>
      <h2 className="education-heading">Educación</h2>
      <div className="degree">
        <div className="degree-icon">
          <Icon name="award" size={32} />
        </div>
        <div>
          <h3>{copy.education.degree}</h3>
          <p>{copy.education.school}</p>
          <span className="credential">
            <Icon name="check" size={14} />
            {copy.education.credential}
          </span>
        </div>
      </div>
    </div>
  );
}
