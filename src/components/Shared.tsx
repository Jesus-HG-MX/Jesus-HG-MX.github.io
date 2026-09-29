import { profile } from "../data/profile";
import { Icon } from "./Icon";
export function DownloadCV({
  className = "button primary",
}: {
  className?: string;
}) {
  return (
    <a className={className} href={profile.cv} download>
      <Icon name="download" size={17} />
      Download CV
    </a>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  number,
}: {
  eyebrow: string;
  title: string;
  number?: string;
}) {
  return (
    <div className="section-title">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {number && (
        <span className="section-number" aria-hidden="true">
          {number} /
        </span>
      )}
    </div>
  );
}
