const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

const implementation = [
  "Created onboarding screens with name and location validation.",
  "Added image upload and webcam capture. Uploaded images are converted to Base64; webcam captures are converted to JPEG data before analysis.",
  "Connected the frontend to the supplied Phase 1 and Phase 2 API endpoints through Next.js route handlers.",
  "Built results views for race, age, and gender estimates, including selectable attributes and confidence-score formatting.",
  "Added asynchronous loading and error states, with an upload option alongside camera capture.",
  "Used responsive layouts and reusable components across the onboarding, camera, and results flows.",
];

export default function SkinstricCaseStudy() {
  return (
    <section
      id="skinstric-case-study"
      className="case-study-section"
      aria-labelledby="skinstric-case-study-heading"
    >
      <div className="section-container">
        <header className="case-study-header">
          <p className="eyebrow">CASE STUDY · FRONTEND SIMPLIFIED</p>
          <h2 id="skinstric-case-study-heading">
            Skinstric AI<span className="case-study-title-period">.</span>
          </h2>
          <p className="case-study-subtitle">Image-Based Demographic Analysis</p>
          <p className="case-study-role">
            Frontend Developer Intern via Frontend Simplified
            <span aria-hidden="true"> · </span>
            October 2026
          </p>
          <div className="case-study-links">
            <a
              href="https://skinstric-ai-orcin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/MarkLH85/skinstric-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source code <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <div className="case-study-overview">
          <figure className="case-study-figure">
            <img
              src="/project-skinstric.png"
              alt="Preview of the Skinstric AI application"
              loading="lazy"
              width="1440"
              height="900"
            />
            <figcaption>Skinstric AI application preview</figcaption>
          </figure>

          <div className="case-study-summary">
            <section aria-labelledby="skinstric-overview-heading">
              <h3 id="skinstric-overview-heading">Project overview</h3>
              <p>
                I built a responsive frontend for the Skinstric AI project,
                guiding users through an intake flow and image submission
                before displaying demographic estimates returned by the
                supplied API.
              </p>
            </section>

            <section aria-labelledby="skinstric-role-heading">
              <h3 id="skinstric-role-heading">My role</h3>
              <p>
                I implemented the interface and connected it to the project’s
                supplied API endpoints.
              </p>
            </section>

            <section aria-labelledby="skinstric-technologies-heading">
              <h3 id="skinstric-technologies-heading">Technologies</h3>
              <ul className="project-stack" aria-label="Technologies used">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="case-study-details">
          <section className="case-study-panel" aria-labelledby="skinstric-implementation-heading">
            <h3 id="skinstric-implementation-heading">Implementation</h3>
            <ul>
              {implementation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-study-panel" aria-labelledby="skinstric-approach-heading">
            <h3 id="skinstric-approach-heading">Technical approach</h3>
            <p>
              I organized the experience as a sequence of screen states and
              React components. Both image-input paths feed the same analysis
              flow. The API routes validate incoming data, forward requests to
              the supplied service, and return results or errors to the
              interface. The results view sorts returned scores and formats
              them as percentages to two decimal places.
            </p>
          </section>

          <section className="case-study-panel" aria-labelledby="skinstric-outcome-heading">
            <h3 id="skinstric-outcome-heading">Outcome</h3>
            <p>The application is deployed on Vercel.</p>
          </section>

          <section className="case-study-panel" aria-labelledby="skinstric-scope-heading">
            <h3 id="skinstric-scope-heading">Scope and limitations</h3>
            <p>
              This project integrates with a supplied AI service; I did not
              build or train the model. Its implemented results are demographic
              estimates—not skin diagnoses or skincare recommendations.
              Although the interface displays other analysis categories, the
              implemented results flow focuses on demographics. No testing
              results, accuracy claims, user feedback, or performance metrics
              are included here.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
