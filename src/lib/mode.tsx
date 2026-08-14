import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Mode = "swe" | "gamedev";

const STORAGE_KEY = "lw-mode";

const ModeContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
} | null>(null);

function readStoredMode(): Mode {
  if (typeof window === "undefined") return "swe";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "gamedev" ? "gamedev" : "swe";
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(readStoredMode);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((m) => (m === "swe" ? "gamedev" : "swe"));

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within a ModeProvider");
  return ctx;
}
