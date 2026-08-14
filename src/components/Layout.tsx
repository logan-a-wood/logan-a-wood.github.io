import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="page">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <header className="nav">
        <Link to="/" className="nav__logo">
          LW.
        </Link>
        <nav className="nav__links">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Outlet />

      <footer className="hud">
        <div className="hud__status">
          <span className="hud__dot" aria-hidden="true" />
          STATUS: AVAILABLE FOR WORK
        </div>
        <div className="hud__build">BUILD v1.0.0 — 2026</div>
      </footer>
    </div>
  );
}

export default Layout;
