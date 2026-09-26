

export type Project = {
  title: string;
  description: string;
  badge: string;
  accent: "purple" | "green" | "blue" | "red";
  span: string;
  detail: string;
  image?: string;
  url?: string;
};

export const phrases = [
  "Security-First Developer",
  "MERN Stack Architect",
  "Spring Boot Engineer",
  "Designing resilient systems",
];

export const projects: Project[] = [
  {
    title: "TikTok Agent",
    description:
      "Automated viral clip extractor using AI motion analysis and smart framing to convert landscape video to portrait.",
    badge: "PYTHON // REACT",
    accent: "purple",
    span: "col-span-12 lg:col-span-8",
    detail: "mediapipe · opencv · ffmpeg · gemini ai",
    image: "/projects/TiktokAgent/HomePage.png",
    url: "/tiktok-agent",
  },
  {
    title: "InstaTrack Analytics",
    description: "Self-hosted Instagram intelligence engine with ghost follower detection and AI-powered audience queries.",
    badge: "PYTHON // FLASK",
    accent: "green",
    span: "col-span-12 lg:col-span-8",
    detail: "ghost detection · daily diff snapshots · selenium automation",
    image: "/projects/instatrack/dashboard_full.png",
    url: "/instatrack",
  },
  {
    title: "Elegance Commerce",
    description:
      "Secure full-stack retail OS with JWT auth, RBAC, and realtime inventory state streaming.",
    badge: "MERN STACK",
    accent: "purple",
    span: "col-span-12 sm:col-span-6 lg:col-span-4 row-span-2",
    detail: "redux toolkit · stripe integration · admin dashboard",
    image: "/projects/EleganceShop/Home.png",
    url: "/elegance-shop",
  },
  {
    title: "TopoMap",
    description:
      "Topography visualization platform designed for complex data rendering and interactive mapping.",
    badge: "MERN // VITE",
    accent: "blue",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
    detail: "vite · mongodb · express · node.js · geospatial data",
    image: "/projects/topomap.svg",
    url: "https://github.com/mohammedelahmar/topomap",
  },
  {
    title: "ExpenseTracker ",
    description:
      "Financial management system integrating OCR technology to automatically scan and log receipts.",
    badge: "MERN STACK",
    accent: "red",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
    detail: "tesseract.js · chart.js · mern stack · finance ops",
    image: "/projects/ExpenseTracker/Dashboard.png",
    url: "/expense-tracker",
  },
  {
    title: "ClubHub Systems",
    description:
      "Comprehensive management system for university clubs, handling member rosters, events, and access control.",
    badge: "HTML/CSS/JS",
    accent: "blue",
    span: "col-span-12 lg:col-span-7",
    detail: "java spring security · mysql · mvc pattern · role management",
    image: "/projects/clubhub.svg",
    url: "https://github.com/mohammedelahmar/clubhub",
  },
];

export const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Spring Boot",
  "Java",
  "Python",
  "Flask",
  "MongoDB",
  "Docker",
  "Linux",
  "FortiGate",
  "Git",
];

export const experience = [
  {
    role: "Engineering Student — Cybersecurity & AI (GCIAC)",
    company: "Institut National du Numérique et de l'Intelligence Artificielle (INNIA), Settat",
    period: "2026 – Present",
    description: "Pursuing an Engineering degree in Génie Cybersécurité et Intelligence Artificielle (GCIAC), developing practical skills across cybersecurity, artificial intelligence, secure systems, networks, and software engineering.",
    skills: ["Cybersecurity", "Artificial Intelligence", "Python", "Network Security", "Systems"],
  },
  {
    role: "Bachelor — Génie Informatique & Gouvernance Digitale (GIGD)",
    company: "École Supérieure de Technologie de Kénitra — Université Ibn Tofaïl",
    period: "2025 – 2026",
    description: "Completed a Bachelor's degree specializing in software engineering, information systems, system administration, cybersecurity, and digital governance, with practical experience in web development and database systems.",
    skills: ["Full-Stack Development", "SQL", "System Administration", "Cybersecurity", "UML"],
  },
  {
    role: "Internship — Full-Stack GIS Developer",
    company: "GEOMATICS ENGINEERING SARL",
    period: "2025",
    description: "Engineered TopoMap, a full-stack web mapping application for visualizing and working with geospatial data. Implemented the frontend, backend APIs, authentication, and database integration using a modern JavaScript stack.",
    skills: ["Vite", "React", "Node.js", "Express", "MongoDB", "Geospatial Data"],
  },
  {
    role: "DUT — Génie Informatique",
    company: "École Supérieure de Technologie de Kénitra — Université Ibn Tofaïl",
    period: "2023 – 2025",
    description: "Completed a two-year DUT in Génie Informatique, covering algorithms, object-oriented programming, databases, operating systems, computer networks, web development, system administration, and cybersecurity fundamentals.",
    skills: ["C/C++", "Java", "JavaScript", "SQL", "Linux", "Networks"],
  },
  {
    role: "Internship — IT Systems & Web",
    company: "VPI INFO",
    period: "2024",
    description: "Completed an introductory IT internship involving web development and technical support. Worked on the ClubHub project while gaining practical experience with Linux, Git/GitHub, and core web technologies.",
    skills: ["Git/GitHub", "Linux CLI", "HTML/CSS/JavaScript", "IT Support"],
  },
];

export const skillsData = [
  { subject: "MERN / Vite", A: 140, fullMark: 150 },
  { subject: "Java / Spring", A: 130, fullMark: 150 },
  { subject: "System Security", A: 125, fullMark: 150 },
  { subject: "Python / Scripting", A: 135, fullMark: 150 },
  { subject: "Algorithms / C++", A: 120, fullMark: 150 },
  { subject: "SQL / Databases", A: 130, fullMark: 150 },
];