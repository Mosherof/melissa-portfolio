import { Link } from 'react-router-dom'

export default function ProjectCard({ title, description, tech, link, githubLink, pic }) {
  return (
      <Link to={link}>
        <div className="project-card">
          <img src={pic}></img>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          {link && link !== '#' && link.trim() !== '' && (
            <a href={link} target="_blank" rel="noreferrer">
              Project
            </a>
          )}
          {githubLink && githubLink !== '#' && githubLink.trim() !== '' && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
      
      </Link>
      
  )
}