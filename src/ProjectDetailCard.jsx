import './App.css'

export default function ProjectsDetailsCard({title, link, summary}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{summary}</p>
      <iframe
        src={link}
        width="60%"
        height="700rem"
        // title="Resume"
      />
    </div>
  )
}