export type Project = {
  title: string;
  description: string;
  badge: string;
  accent: "purple" | "green" | "blue" | "red";
  detail: string;
  image?: string;
  url?: string;
  github?: string;
};

// --- Hero ---

export const phrases = [
  "Cybersecurity & Full Stack",
  "Engineering Student — GCIAC",
  "Building Secure Systems",
  "Security × AI × Code",
];

export const portfolioMetrics = [
  { label: "Featured Projects", value: "06" },
  { label: "Years of Software Engineering Studies", value: "03" },
  { label: "Internships Completed", value: "02" },
  { label: "Engineering Specialization", value: "01" },
];

// --- Projects (ordered by strategic importance) ---

export const projects: Project[] = [
  {
    title: "BioLock",
    description:
      "Behavioral biometric security system combining millisecond-precision keystroke dynamics with Isolation Forest anomaly detection to block stolen credentials.",
    badge: "PYTHON // SCIKIT-LEARN",
    accent: "green",
    detail: "behavioral biometrics · isolation forest · anomaly detection · customtkinter",
    image: "/projects/BioLock/Unlocked.png",
    url: "/Biolock",
    github: "https://github.com/mohammedelahmar/BioLock_Project",
  },
  {
    title: "ExpenseTracker",
    description:
      "Full-stack financial management system integrating OCR technology to automatically scan receipts, track expenses, and visualize spending analytics.",
    badge: "MERN STACK",
    accent: "red",
    detail: "tesseract.js · chart.js · authentication · finance ops",
    image: "/projects/ExpenseTracker/Dashboard.png",
    url: "/expense-tracker",
    github: "https://github.com/mohammedelahmar/ExpenseTracker",
  },
  {
    title: "InstaTrack Analytics",
    description:
      "Self-hosted Instagram intelligence engine with ghost follower detection, daily diff snapshots, and AI-powered audience queries.",
    badge: "PYTHON // FLASK",
    accent: "green",
    detail: "ghost detection · selenium · data analysis · mongodb",
    image: "/projects/instatrack/dashboard_full.png",
    url: "/instatrack",
    github: "https://github.com/mohammedelahmar/InstaTrack",
  },
  {
    title: "TopoMap",
    description:
      "Full-stack web mapping application for visualizing geospatial data. Built during internship at Geomatics Engineering SARL.",
    badge: "MERN // VITE",
    accent: "blue",
    detail: "vite · react · express · mongodb · geospatial",
    image: "/projects/topomap.svg",
    url: "https://github.com/mohammedelahmar/topomap",
    github: "https://github.com/mohammedelahmar/topomap",
  },
  {
    title: "Elegance Commerce",
    description:
      "Secure full-stack retail platform with JWT authentication, role-based access control, and integrated payment processing.",
    badge: "MERN STACK",
    accent: "purple",
    detail: "redux toolkit · jwt · rbac · admin dashboard",
    image: "/projects/EleganceShop/Home.png",
    url: "/elegance-shop",
    github: "https://github.com/mohammedelahmar/Elegance_Shop",
  },
  {
    title: "TikTok Agent",
    description:
      "AI-powered viral clip extractor using motion analysis and smart framing to convert landscape video to portrait format.",
    badge: "PYTHON // REACT",
    accent: "purple",
    detail: "mediapipe · opencv · ffmpeg · gemini ai",
    image: "/projects/TiktokAgent/HomePage.png",
    url: "/tiktok-agent",
    github: "https://github.com/mohammedelahmar/tiktok-agent",
  },
  {
    title: "ClubHub",
    description:
      "University club management system handling member rosters, events, and role-based access control.",
    badge: "JAVA // SPRING",
    accent: "blue",
    detail: "spring security · mysql · mvc · role management",
    image: "/projects/clubhub.svg",
    url: "https://github.com/mohammedelahmar/clubhub",
    github: "https://github.com/mohammedelahmar/clubhub",
  },
];

// --- Technical Focus (replaces percentage-based skills) ---

export const technicalFocus = [
  { area: "Full-Stack Development", icon: "layers" },
  { area: "Cybersecurity", icon: "shield" },
  { area: "Python & Automation", icon: "terminal" },
  { area: "Backend Engineering", icon: "server" },
  { area: "Databases", icon: "database" },
  { area: "Linux & Systems", icon: "monitor" },
  { area: "Artificial Intelligence", icon: "brain" },
  { area: "Networking", icon: "network" },
];

// --- Tech Stack (categorized) ---

export const techStackFoundation = [
  "JavaScript", "React", "Node.js", "Express",
  "MongoDB", "SQL", "Java", "Python", "Git", "Linux",
];

export const techStackGrowing = [
  "Cybersecurity", "Artificial Intelligence", "Docker",
  "Spring Boot", "TypeScript", "Next.js", "Tailwind CSS", "Networking",
];

// --- Currently Learning ---

export const currentlyLearning = [
  {
    category: "Cybersecurity",
    items: ["Web Security", "Network Security", "Linux Security", "OWASP", "Security Testing"],
  },
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning", "Computer Vision", "AI-powered Applications"],
  },
  {
    category: "Engineering",
    items: ["Secure Software Architecture", "Docker", "Advanced Backend Development"],
  },
];

// --- Experience ---

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