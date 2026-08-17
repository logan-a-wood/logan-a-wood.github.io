import { useMode } from "../lib/mode";
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { projects } from "../data/projects"
import "./Work.css"

function Work() {
  const mode = useMode();

  const filteredProjects = projects
    .filter((project) => project.category === mode.mode)
    .sort((a, b) => b.year - a.year);

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
          />
        ))}
      </div>
    </main>
  )
}

export default Work
