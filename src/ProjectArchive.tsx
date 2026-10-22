import { useState } from "react";
import { archiveCategories, archiveProjects, learningCollections, type ArchiveCategory } from "./archiveData";

export default function ProjectArchive() {
  const [category, setCategory] = useState<ArchiveCategory>("All");
  const visibleProjects = archiveProjects.filter((project) => category === "All" || project.category === category);

  return (
    <section id="archive" className="archive-section section-container" aria-labelledby="archive-heading">
      <div className="section-intro">
        <p className="eyebrow">THE REST OF THE JOURNEY</p>
        <h2 id="archive-heading">More projects.<br /><span>More practice.</span></h2>
        <p>Beyond the featured work: local applications, guided clones, business concepts, and browser experiments from my WebDev workspace.</p>
      </div>
      <p className="archive-notice">These projects have local source code, but no verified public demo or personal repository link is configured here. Screenshots are previews, not live applications. Guided adaptations and smaller exercises are labeled separately.</p>
      <div className="archive-filters" role="group" aria-label="Filter archived projects">
        {archiveCategories.map((item) => (
          <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
            {item} <span>{item === "All" ? archiveProjects.length : archiveProjects.filter((project) => project.category === item).length}</span>
          </button>
        ))}
      </div>
      <p className="archive-count" role="status">{visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"} in {category === "All" ? "the archive" : category}</p>
      <div className="archive-grid">
        {visibleProjects.map((project) => (
          <article className="archive-card" key={project.sourcePath}>
            {project.image && <img className="archive-image" src={project.image} alt={`${project.title} local website preview`} width="1280" height="800" loading="lazy" />}
            <div className="archive-card-body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="archive-description">{project.description}</p>
              <ul className="project-stack" aria-label={`${project.title} technologies`}>{project.stack.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <span className="local-status">Local source · not publicly linked</span>
              <details className="source-location">
                <summary>Project details &amp; source location</summary>
                {project.note && <p>{project.note}</p>}
                <p>Folder relative to WebDev:</p>
                <code>{project.sourcePath}</code>
              </details>
            </div>
          </article>
        ))}
      </div>
      <details className="learning-collection">
        <summary>Earlier mini-projects &amp; learning collections</summary>
        <p>Small assignments are grouped here instead of competing with the larger projects. Repeated lesson snapshots and backups are not counted as new applications.</p>
        <div className="learning-grid">
          {learningCollections.map((collection) => (
            <article key={collection.title}>
              <h3>{collection.title}</h3>
              <ul>{collection.projects.map((title) => <li key={title}>{title}</li>)}</ul>
              <code>{collection.sourcePath}</code>
            </article>
          ))}
        </div>
        <p>Git drills, empty scaffolds, dependency folders, algorithm challenges, the Moodify command-line app, and backend/database lesson snippets are not presented as standalone web projects. My Shop is included above and explicitly labeled as an API-only project.</p>
      </details>
    </section>
  );
}
