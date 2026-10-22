import { useRef, useState, type PointerEvent } from "react";

export default function AnimationGallery() {
  const [playing, setPlaying] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [underlined, setUnderlined] = useState(false);
  const [bannerVersion, setBannerVersion] = useState(0);
  const [transformVersion, setTransformVersion] = useState(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const shapes = useRef<HTMLDivElement>(null);

  const resetShapes = () => {
    shapes.current?.style.setProperty("--pointer-x", "0px");
    shapes.current?.style.setProperty("--pointer-y", "0px");
  };
  const moveShapes = (event: PointerEvent<HTMLDivElement>) => {
    if (!playing || event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 28}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 28}px`);
  };

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-heading" data-playing={playing}>
      <div className="section-container">
        <div className="gallery-heading">
          <div className="section-intro">
            <p className="eyebrow">SMALL DETAILS, BIG DIFFERENCE</p>
            <h2 id="gallery-heading">A little <span>motion.</span></h2>
            <p>Interactive studies adapted from my CSS and advanced portfolio lessons. Try them with a pointer, keyboard, or tap.</p>
          </div>
          <button className="gallery-pause" type="button" aria-pressed={!playing} onClick={() => { setPlaying((current) => !current); resetShapes(); }}>
            {playing ? "Pause gallery motion" : "Resume gallery motion"}
          </button>
        </div>
        <div className="gallery-grid">
          <article className="motion-card">
            <div className="motion-stage">
              <button className={`underline-demo ${underlined ? "is-active" : ""}`} type="button" aria-pressed={underlined} onClick={() => setUnderlined((current) => !current)}>A thoughtful detail.</button>
            </div>
            <div className="motion-description"><h3>Animated underline</h3><p>Hover, focus, or tap the text to expand its underline.</p><small>Module 2 UI components &amp; Module 5 Animation</small></div>
          </article>
          <article className="motion-card">
            <button className={`motion-stage image-reveal ${reveal ? "is-active" : ""}`} type="button" aria-label="Toggle project image reveal" aria-pressed={reveal} onClick={() => setReveal((current) => !current)}>
              <img src="/project-skinstric.png" alt="" loading="lazy" />
              <span className="reveal-overlay"><strong>Behind the interface.</strong><span>Zoom, blur, and reveal.</span></span>
              <span className="reveal-hint">Hover, focus, or tap to reveal</span>
            </button>
            <div className="motion-description"><h3>Project image reveal</h3><p>A 1.07× zoom and 5px blur reveal the project caption.</p><small>Module 5 · Animation</small></div>
          </article>
          <article className="motion-card">
            <div className="motion-stage"><div className="scroll-study" aria-hidden="true"><span /></div><span className="stage-caption">Keep exploring</span></div>
            <div className="motion-description"><h3>Scrolling cue</h3><p>A small looping cue built with CSS keyframes.</p><small>Module 5 · Advanced portfolio</small></div>
          </article>
          <article className="motion-card">
            <div ref={shapes} className="motion-stage parallax-study" onPointerMove={moveShapes} onPointerLeave={resetShapes} aria-hidden="true">
              <span className="study-shape shape-circle" /><span className="study-shape shape-square" /><span className="study-shape shape-cross">+</span>
              <span className="stage-caption">Move your pointer</span>
            </div>
            <div className="motion-description"><h3>Playful background shapes</h3><p>Pointer-position transforms move shapes at different depths. Static on touch and with reduced motion.</p><small>Module 5 · Background Shapes</small></div>
          </article>
          <article className="motion-card">
            <div className="motion-stage loading-study" aria-hidden="true"><span className="study-spinner" /><div className="study-skeleton"><i /><i /><i /></div></div>
            <div className="motion-description"><h3>Loading-state studies</h3><p>Rotating loaders and skeletons, shown here as motion samples—not a request in progress.</p><small>Modules 5 &amp; 6 · E-commerce loading states</small></div>
          </article>
          <article className="motion-card">
            <div className="motion-stage banner-study">
              <div key={bannerVersion} className="banner-study-copy"><strong>Build your future.</strong><span>A small start. A new direction.</span></div>
              <button type="button" onClick={() => setBannerVersion((current) => current + 1)}>Replay entrance</button>
            </div>
            <div className="motion-description"><h3>Responsive banner entrance</h3><p>A fade-up entrance adapted from my responsive banner mini-project.</p><small>Module 2 · Responsive and Animated Web Design</small></div>
          </article>
          <article className="motion-card">
            <div className="motion-stage transform-study">
              <span key={transformVersion} className="transform-study-box">Hello, motion.</span>
              <button type="button" onClick={() => setTransformVersion((current) => current + 1)}>Replay slide &amp; scale</button>
            </div>
            <div className="motion-description"><h3>Slide &amp; scale</h3><p>An entrance combining a horizontal slide, scale, and opacity, with a hover lift.</p><small>Module 2 · Motion with Transform</small></div>
          </article>
          <article className="motion-card">
            <div className="motion-stage">
              <div className={`tooltip-study ${tooltipOpen ? "is-active" : ""}`}>
                <button type="button" aria-describedby="study-tooltip" aria-pressed={tooltipOpen} onClick={() => setTooltipOpen((current) => !current)}>A helpful hint</button>
                <span id="study-tooltip" role="tooltip">A little clarity, right on time.</span>
              </div>
            </div>
            <div className="motion-description"><h3>Tooltip reveal</h3><p>Opacity and a small vertical shift make a tooltip feel responsive. Hover, focus, or tap to try it.</p><small>Module 2 · Building UI Components</small></div>
          </article>
        </div>
        <p className="gallery-note">These are portfolio-sized adaptations, not separate full applications. Motion respects your device&apos;s reduced-motion preference.</p>
      </div>
    </section>
  );
}
