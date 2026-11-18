# Portfolio

A responsive React, TypeScript, and Tailwind CSS portfolio.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build` and check formatting and code quality with `npm run lint`.

## Live website and deployment

Public portfolio: https://marklh85.github.io/

Source repository: https://github.com/MarkLH85/MarkLH85.github.io

GitHub Pages hosts the production build, so the site works on mobile or another computer without the local development server running. No sign-in is required to view it.

Push changes to `main` to publish an update. `.github/workflows/deploy.yml` installs the locked dependencies with Node 24, runs lint and the production build, and deploys `dist` to GitHub Pages. Check the repository's Actions tab for deployment status; publishing may take a few minutes. Pages must use **GitHub Actions** as its build source in repository settings.

This is a root-domain user site, so Vite's default `/` base is intentional. Only the portfolio application and its preview assets are published; the original coursework folders are not included.

## Contact form

The required contact form validates the visitor's name, email, and message, then opens their email app with the message addressed to `marklherrmann3@gmail.com`. It does not send mail through a server, so visitors need a configured email app.

## Updating your portfolio

The portfolio features six projects: Skinstric AI, Ultraverse (NFT marketplace internship), Library (React e-commerce), Movie Search (React final project), Treact, and the original HTML/CSS portfolio.

Project details, technology tags, screenshot paths, and destination URLs are in the `projects` array in `src/App.tsx`. Screenshots of the five published sites are saved in `public/project-*.png`. Movie Search has a source-only presentation because no published demo was found; add a `liveUrl` and screenshot when it is deployed.

Add future projects to the array, ordered from strongest to weakest. Update personal details, about text, and skills in the same file when needed. The page title and search description are in `index.html`.

## Project archive

The six featured projects are followed by nine selected archive entries, grouped as virtual-internship work, course projects, a guided clone, and focused learning labs. `src/archiveData.ts` records each entry's provenance label, description, technology tags, and source access status. The archive is rendered by `src/ProjectArchive.tsx`.

Summarist is the only archive entry with a verified public demo: https://summarist-sepia.vercel.app. Its source repository is private. The other eight entries are local-source examples; no public demo or MarkLH85 repository has been verified for them. Local workspace folders are not publicly accessible and are not linked from the archive.

The archive's GitHub link opens MarkLH85's public repository listing only; it is not a complete list of the archive projects. The YouTube practice clone is identified as tutorial-based, and no tutorial author's repository is presented as Mark's.

## Animation gallery

`src/AnimationGallery.tsx` adapts eight studies from the actual course work: animated underlines, project image zoom/blur reveals, scrolling cues, pointer-responsive shapes, loading spinner/skeletons, the responsive banner's fade-up entrance, slide/scale transforms, and tooltip reveals. These are deliberately labeled as adaptations of lessons rather than separate original applications.

The gallery supports keyboard/tap interaction, a motion pause/resume control, and the user's reduced-motion preference. Pointer-driven shapes remain static on touch devices or with reduced motion. Animation styles live alongside the existing layout in `src/index.css`.

## Design and accessibility

The Midnight Network design reflects Mark's interest in cybersecurity without claiming professional security qualifications. Dark mode is the default, using navy surfaces, electric-blue links and controls, gold identity highlights, green decorative nodes, and restrained red window details. The light option uses cool off-white surfaces and darker blue/gold accents for readable contrast.

An original circuit/network SVG decorates the hero without intercepting pointer events or adding animation. The original developer illustration combines code with a shield/lock motif; it is decorative, not an indication that a security scan or service is running. Featured projects, the archive, forms, and motion studies share the same theme variables in `src/index.css`. Project screenshots retain the original projects' colors.

The page includes light/dark themes, mobile navigation with Escape-to-close support, visible keyboard focus, a skip link, and reduced-motion support. Project descriptions and links remain visible without hovering. The theme toggle changes the current page session; it does not persist after a reload.

Phone layouts use fluid headings, shrinkable single-column grids, stacked hero actions, and a smaller illustration. Network decoration stays below the main introduction, and primary navigation, social links, project links, and archive filters have at least 44px-high touch targets. The floating contact shortcut is hidden on phones so it cannot cover content or form fields; Contact remains available in the menu. Contact inputs use 16px text to avoid automatic focus zoom in mobile Safari. Responsive checks should verify text and control bounds, not just document scroll width, because clipped overflow can hide layout problems.
