import { Link } from 'react-router-dom'

export default function ProjectCard({ title, description, tech, link, githubLink }) {
  return (
      <Link to={link}>
        <div className="project-card">
          <iframe
        src={"https://drive.google.com/file/d/1_JWVMwGDUJEacXQ4P9vJ-EHoDVc8UhUf/preview"}
        width="90%"
        height="200rem"
        // title="Resume"
      />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={link} target="_blank" rel="noreferrer">
            Project
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
      
      </Link>
      
  )
}