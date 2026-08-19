import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "../../types/project"
import "./ProjectCard.css"

interface ProjectCardProps {
    project: Project;
    animationDelayMs?: number;
    onOpenDetails?: (project: Project) => void;
}

function ProjectCard({ project, animationDelayMs = 0, onOpenDetails }: ProjectCardProps) {
    return (
        <article
            className="project-card"
            onClick={() => onOpenDetails?.(project)}
            style={{ animationDelay: `${animationDelayMs}ms` }}
        >
            <header className="project-card__header">
                <h2 className="project-card__title">{project.title}</h2>
                <span className="project-card__year">{project.year}</span>
            </header>
            <div className="project-card__summary">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.summary}
                </ReactMarkdown>
            </div>
            <ul className="project-card__tags">
                {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            <div className="project-card__links">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                )}
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        Repo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;