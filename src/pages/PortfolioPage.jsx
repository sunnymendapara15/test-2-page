
import { projects } from '../data/portfolioData';

export default function PortfolioPage() {
  return (
    <section className="page-content">
      <header className="hero">
        <p className="eyebrow"> Highlight Reels </p>
        <h1>Projects</h1>
        <p className="subtitle">Curated examples that combine UX sensibility with modern React builds.</p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-header">
              <p className="project-category">{project.category}</p>
              <p className="project-status">{project.status}</p>
            </div>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <div className="project-footer">
              <span>{project.tech}</span>
              <span>{project.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
