export default function ProjectCard({ title, description, tech, link, githubLink }) {
  return (
    <div className="project-card">
      {/* <div className="project-image"> */}
        <iframe
        src="../..Catastrophic Forgetting in RNN.pdf"
        width="100%"
        // height="500px"
        frameBorder="0"
        title="PowerPoint Presentation"
        allowFullScreen
      >
        This is an embedded [Microsoft Office](https://office.com) presentation, powered by Office.
      </iframe>
      {/* </div> */}
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
  )
}