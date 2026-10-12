import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { projects } from "../data/projects"
import type { Project } from "../types/project";
import { createPortal } from "react-dom";
import "./Work.css"

type ProjectFilter = "all" | Project["category"];

const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "swe", label: "Software" },
  { value: "gamedev", label: "Games" },
];

function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  const filteredProjects = sortedProjects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );
  const featuredProjects = sortedProjects.filter((project) => project.featured);
  const remainingProjects =
    activeFilter === "all"
      ? filteredProjects.filter((project) => !project.featured)
      : filteredProjects;

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
        A selection of software, games, and technical experiments.
      </p>

      <div className="work-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className="work-filter"
            data-active={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {activeFilter === "all" && featuredProjects.length > 0 && (
        <section className="work-section" aria-labelledby="featured-work-title">
          <div className="work-section__header">
            <h2 id="featured-work-title" className="work-section__title">
              Featured work
            </h2>
            <span className="work-section__count">{featuredProjects.length} projects</span>
          </div>
          <div className="work-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                animationDelayMs={index * 90}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </div>
        </section>
      )}

      <section className="work-section" aria-labelledby="all-work-title">
        <div className="work-section__header">
          <h2 id="all-work-title" className="work-section__title">
            {activeFilter === "all" ? "All work" : FILTERS.find((filter) => filter.value === activeFilter)?.label}
          </h2>
          <span className="work-section__count">{remainingProjects.length} projects</span>
        </div>
        <div className="work-grid">
          {remainingProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              animationDelayMs={index * 90}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {selectedProject && 
        createPortal(
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
          </div>,
        document.body)
      }
    </main>
  )
}

export default Work
