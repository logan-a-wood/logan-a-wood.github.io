import type { Project } from "../../types/project"
import "./ProjectCard.css"

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <h2 className="project-card__title">{project.title}</h2>
            <p className="project-card__summary">{project.summary}</p>
            <ul className="project-card__tags">
                {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <div className="project-card__links">
                {project.liveUrl && <a href={project.liveUrl}>Itch.io</a>}
                {project.repoUrl && <a href={project.repoUrl}>Repo</a>}
            </div>
        </article>
    );
}

export default ProjectCard;