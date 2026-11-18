export const archiveGroups = [
  { id: "virtual-internship", label: "Virtual-internship work" },
  { id: "course-project", label: "Course projects" },
  { id: "guided-clone", label: "Guided clone" },
  { id: "learning-lab", label: "Focused learning labs" },
] as const;

export type ArchiveGroupId = (typeof archiveGroups)[number]["id"];

export const archiveFilters = [
  { id: "all", label: "All" },
  ...archiveGroups,
] as const;

export type ArchiveFilterId = (typeof archiveFilters)[number]["id"];

export interface ArchiveProject {
  title: string;
  group: ArchiveGroupId;
  description: string;
  stack: string[];
  sourceStatus: "Source repository is private" | "Local source · not publicly linked";
  demoUrl?: string;
}

export const archiveProjects: ArchiveProject[] = [
  {
    title: "Summarist",
    group: "virtual-internship",
    description:
      "Book discovery and summary app with recommendations, a saved library, and audio summaries.",
    stack: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Firebase"],
    sourceStatus: "Source repository is private",
    demoUrl: "https://summarist-sepia.vercel.app",
  },
  {
    title: "AI Trivia",
    group: "course-project",
    description:
      "Topic- and photo-based trivia with hints, a timed round, scoring, and streaks.",
    stack: ["React", "Vite", "Node.js", "Express", "Gemini API"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "Moodify",
    group: "course-project",
    description:
      "Mood-based Spotify recommendations with a React client and a Node.js API that keeps Spotify credentials server-side.",
    stack: ["React", "Vite", "Node.js", "Spotify API"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "Weatherly",
    group: "course-project",
    description:
      "City or location weather lookup with current conditions and a five-day forecast, served through a Node.js API.",
    stack: ["React", "Vite", "Node.js", "Axios", "OpenWeather"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "My Shop API",
    group: "course-project",
    description:
      "Express API for Fake Store products and Stripe test Checkout, with server-side product lookup and checkout validation.",
    stack: ["Node.js", "Express", "Stripe", "Fake Store API"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "YouTube practice clone",
    group: "guided-clone",
    description:
      "Tutorial-based React video app with feed, search, channel, and video views; includes local fallback data for API quota limits.",
    stack: ["React", "Material UI", "Axios", "React Router"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "Redux state & query lab",
    group: "learning-lab",
    description:
      "Two counters share Redux state, with API-backed posts and post lookup using Redux Toolkit and RTK Query.",
    stack: ["React", "Redux Toolkit", "RTK Query"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "Firebase authentication lab",
    group: "learning-lab",
    description:
      "React lab for email/password registration and sign-in with Firebase Authentication, plus auth-state handling.",
    stack: ["React", "Firebase Authentication"],
    sourceStatus: "Local source · not publicly linked",
  },
  {
    title: "Firestore CRUD labs",
    group: "learning-lab",
    description:
      "Grouped Firestore lessons covering document create, read, update, and delete operations.",
    stack: ["React", "Firestore"],
    sourceStatus: "Local source · not publicly linked",
  },
];
