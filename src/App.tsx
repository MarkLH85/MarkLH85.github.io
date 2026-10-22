import { useRef, useState, type FormEvent } from "react";
import AnimationGallery from "./AnimationGallery";
import ProjectArchive from "./ProjectArchive";

type IconName = "github" | "linkedin" | "arrow" | "mail" | "sun" | "moon" | "code" | "shield";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    github:
      "M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.9c0-1.1-.4-1.8-.8-2.2 2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 18.5 6c.1-.3.6-1.6-.1-3.3 0 0-1.1-.3-3.6 1.3a12.5 12.5 0 0 0-6.6 0C5.7 2.4 4.6 2.7 4.6 2.7 3.9 4.4 4.4 5.7 4.5 6a4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.9 5.7 5.6 6-.4.4-.8 1.1-.8 2.2V22",
    linkedin:
      "M4 9v11M4 4v.1M10 20V9h4v2c.8-2.7 6-3 6 2v7M14 11v9",
    arrow: "M5 19 19 5M5 5h14v14",
    mail: "M3 5h18v14H3zM3 5l9 8 9-8",
    sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
    moon: "M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z",
    code: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 20",
    shield: "M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4ZM9 12l2 2 4-4",
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl: string;
  tone: string;
}

const projects: Project[] = [
  {
    title: "Skinstric AI",
    category: "AI-DRIVEN WEB APPLICATION",
    description:
      "An AI-driven experience built around image upload, webcam capture, and demographic results. I connected the APIs, validated user input, and built responsive interfaces to guide users through the process.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/project-skinstric.png",
    liveUrl: "https://skinstric-ai-orcin.vercel.app",
    sourceUrl: "https://github.com/MarkLH85/skinstric-ai",
    tone: "slate",
  },
  {
    title: "Ultraverse",
    category: "NFT MARKETPLACE · INTERNSHIP",
    description:
      "An NFT marketplace frontend developed during my Frontend Simplified internship. A React application combining marketplace pages, reusable components, API integration, and interactive sliders.",
    stack: ["React", "JavaScript", "Axios", "CSS"],
    image: "/project-internship.png",
    liveUrl: "https://mark-lh-85-internship.vercel.app",
    sourceUrl: "https://github.com/MarkLH85/MarkLH85-internship",
    tone: "ocean",
  },
  {
    title: "Library",
    category: "REACT E-COMMERCE APPLICATION",
    description:
      "A book-shopping experience with a browsable catalog, featured and discounted titles, individual book pages, and a shopping cart. Built with reusable React components and client-side routing.",
    stack: ["React", "JavaScript", "React Router", "CSS"],
    image: "/project-library.png",
    liveUrl: "https://react-e-commerce-app-ten-alpha.vercel.app",
    sourceUrl: "https://github.com/MarkLH85/React-E-Commerce-App",
    tone: "steel",
  },
  {
    title: "Movie Search",
    category: "REACT FINAL PROJECT",
    description:
      "A movie-discovery application using the OMDb API. Search by title, explore movie details, and navigate loading, empty, and error states through a responsive React interface.",
    stack: ["React", "JavaScript", "Axios", "OMDb API"],
    sourceUrl: "https://github.com/MarkLH85/React-Final-Project",
    tone: "ink",
  },
  {
    title: "Treact",
    category: "RESPONSIVE LANDING PAGE",
    description:
      "A landing-page recreation focused on translating a reference design into a responsive website. An exercise in layout, typography, spacing, and interactive navigation with HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/project-treact.png",
    liveUrl: "https://marklh85.github.io/treact/",
    sourceUrl: "https://github.com/MarkLH85/treact",
    tone: "steel",
  },
  {
    title: "My first portfolio",
    category: "WHERE IT STARTED",
    description:
      "My original HTML and CSS portfolio. A foundation in semantic markup, Flexbox, CSS Grid, and responsive design—and a look at how my frontend journey began.",
    stack: ["HTML", "CSS", "Flexbox", "CSS Grid"],
    image: "/project-original.png",
    liveUrl: "https://marklh85.github.io/e-portfolio/",
    sourceUrl: "https://github.com/MarkLH85/e-portfolio",
    tone: "blue",
  },
];

const socialLinks: { label: string; href: string; icon: IconName }[] = [
  { label: "GitHub", href: "https://github.com/MarkLH85", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mark-herrmann-51483a9b", icon: "linkedin" },
];
const skills = [
  "JavaScript", "HTML5", "CSS3", "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Responsive Web Design", "Flexbox", "CSS Grid", "Git", "GitHub", "VS Code",
  "Postman", "Python (coursework & projects)", "Microsoft Azure", "Cisco DevNet",
];
const contactEmail = "marklherrmann3@gmail.com";

function DeveloperIllustration() {
  return (
    <div className="developer-art" aria-hidden="true">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <span className="art-spark spark-one">+</span>
      <span className="art-spark spark-two">+</span>
      <div className="floating-label label-react"><Icon name="shield" /> Security curious</div>
      <div className="floating-label label-typescript"><b>TS</b> TypeScript</div>
      <svg className="laptop-art" viewBox="0 0 520 440" fill="none">
        <defs>
          <linearGradient id="screen-edge" x1="90" y1="80" x2="425" y2="350" gradientUnits="userSpaceOnUse">
            <stop stopColor="#579bd0" /><stop offset="1" stopColor="#244568" />
          </linearGradient>
          <linearGradient id="laptop-base" x1="50" y1="340" x2="470" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b8cfdf" /><stop offset=".55" stopColor="#6e91b0" /><stop offset="1" stopColor="#385b7c" />
          </linearGradient>
          <filter id="laptop-shadow" x="0" y="0" width="520" height="440" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="20" stdDeviation="17" floodColor="#020a16" floodOpacity=".35" />
          </filter>
        </defs>
        <g filter="url(#laptop-shadow)">
          <rect x="83" y="70" width="354" height="255" rx="17" fill="url(#screen-edge)" />
          <rect x="94" y="81" width="332" height="230" rx="9" fill="#0b1829" />
          <path d="M94 111h332" stroke="#2c435c" />
          <circle cx="109" cy="96" r="3" fill="#ed7279" />
          <circle cx="120" cy="96" r="3" fill="#e7bd64" />
          <circle cx="131" cy="96" r="3" fill="#5cd8ac" />
          <text x="248" y="100" textAnchor="middle" fill="#aec4dc" fontSize="10" fontFamily="monospace">mark / workspace.tsx</text>
          <g strokeLinecap="round" strokeWidth="6">
            <path d="M121 140h36" stroke="#76bfff" /><path d="M170 140h87" stroke="#dce9f5" />
            <path d="M140 161h53" stroke="#5cd8ac" /><path d="M206 161h109" stroke="#e7bd64" />
            <path d="M140 182h90" stroke="#5cd8ac" /><path d="M244 182h62" stroke="#dce9f5" />
            <path d="M140 203h43" stroke="#5cd8ac" /><path d="M197 203h68" stroke="#76bfff" />
            <path d="M140 224h90" stroke="#5cd8ac" /><path d="M243 224h22" stroke="#e7bd64" />
            <path d="M121 245h36" stroke="#76bfff" />
          </g>
          <g stroke="#76bfff" strokeWidth="1.5" opacity=".5">
            <path d="M292 197h18l12 12m65-12h15v59h-30m-80-8h18l12-12" />
            <circle cx="290" cy="197" r="3" /><circle cx="290" cy="248" r="3" /><circle cx="386" cy="197" r="3" />
          </g>
          <path d="m350 187-28 12v24c0 20 28 35 28 35s28-15 28-35v-24l-28-12Z" fill="#132d43" stroke="#e7bd64" strokeWidth="2" />
          <rect x="339" y="215" width="22" height="19" rx="3" fill="#e7bd64" />
          <path d="M344 215v-5a6 6 0 0 1 12 0v5" stroke="#e7bd64" strokeWidth="3" />
          <circle cx="350" cy="223" r="2" fill="#132d43" />
          <rect x="120" y="267" width="154" height="25" rx="5" fill="#183047" />
          <text x="131" y="283" fill="#aec4dc" fontFamily="monospace" fontSize="11">built with purpose.</text>
          <path d="M83 325h354l47 45c5 5 1 13-6 13H42c-7 0-11-8-6-13l47-45Z" fill="url(#laptop-base)" />
          <path d="M42 383h436" stroke="#385b7c" strokeWidth="5" strokeLinecap="round" />
          <path d="M201 325h118l17 25H184l17-25Z" fill="#496f91" />
        </g>
      </svg>
      <span className="art-caption">Frontend focus. Security curiosity.</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card ${index % 2 ? "project-reversed" : ""}`} aria-labelledby={`project-${index}`}>
      <div className={`project-visual tone-${project.tone}`}>
        {project.image ? (
          <div className="browser-frame">
            <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.title}</span></div>
            <img src={project.image} alt={`${project.title} website screenshot`} loading="lazy" width="1440" height="900" />
          </div>
        ) : (
          <div className="source-preview">
            <Icon name="code" />
            <span>REACT FINAL PROJECT</span>
            <strong>Find your<br />next movie.</strong>
            <p>React + OMDb API</p>
            <small>Source showcase · demo not published</small>
          </div>
        )}
      </div>
      <div className="project-details">
        <p className="eyebrow"><span className="project-number">{String(index + 1).padStart(2, "0")}</span> {project.category}</p>
        <h3 id={`project-${index}`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label={`${project.title} technologies`}>
          {project.stack.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live preview of ${project.title}`}>
              Live preview <Icon name="arrow" />
            </a>
          )}
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${project.title}`}>
            <Icon name="github" /> Source code
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormStatus("Please complete every field before continuing.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`);
    const body = encodeURIComponent(`From: ${form.name.trim()} (${form.email.trim()})\n\n${form.message.trim()}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormStatus("Your email app should open with your draft. Send it there to complete your message, or use the email link beside this form.");
  };
  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFormStatus("");
  };

  return (
    <div className="portfolio" data-theme={darkMode ? "dark" : "light"}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header" onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}>
        <nav className="nav-container" aria-label="Main navigation">
          <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label="Mark Herrmann home">
            <span>m<span className="wordmark-accent">h</span><span className="wordmark-dot">.</span></span>
          </a>
          <div id="site-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {["Projects", "Gallery", "Archive", "About", "Contact"].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
          <div className="nav-controls">
            <button className="theme-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`} aria-pressed={darkMode}>
              <Icon name={darkMode ? "sun" : "moon"} />
            </button>
            <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((current) => !current)}>
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="home" className="hero">
          <div className="hero-inner section-container">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span /> FRONTEND DEVELOPER</p>
              <h1>Hey,<br />I&apos;m <span>Mark.</span></h1>
              <p className="hero-description">A U.S. Army veteran and <strong>frontend developer</strong> turning complex problems into thoughtful web experiences.</p>
              <p className="hero-note">Built with curiosity. Backed by real-world IT experience.</p>
              <p className="hero-interest"><Icon name="shield" /> Inspired by cybersecurity. Focused on people.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" /></a>
                <a className="text-link" href="#about">A little about me <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-socials">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}><Icon name={link.icon} /></a>
                ))}
                <a href={`mailto:${contactEmail}`} aria-label="Email Mark"><Icon name="mail" /></a>
                <span>Let&apos;s connect.</span>
              </div>
            </div>
            <DeveloperIllustration />
          </div>
          <a className="scroll-cue" href="#projects"><span aria-hidden="true">↓</span> SCROLL TO EXPLORE</a>
        </section>

        <section id="projects" className="projects-section section-container">
          <div className="section-intro">
            <p className="eyebrow">THE WORK</p>
            <h2>A few things<br />I&apos;ve <span>built.</span></h2>
            <p>From my first lines of HTML to AI-driven applications. Here&apos;s what I&apos;ve been working on.</p>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => <ProjectCard key={project.sourceUrl} project={project} index={index} />)}
          </div>
          <a className="all-projects-link" href="https://github.com/MarkLH85?tab=repositories" target="_blank" rel="noopener noreferrer">More code, experiments, and learning on GitHub <Icon name="arrow" /></a>
        </section>

        <AnimationGallery />
        <ProjectArchive />

        <section id="about" className="about-section">
          <div className="section-container about-grid">
            <div className="about-heading">
              <p className="eyebrow">BEHIND THE CODE</p>
              <h2>A problem solver.<br /><span>Always learning.</span></h2>
              <div className="about-monogram" aria-hidden="true">mh<span>.</span></div>
              <p className="about-caption">Mark Herrmann<br /><span>Veteran · IT professional · Developer</span></p>
            </div>
            <div className="about-copy">
              <p className="about-lead">I bring a troubleshooting mindset to the things I build.</p>
              <p>I&apos;m a U.S. Army veteran and IT professional transitioning into frontend development. My background in technical troubleshooting, hardware and software validation, and end-user support taught me to stay curious, work through complexity, and put people first.</p>
              <p>Now I&apos;m applying that experience to responsive web applications. I enjoy connecting APIs, building clear interfaces, and making technology more approachable—one project at a time.</p>
              <p>Outside the interface, I&apos;m drawn to cybersecurity: understanding how systems work, asking what could go wrong, and continuing to learn. That curiosity inspired this portfolio&apos;s network patterns and midnight palette.</p>
              <h3>My toolkit</h3>
              <ul className="skills-list" aria-label="Technical skills">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-container">
          <div className="contact-copy">
            <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
            <h2>Let&apos;s build<br /><span>something good.</span></h2>
            <p>Have an opportunity, a project, or just want to say hello? I&apos;d love to connect.</p>
            <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail} <Icon name="arrow" /></a>
            <div className="contact-socials">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"><Icon name={link.icon} /> {link.label}</a>)}</div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Say hello.</h3>
            <p className="form-help">This opens a draft in your email app. You&apos;ll send it from there.</p>
            <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
            <input id="name" name="name" autoComplete="name" maxLength={100} required value={form.name} onChange={(event) => updateField("name", event.target.value)} />
            <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required value={form.email} onChange={(event) => updateField("email", event.target.value)} />
            <label htmlFor="message">Your message <span aria-hidden="true">*</span></label>
            <textarea id="message" name="message" rows={4} maxLength={5000} required value={form.message} onChange={(event) => updateField("message", event.target.value)} />
            <button className="button button-primary" type="submit">Open email draft <Icon name="arrow" /></button>
            <p className="form-status" role="status">{formStatus}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <a className="wordmark" href="#home" aria-label="Back to top">mh<span className="wordmark-dot">.</span></a>
          <p>© {new Date().getFullYear()} Mark Herrmann. Built with purpose.</p>
          <a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
      <a className="floating-contact" href="#contact" aria-label="Go to contact section"><Icon name="mail" /></a>
    </div>
  );
}

export default App;
