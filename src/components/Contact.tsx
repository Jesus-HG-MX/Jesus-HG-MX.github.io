import { copy, profile } from "../data/profile";
import { Icon } from "./Icon";
import { DownloadCV } from "./Shared";
export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow">
            <span />
            CONTACT
          </p>
          <h2>
            Let's Connect<span>.</span>
          </h2>
          <p>{copy.contact}</p>
          <div className="contact-buttons">
            <a className="button primary" href={"mailto:" + profile.email}>
              <Icon name="mail" size={18} />
              Email Me
              <Icon name="diagonal" size={17} />
            </a>
            <a
              className="button light-outline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size={17} />
              LinkedIn
            </a>
            <DownloadCV className="text-button dark" />
          </div>
        </div>
        <div className="contact-details reveal">
          {[
            {
              icon: "mail",
              label: "EMAIL",
              value: profile.email,
              href: "mailto:" + profile.email,
            },
            {
              icon: "phone",
              label: "PHONE",
              value: profile.phone,
              href: profile.phoneHref,
            },
            { icon: "pin", label: "LOCATION", value: profile.location },
            {
              icon: "linkedin",
              label: "LINKEDIN",
              value: "linkedin.com/in/gabriel8925",
              href: profile.linkedin,
            },
          ].map((d) => (
            <div className="contact-row" key={d.label}>
              <Icon name={d.icon} />
              <div>
                <span>{d.label}</span>
                {d.href ? (
                  <a
                    href={d.href}
                    target={d.icon === "linkedin" ? "_blank" : undefined}
                    rel={
                      d.icon === "linkedin" ? "noopener noreferrer" : undefined
                    }
                  >
                    {d.value}
                  </a>
                ) : (
                  <p>{d.value}</p>
                )}
              </div>
              {d.href && <Icon name="diagonal" size={18} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
