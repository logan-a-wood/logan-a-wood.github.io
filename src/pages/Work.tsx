import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { useMode } from "../lib/mode";
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { projects } from "../data/projects"
import type { Project } from "../types/project";
import "./Work.css"

function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const mode = useMode();

  const filteredProjects = projects
    .filter((project) => project.category === mode.mode)
    .sort((a, b) => b.year - a.year);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = priorOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <main className="page-content">
      <h1 className="page-title">Work</h1>
      <p className="page-lede">
        A filtered view of my {mode.mode === "swe" ? "engineering" : "game dev"}{" "}
        projects.
      </p>

      <div className="work-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            animationDelayMs={index * 90}
            onOpenDetails={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="work-modal__backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <section
            className="work-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`work-modal-title-${selectedProject.id}`}
          >
            <div className="work-modal__header">
              <h2 id={`work-modal-title-${selectedProject.id}`} className="work-modal__title">
                {selectedProject.title}
              </h2>
              <button
                type="button"
                className="work-modal__close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                Close
              </button>
            </div>

            <p className="work-modal__meta">
              {selectedProject.month ? `${selectedProject.month}/` : ""}
              {selectedProject.year} · {selectedProject.category === "swe" ? "Engineering" : "Game Dev"}
            </p>

            {selectedProject.thumbnail && (
              <img
                className="work-modal__image"
                src={selectedProject.thumbnail}
                alt={`${selectedProject.title} screenshot`}
              />
            )}

            <div className="work-modal__description">
              <Markdown remarkPlugins={[remarkGfm]}>
                {selectedProject.details ?? selectedProject.summary}
              </Markdown>
            </div>

            <ul className="work-modal__tags">
              {selectedProject.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  )
}

export default Work
