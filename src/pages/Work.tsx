import { useMode } from "../lib/mode";
import ProjectCard from "../components/ProjectCard/ProjectCard"
import { projects } from "../data/projects"
import "./Work.css"

function Work() {
  const mode = useMode();

  const filteredProjects = projects.filter((p) => p.category == mode.mode);

  return (
    <main className="page-content">
      <h1 className="page-title">Work</h1>
      <p className="page-lede">
        Project write-ups are coming soon — engineering work and the game dev
        side projects both.
      </p>

      <div className="work-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}

export default Work
