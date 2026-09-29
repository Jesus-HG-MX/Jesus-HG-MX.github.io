import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { ProfessionalProfile } from "./components/ProfessionalProfile";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Highlights } from "./components/Highlights";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { copy } from "./data/profile";
export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("will-reveal");
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <ProfessionalProfile />
        <Experience />
        <Skills />
        <Highlights />
        <section
          className="section education"
          id="education"
          aria-label="Education and certifications"
        >
          <div className="container education-grid">
            <Education />
            <Certifications />
          </div>
        </section>
        <section className="statement" aria-label="Professional commitment">
          <div className="container">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{copy.statement}</blockquote>
            <p>
              JESÚS GABRIEL HERNÁNDEZ GUTIÉRREZ
              <span />
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
