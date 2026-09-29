import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";
import { Icon } from "./Icon";
export function ProfessionalProfile() {
  return (
    <section id="profile" className="section profile">
      <div className="container profile-grid">
        <div className="reveal">
          <SectionTitle eyebrow="ABOUT" title="Professional Profile" />
          <p className="body-large">{copy.about}</p>
          <p className="profile-focus">{copy.focus}</p>
          <div className="profile-signoff">
            <span className="mini-rule" />
            PEOPLE-FOCUSED. PROCESS-DRIVEN.
          </div>
        </div>
        <div className="profile-image reveal">
          <img
            src="/images/production-line.avif"
            alt="Robotic equipment and vehicle bodies on an automotive production line"
            width="1000"
            height="750"
            loading="lazy"
          />
          <div className="image-label">
            <span className="image-label-icon">
              <Icon name="cycle" size={28} />
            </span>
            <span>
              Continuous Improvement
              <br />
              <strong>in Action</strong>
            </span>
            <Icon name="diagonal" size={24} />
          </div>
          <span className="image-caption">
            THE PRODUCTION FLOOR. WHERE PROGRESS HAPPENS.
          </span>
        </div>
      </div>
    </section>
  );
}
