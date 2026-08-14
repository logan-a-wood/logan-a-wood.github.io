import { Link } from "react-router-dom";
import { useMode } from "../lib/mode";
import "./Home.css";

const ROLE = {
  swe: "Software engineer.",
  gamedev: "Game developer.",
} as const;

function Home() {
  const { mode } = useMode();

  return (
    <main className="hero">
      <p className="hero__eyebrow">
        <span className="prompt">~/logan-wood</span> % whoami --mode={mode}
        <span className="cursor" aria-hidden="true" />
      </p>

      <h1 className="hero__name">Logan Wood</h1>

      <p className="hero__role">{ROLE[mode]}</p>

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
