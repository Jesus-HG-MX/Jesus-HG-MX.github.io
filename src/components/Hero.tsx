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
        alt="Automotive body assembly line with industrial robotic equipment"
        width="1800"
        height="1200"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            SENIOR PRODUCTION SUPERVISOR
          </p>
          <h1 id="hero-title" aria-label={profile.name}>
            JESÚS GABRIEL
            <br />
            <span>
              HERNÁNDEZ
              <br />
              GUTIÉRREZ
            </span>
          </h1>
          <p className="hero-subtitle">
            Manufacturing Leader <span>|</span> Industrial Engineer
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
              Contact
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
        <div className="industrial-note">
          <span className="crosshair" aria-hidden="true">
            +
          </span>
          <span>
            AUTOMOTIVE MANUFACTURING
            <br />
            <strong>Precision in every process.</strong>
          </span>
        </div>
        <div className="hero-bottom">
          <a href="#profile">
            EXPLORE MY PROFILE <span>↓</span>
          </a>
          <div className="principles">
            {["People", "Processes", "Productivity", "Safety", "Results"].map(
              (x) => (
                <span key={x}>{x}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
