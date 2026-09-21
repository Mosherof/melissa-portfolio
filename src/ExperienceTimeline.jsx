export default function ExperienceTimeline({ entries }) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <div className="timeline-item" key={`${entry.company}-${entry.role}-${entry.period}`}>
          <div className="timeline-marker" aria-hidden="true">
            <span className="timeline-date timeline-dot-label">{entry.period}</span>
          </div>

          <article className="timeline-card">

            <div className="timeline-summary-block">
              <h3>{entry.role}</h3>
              <p className="timeline-company">{entry.company}</p>
            </div>


            <div className="timeline-details">
              <div className="timeline-header">
                {entry.location ? <span className="timeline-location">{entry.location}</span> : null}
              </div>

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
