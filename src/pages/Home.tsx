import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="hero">
      <p className="hero__eyebrow">
        <span className="prompt">~/logan-wood</span> % whoami
        <span className="cursor" aria-hidden="true" />
      </p>

      <h1 className="hero__name">Logan Wood</h1>

      <p className="hero__role">Software engineer / game developer.</p>

      <p className="hero__bio">
        I'm a CS student and aspiring {" "}
        <span className="accent">Software Engineer</span> /{" "}
        <span className="accent">Game Dev</span>.
      </p>

      <div className="hero__actions">
        <Link className="btn btn--primary" to="/work">
          [ View Projects ]
        </Link>
        <Link className="btn btn--ghost" to="/contact">
          [ Say Hello ]
        </Link>
      </div>
    </main>
  );
}

export default Home;
