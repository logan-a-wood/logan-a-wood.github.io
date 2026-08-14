import { useMode } from "../lib/mode";
import "./ModeToggle.css";

function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="mode-toggle" role="group" aria-label="Portfolio mode">
      <span className="mode-toggle__prefix">mode:</span>
      <button
        type="button"
        className="mode-toggle__option"
        data-active={mode === "swe"}
        onClick={() => setMode("swe")}
      >
        swe
      </button>
      <span className="mode-toggle__sep">/</span>
      <button
        type="button"
        className="mode-toggle__option"
        data-active={mode === "gamedev"}
        onClick={() => setMode("gamedev")}
      >
        gamedev
      </button>
    </div>
  );
}

export default ModeToggle;
