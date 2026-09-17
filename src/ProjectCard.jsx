export default function ProjectCard({ title, description, tech, demoLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}