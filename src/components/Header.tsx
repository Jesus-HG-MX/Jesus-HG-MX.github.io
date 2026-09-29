import { useEffect, useRef, useState } from "react";
import { copy } from "../data/profile";
import { Icon } from "./Icon";
import { DownloadCV } from "./Shared";
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    copy.nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function key(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            JG<span>.</span>
          </span>
          <span className="brand-name">
            JESÚS GABRIEL<small>HERNÁNDEZ GUTIÉRREZ</small>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {copy.nav.map((n) => (
            <a
              key={n.id}
              href={"#" + n.id}
              className={active === n.id ? "active" : ""}
              aria-current={active === n.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <DownloadCV className="button header-cv" />
          <div className="languages" aria-label="Language">
            <span lang="en" aria-label="English, current language">
              EN
            </span>
            <span aria-hidden="true">/</span>
            <button
              disabled
              title="Spanish version coming soon"
              aria-label="Spanish version coming soon"
            >
              ES
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
