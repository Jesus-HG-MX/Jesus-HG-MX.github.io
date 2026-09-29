import { copy } from "../data/profile";
import { SectionTitle } from "./Shared";
import { Icon } from "./Icon";
export function ProfessionalProfile() {
  return (
    <section id="profile" className="section profile">
      <div className="container profile-grid">
        <div className="reveal">
          <SectionTitle eyebrow="PERFIL" title="Perfil Profesional" />
          <p className="body-large">{copy.about}</p>
          <p className="profile-focus">{copy.focus}</p>
          <div className="profile-signoff">
            <span className="mini-rule" />
            PERSONAS, PROCESOS Y MEJORA CONTINUA.
          </div>
        </div>
        <div className="profile-image reveal">
          <img
            src="/images/production-line.avif"
            alt="Carrocerías y equipo industrial en una línea de producción automotriz"
            width="1000"
            height="750"
            loading="lazy"
          />
          <div className="image-label">
            <span className="image-label-icon">
              <Icon name="cycle" size={28} />
            </span>
            <span>
              Mejora Continua
              <br />
              <strong>en Acción</strong>
            </span>
            <Icon name="diagonal" size={24} />
          </div>
          <span className="image-caption">
            MANUFACTURA AUTOMOTRIZ Y PROCESOS INDUSTRIALES.
          </span>
        </div>
      </div>
    </section>
  );
}
