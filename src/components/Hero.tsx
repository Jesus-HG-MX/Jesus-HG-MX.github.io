import { copy, profile } from "../data/profile";
import { Icon } from "./Icon";
import { DownloadCV } from "./Shared";
export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-photo"
        src="/images/automotive-plant.avif"
        srcSet="/images/automotive-plant-mobile.avif 800w, /images/automotive-plant.avif 1800w"
        sizes="100vw"
        alt="Línea de ensamblaje de carrocerías en una planta automotriz"
        width="1800"
        height="1200"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            SUPERVISOR SENIOR DE PRODUCCIÓN
          </p>
          <h1 id="hero-title" aria-label={profile.name}>
            JESÚS GABRIEL
            <span>HERNÁNDEZ GUTIÉRREZ</span>
          </h1>
          <p className="hero-subtitle">
            Líder de Manufactura <span>|</span> Ingeniero Industrial
          </p>
          <p className="hero-description">{copy.intro}</p>
          <div className="hero-buttons">
            <DownloadCV />
            <a
              className="button outline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={17} />
              LinkedIn
              <Icon name="diagonal" size={15} />
            </a>
            <a className="text-button" href="#contact">
              Contacto
              <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="hero-contact">
            <span>
              <Icon name="pin" size={15} />
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={14} />
              LinkedIn
            </a>
            <a href={"mailto:" + profile.email}>
              <Icon name="mail" size={15} />
              {profile.email}
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <picture>
            <source
              srcSet="/images/profile-480.avif 480w, /images/profile-860.avif 860w"
              sizes="(max-width: 767px) 280px, (max-width: 1023px) 40vw, 420px"
              type="image/avif"
            />
            <source
              srcSet="/images/profile-480.webp 480w, /images/profile.webp 860w"
              sizes="(max-width: 767px) 280px, (max-width: 1023px) 40vw, 420px"
              type="image/webp"
            />
            <img
              src="/images/profile-original.png"
              alt={profile.name}
              width="1150"
              height="1368"
              decoding="async"
            />
          </picture>
          <div className="industrial-note">
            <span className="crosshair" aria-hidden="true">
              +
            </span>
            <span>
              MANUFACTURA AUTOMOTRIZ
              <br />
              <strong>Producción y mejora continua.</strong>
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#profile">
            CONOCE MI PERFIL <span>↓</span>
          </a>
          <div className="principles">
            {[
              "Personas",
              "Procesos",
              "Productividad",
              "Seguridad",
              "Resultados",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
