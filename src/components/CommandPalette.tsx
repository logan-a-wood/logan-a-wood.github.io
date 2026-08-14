import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMode } from "../lib/mode";
import "./CommandPalette.css";

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setMode } = useMode();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      className="cmdk"
    >
      <div className="cmdk__prompt">
        <span className="cmdk__prompt-glyph">%</span>
        <Command.Input
          autoFocus
          placeholder="type a command or search…"
          className="cmdk__input"
        />
      </div>

      <Command.List className="cmdk__list">
        <Command.Empty className="cmdk__empty">
          no matching command
        </Command.Empty>

        <Command.Group heading="navigate" className="cmdk__group">
          <Command.Item onSelect={() => go("/")}>~/home</Command.Item>
          <Command.Item onSelect={() => go("/work")}>~/work</Command.Item>
          <Command.Item onSelect={() => go("/about")}>~/about</Command.Item>
          <Command.Item onSelect={() => go("/contact")}>
            ~/contact
          </Command.Item>
        </Command.Group>

        <Command.Group heading="mode" className="cmdk__group">
          <Command.Item
            onSelect={() => {
              setMode("swe");
              setOpen(false);
            }}
          >
            switch to swe
          </Command.Item>
          <Command.Item
            onSelect={() => {
              setMode("gamedev");
              setOpen(false);
            }}
          >
            switch to gamedev
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}

export default CommandPalette;
