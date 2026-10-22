export const archiveCategories = ["All", "React & Next.js", "Full-stack & AI", "Websites", "Browser tools"] as const;
export type ArchiveCategory = (typeof archiveCategories)[number];

export interface ArchiveProject {
  title: string;
  category: Exclude<ArchiveCategory, "All">;
  description: string;
  stack: string[];
  sourcePath: string;
  image?: string;
  note?: string;
}

const advanced = "Module-10-Advanced-Technologies";
const fullStack = "Module-14-Full-Stack-Fundamentals";
const clones = "Module-7-Building-Big-Tech\\01 - Guided Projects\\01 - Project Clones";
const browserTools = "Module-8-Interviews\\03 - DOM Manipulation";

export const archiveProjects: ArchiveProject[] = [
  {
    title: "Summarist",
    category: "React & Next.js",
    description: "An advanced internship application for discovering books, reading summaries, and listening to audio, with a Redux-driven authentication modal.",
    stack: ["Next.js", "TypeScript", "Redux", "Firebase"],
    sourcePath: `${advanced}\\05 - Advanced Virtual Internship\\01 - Advanced Virtual Internship\\summarist`,
  },
  {
    title: "YouTube practice clone",
    category: "React & Next.js",
    description: "A tutorial-based video app with category browsing, search routes, video playback, and channel pages. Adapted with a local demo dataset for API quota limits.",
    stack: ["React", "Material UI", "Axios", "React Router"],
    sourcePath: `${clones}\\01 - YouTube Clone`,
    note: "Guided adaptation, not an original product. API-backed and local demo behavior.",
  },
  {
    title: "Netflix practice clone",
    category: "React & Next.js",
    description: "A tutorial-based movie interface using TMDB. Practice included fixing trailer requests for both TV originals and movies.",
    stack: ["React", "Axios", "TMDB", "YouTube trailers"],
    sourcePath: `${clones}\\02 - Netflix Clone`,
    note: "Guided adaptation. The original My List control is not implemented.",
  },
  {
    title: "Twitter practice clone",
    category: "React & Next.js",
    description: "A guided social-media interface used to practice React component structure, application state, and social-feed interactions.",
    stack: ["React", "JavaScript", "CSS"],
    sourcePath: `${clones}\\03 - Twitter Clone`,
    note: "Guided adaptation of an existing clone project.",
  },
  {
    title: "MovieFind",
    category: "React & Next.js",
    description: "A Tailwind movie-search revamp with OMDb data, favorites, light/dark themes, and responsive styling.",
    stack: ["React", "Vite", "Tailwind CSS", "OMDb"],
    sourcePath: `${advanced}\\03 - Tailwind CSS\\09 - Movie Search App Revamp\\tailwind-movie-search-app`,
    note: "Course starter functionality with a visual-design capstone.",
  },
  {
    title: "AI Trivia",
    category: "Full-stack & AI",
    description: "Topic and photo-based trivia with hints, a timed question round, scoring, and streaks. The React client talks to a separate AI API server.",
    stack: ["React", "Node.js", "AI APIs"],
    sourcePath: "Module-12-Frontend-Meets-AI\\01 - AI Engineering\\06 - Levelling Up With Prompting\\ai-trivia",
    note: "Includes the earlier First AI Feature version; server configuration is required.",
  },
  {
    title: "Moodify",
    category: "Full-stack & AI",
    description: "Mood-based music recommendations with a React frontend and Node HTTP backend. Spotify credentials stay on the server.",
    stack: ["React", "Vite", "Node.js", "Spotify"],
    sourcePath: `${fullStack}\\01 - Node.js\\09 - PROJECT 2 - Moodify Web App`,
    note: "Requires a configured Spotify backend. The separate Moodify CLI is not a web project.",
  },
  {
    title: "Weatherly",
    category: "Full-stack & AI",
    description: "City and geolocation-based weather, unit selection, and a five-day forecast, backed by a Node API that normalizes OpenWeather responses.",
    stack: ["React", "Node.js", "Axios", "OpenWeather"],
    sourcePath: `${fullStack}\\01 - Node.js\\10 - PROJECT 3 - Weatherly`,
    note: "Kept in the archive rather than the featured projects. Requires backend API configuration.",
  },
  {
    title: "PetPal",
    category: "Full-stack & AI",
    description: "A pet browsing and adoption-state demo using a React client and Express API with dog and cat image services.",
    stack: ["React", "Vite", "Express", "REST APIs"],
    sourcePath: `${fullStack}\\02 - Express & REST API Design\\13 - PROJECT 1 - PetPat`,
    note: "The source folder is named PetPat. Adoption state is client-side and resets on reload.",
  },
  {
    title: "My Restaurant",
    category: "Full-stack & AI",
    description: "An ingredient-driven recipe interface with search results and recipe details, served through a separate backend API.",
    stack: ["React", "Axios", "Express", "REST APIs"],
    sourcePath: `${fullStack}\\02 - Express & REST API Design\\14 - PROJECT 2 - My Restaurant`,
  },
  {
    title: "My Shop API",
    category: "Full-stack & AI",
    description: "An Express product and checkout API integrating Fake Store products and Stripe test-mode Checkout, with server-side price lookup and validation.",
    stack: ["Node.js", "Express", "Stripe", "Fake Store API"],
    sourcePath: `${fullStack}\\02 - Express & REST API Design\\15 - PROJECT 3 - My Shop`,
    note: "Backend-only project; no storefront frontend was found. Stripe test configuration is required.",
  },
  {
    title: "InstaClone routing demo",
    category: "React & Next.js",
    description: "A small Next.js learning app with Explore, Reels, and dynamic profile routes, including a not-found profile state.",
    stack: ["Next.js", "React", "App Router"],
    sourcePath: `${advanced}\\01 - Next JS\\05 - InstaClone Project\\instaclone`,
    note: "Routing exercise, not a full Instagram clone.",
  },
  {
    title: "Redux state & query lab",
    category: "React & Next.js",
    description: "Two counters sharing global state, plus API-backed posts and post lookup using Redux Toolkit and RTK Query.",
    stack: ["React", "Redux Toolkit", "RTK Query"],
    sourcePath: `${advanced}\\04 - Redux\\01 - Redux Crash Course\\redux-crash-course`,
  },
  {
    title: "React user directory & posts",
    category: "React & Next.js",
    description: "A JSONPlaceholder-powered user directory with routed post lists, user-ID search, Axios requests, and skeleton loading states.",
    stack: ["React", "Axios", "React Router", "JSONPlaceholder"],
    sourcePath: "Module-7-Building-Big-Tech\\01 - Guided Projects\\02 - Final Preparation",
  },
  {
    title: "Firebase authentication lab",
    category: "React & Next.js",
    description: "A React authentication exercise implementing email/password account creation and sign-in with Firebase.",
    stack: ["React", "Firebase Authentication"],
    sourcePath: "Module-6-React-Rocketship\\04 - Firebase\\02 - Firebase Authentication",
    note: "Requires Firebase configuration.",
  },
  {
    title: "Firestore CRUD labs",
    category: "React & Next.js",
    description: "A collection of create, read, update, and delete exercises for Firestore documents, including a post list with deletion.",
    stack: ["React", "Firestore"],
    sourcePath: "Module-6-React-Rocketship\\05 - Firestore",
    note: "Grouped lesson stages, rather than separate claims of full applications.",
  },
  {
    title: "Animated portfolio",
    category: "Websites",
    description: "The advanced JavaScript portfolio with image hover reveals, animated link underlines, scrolling cues, theme switching, contact modal, and pointer-responsive shapes.",
    stack: ["HTML", "CSS", "JavaScript", "CSS animation"],
    sourcePath: "Module-5-Build-Like-a-Pro\\01 - Advanced Project\\16 - Final Tweaks",
    image: "/archive-animated-portfolio.png",
    note: "The animation gallery below adapts techniques from this project; contact integrations are not activated here.",
  },
  {
    title: "JavaScript Movie Search",
    category: "Websites",
    description: "The original one-page movie search, before the React version: fetch requests, dynamically rendered posters, skeleton loading, and empty states.",
    stack: ["HTML", "CSS", "JavaScript", "OMDb"],
    sourcePath: "Module-5-Build-Like-a-Pro\\04 - Individual Project\\01 - Final Project",
    note: "Requires OMDb configuration; separate from the featured React version.",
  },
  {
    title: "JavaScript Library",
    category: "Websites",
    description: "The pre-React bookshop with catalog pages, pricing, loading feedback, and client-side book interactions.",
    stack: ["HTML", "CSS", "JavaScript"],
    sourcePath: "Module-5-Build-Like-a-Pro\\02 - E-Commerce App\\03 - Loading State",
    image: "/archive-js-library.png",
  },
  {
    title: "Product storefront",
    category: "Websites",
    description: "A responsive early e-commerce project with product rendering, category filtering, add-to-cart interaction, and a cart counter.",
    stack: ["HTML", "CSS", "JavaScript", "CSS Grid"],
    sourcePath: "Module-3-Build-and-Apply\\04 - Projects\\02 - E-commerce",
    image: "/archive-storefront.png",
  },
  {
    title: "Responsive agency website",
    category: "Websites",
    description: "The Module 3 final website combining responsive navigation, hero, services, about, project cards, and a contact section.",
    stack: ["HTML", "CSS", "JavaScript", "Flexbox"],
    sourcePath: "Module-3-Build-and-Apply\\04 - Projects\\03 - Final Project",
    image: "/archive-agency.png",
  },
  {
    title: "JavaScript user directory & posts",
    category: "Websites",
    description: "The original DOM-based user and post browsing exercise, before its React adaptation.",
    stack: ["HTML", "CSS", "JavaScript", "JSONPlaceholder"],
    sourcePath: "Module-5-Build-Like-a-Pro\\03 - Final Preparation\\02 - Final Presentation",
  },
  {
    title: "Roseville Home Services",
    category: "Websites",
    description: "A practice local-services website with service descriptions, business storytelling, and quote-request presentation.",
    stack: ["HTML", "CSS", "JavaScript"],
    sourcePath: "Module-3-Build-and-Apply\\Make Money Coding\\Side Income Experiment\\01-Portfolio-Site",
    image: "/archive-home-services.png",
    note: "Practice business concept, not a claim of a paid client engagement.",
  },
  {
    title: "American Business Services concept",
    category: "Websites",
    description: "A practice business-site concept created while exploring AI-assisted client-site workflows.",
    stack: ["HTML", "CSS", "AI-assisted workflow"],
    sourcePath: "Module-3-Build-and-Apply\\Make Money Faster (with AI)\\05-Practice-Client-Sites\\American-Business-Services",
    image: "/archive-business-concept.png",
    note: "Unofficial practice concept, not an affiliated or commissioned website.",
  },
  {
    title: "Stopwatch",
    category: "Browser tools",
    description: "A DOM-manipulation timer exercise, kept here as a small learning tool rather than a featured project.",
    stack: ["JavaScript", "DOM", "Timers"],
    sourcePath: `${browserTools}\\02 - Stopwatch`,
  },
  {
    title: "Pomodoro",
    category: "Browser tools",
    description: "A browser-based focus-timer exercise practicing time-based UI updates and user interactions.",
    stack: ["JavaScript", "DOM", "Timers"],
    sourcePath: `${browserTools}\\03 - Pomodoro`,
  },
  {
    title: "Clock",
    category: "Browser tools",
    description: "A clock interface practicing DOM updates driven by time.",
    stack: ["JavaScript", "DOM", "Date"],
    sourcePath: `${browserTools}\\04 - Clock`,
  },
  {
    title: "Todo List",
    category: "Browser tools",
    description: "An interactive task-list exercise practicing state changes and DOM rendering.",
    stack: ["JavaScript", "DOM", "CSS"],
    sourcePath: `${browserTools}\\05 - Todo List`,
  },
  {
    title: "Tic Tac Toe",
    category: "Browser tools",
    description: "A small game used for DOM and interaction practice. Archived separately from the main project showcases.",
    stack: ["JavaScript", "DOM", "Game logic"],
    sourcePath: `${browserTools}\\06 - Tic Tac Toe`,
  },
];

export interface LearningCollection {
  title: string;
  sourcePath: string;
  projects: string[];
}

export const learningCollections: LearningCollection[] = [
  {
    title: "First HTML mini-projects",
    sourcePath: "Module-1-From-Nothing-to-a-Real-Website",
    projects: ["My First Message", "Top 3 Places in Roseville", "Clickable Gallery", "Personal Homepage", "Daily Routine Site", "Contact Me Page"],
  },
  {
    title: "CSS layout & UI mini-projects",
    sourcePath: "Module-2-Design-Like-a-Real-Developer",
    projects: ["Page Makeover", "Profile Card", "Shape the Text", "Pricing Plans / Styled Component", "Flex Gallery + Navigation", "UI Components (modal, tooltip, navigation)", "Responsive animated banner", "Animations with Keyframes (fade-slide entrance)", "Motion with Transform (slide and scale)"],
  },
  {
    title: "Early portfolio & JavaScript foundations",
    sourcePath: "Module-3-Build-and-Apply\\03 - Mini Project",
    projects: ["Build and Style Your Website (early mini portfolio)"],
  },
  {
    title: "JavaScript practice pages",
    sourcePath: "Module-4-JavaScript-Mastery",
    projects: ["Introduction", "Conditionals", "Loops", "Functions", "Arrays", "Objects", "DOM", "Promises", "Beginner challenges", "Medium challenges"],
  },
  {
    title: "React component & routing exercises",
    sourcePath: "Module-6-React-Rocketship\\02 - React Crash Course",
    projects: ["Intro to React", "Reusable components", "Props", "Event handlers", "useState", "useEffect", "Routing (in the separate Module-6-React Rocketship folder)", "API integration"],
  },
  {
    title: "Next.js & Tailwind foundations",
    sourcePath: "Module-10-Advanced-Technologies",
    projects: ["App Router", "Dynamic routes", "Moving between pages", "Layouts", "Server/client components", "Route handlers", "Tailwind concept practice", "Tailwind responsive layout practice"],
  },
];
