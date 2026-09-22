import { Link } from 'react-router-dom'
export default function ExperienceTimeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <div className="timeline-item" key={`${entry.company}-${entry.role}-${entry.period}`}>
          <div className="timeline-marker" aria-hidden="true">
            <span className="timeline-date timeline-dot-label">{entry.period}</span>
          </div>

          <Link to="/catastrophic-forgetting">
            <button>View Resume</button>
          </Link>
          {/* <Route path="/catastrophic-forgetting" element={<CatastrophicForgetting/>} /> */}

          <article className="timeline-card">

            <div className="timeline-summary-block">
              <h3 >{entry.role}</h3>
          
                  <div className="grid-container">
                  <div className="grid-item-left">
                    <p className="timeline-company">{entry.company}</p>
                  </div>
                  <div className="grid-item-right">
                    <p className="timeline-company" >{entry.location}</p>
                  </div>
                </div>
            </div>


            <div className="timeline-details">

              {entry.summary ? (
                <ul className="timeline-highlights timeline-summary-list">
                  <li>{entry.summary}</li>
                </ul>
              ) : null}

              {entry.highlights && entry.highlights.length > 0 ? (
                <ul className="timeline-highlights">
                  {entry.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}
