
import { metrics, timeline } from '../data/portfolioData';

export default function DashboardPage() {
  return (
    <section className="page-content">
      <header className="hero">
        <p className="eyebrow"> Designer + Frontend Focus </p>
        <h1>Portfolio Dashboard</h1>
        <p className="subtitle">
          Quick snapshot of audience growth, active projects, and recent progress.
        </p>
      </header>

      <div className="grid two-columns">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <p className="metric-label">{metric.label}</p>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-detail">{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className="timeline">
        <h2>Recent Activity</h2>
        <ul>
          {timeline.map((event) => (
            <li key={event.id}>
              <p className="timeline-title">{event.title}</p>
              <p className="timeline-body">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
