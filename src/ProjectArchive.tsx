import { useState } from "react";
import {
  archiveFilters,
  archiveGroups,
  archiveProjects,
  type ArchiveFilterId,
} from "./archiveData";

export default function ProjectArchive() {
  const [selectedFilter, setSelectedFilter] = useState<ArchiveFilterId>("all");
  const visibleGroups = archiveGroups
    .filter((group) => selectedFilter === "all" || group.id === selectedFilter)
    .map((group) => ({
      ...group,
      projects: archiveProjects.filter((project) => project.group === group.id),
    }));
  const visibleCount = visibleGroups.reduce(
    (count, group) => count + group.projects.length,
    0,
  );
  const selectedLabel =
    selectedFilter === "all"
      ? "the archive"
      : archiveGroups.find((group) => group.id === selectedFilter)?.label ?? "this group";

  return (
    <section
      id="archive"
      className="archive-section section-container"
      aria-labelledby="archive-heading"
    >
      <div className="section-intro">
        <p className="eyebrow">SELECTED PROJECTS &amp; LEARNING SAMPLES</p>
        <h2 id="archive-heading">More projects.<br /><span>More practice.</span></h2>
        <p>
          A focused selection of virtual-internship work, course projects, a
          guided clone, and learning labs.
        </p>
      </div>

      <p className="archive-notice">
        Summarist is the only entry with a verified public demo; its source
        repository is private. The other eight entries are local-source
        examples with no public demo or MarkLH85 repository verified. Local
        workspace folders are not publicly accessible.
      </p>

      <div className="archive-filters" role="group" aria-label="Filter archive by project type">
        {archiveFilters.map(({ id, label }) => (
          <button
            type="button"
            key={id}
            aria-pressed={selectedFilter === id}
            onClick={() => setSelectedFilter(id)}
          >
            {label}
            <span>
              {id === "all"
                ? archiveProjects.length
                : archiveProjects.filter((project) => project.group === id).length}
            </span>
          </button>
        ))}
      </div>

      <p className="archive-count" role="status">
        {visibleCount} {visibleCount === 1 ? "project" : "projects"} in {selectedLabel}
      </p>

      <div className="archive-groups">
        {visibleGroups.map((group) => (
          <section
            className="archive-group"
            key={group.id}
            aria-labelledby={`archive-group-${group.id}`}
          >
            <h3 id={`archive-group-${group.id}`} className="archive-group-heading">
              {group.label}
            </h3>
            <div className="archive-grid">
              {group.projects.map((project) => (
                <article className="archive-card" key={project.title}>
                  <div className="archive-card-body">
                    <p className="eyebrow">{group.label}</p>
                    <h4>{project.title}</h4>
                    <p className="archive-description">{project.description}</p>
                    <ul
                      className="project-stack"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.stack.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <div className="archive-access">
                      {project.demoUrl && (
                        <a
                          className="archive-demo-link"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title} (opens in a new tab)`}
                        >
                          Live Demo <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      <span className="archive-access-status">
                        {project.sourceStatus}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="archive-github">
        <a
          className="all-projects-link"
          href="https://github.com/MarkLH85?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse MarkLH85&apos;s public GitHub repositories
          <span aria-hidden="true">↗</span>
        </a>
        <p>
          This list includes public repositories only; it is not a complete
          list of archive projects.
        </p>
      </div>
    </section>
  );
}
