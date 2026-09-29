import { copy, profile } from "../data/profile";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#home">{profile.name}</a>
          <p>{copy.areas}</p>
        </div>
        <span>
          © {new Date().getFullYear()}
          <br />
          {profile.location}
        </span>
      </div>
    </footer>
  );
}
