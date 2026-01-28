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
    image: "/projects/elegance.svg",
    url: "https://github.com/mohammedelahmar/elegance-shop",
  },
  {
    title: "LyrisFlow",
    description:
      "Topography visualization platform designed for complex data rendering and interactive mapping.",
    badge: "DATA VISUALIZATION",
    accent: "blue",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
    detail: "react · d3.js · interactive mapping · ui/ux",
    image: "/projects/lyrisflow.svg", 
    url: "https://github.com/mohammedelahmar/lyrisflow",
  },
  {
    title: "ExpenseTracker OCR",
    description:
      "Financial management system integrating OCR technology to automatically scan and log receipts.",
    badge: "FINTECH AI",
    accent: "red",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
    detail: "tesseract.js · chart.js · mern stack · finance ops",
    image: "/projects/expense-tracker.svg",
    url: "https://github.com/mohammedelahmar/expense-tracker",
  },
  {
    title: "ClubHub Systems",
    description:
      "Comprehensive management system for university clubs, handling member rosters, events, and access control.",
    badge: "SPRING BOOT",
    accent: "blue",
    span: "col-span-12 lg:col-span-7",
    detail: "java spring security · mysql · mvc pattern · role management",
    image: "/projects/clubhub.svg",
    url: "https://github.com/mohammedelahmar/clubhub",
  },
];

export const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Spring Boot",
  "Java",
  "Python",
  "Flask",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Linux",
  "FortiGate",
  "Git",
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "VPI Info",
    period: "2024 - 2025",
    description: "Contributed to enterprise-level software solutions, focusing on backend optimization and database management. Assisted in migrating legacy systems to modern web architectures.",
    skills: ["Java", "SQL", "System Design", "Agile"],
  },
  {
    role: "Computer Science Student",
    company: "Université Ibn Tofail (UIT)",
    period: "Present",
    description: "Specializing in Cybersecurity and Software Engineering. deeply involved in red team drills, network defense, and secure coding practices.",
    skills: ["Network Security", "Cryptography", "Algorithms", "Python"],
  },
];

export const skillsData = [
  { subject: "MERN Stack", A: 135, fullMark: 150 },
  { subject: "Java / Spring", A: 130, fullMark: 150 },
  { subject: "Network Security", A: 120, fullMark: 150 },
  { subject: "Python / Scripting", A: 140, fullMark: 150 },
  { subject: "DevOps / Linux", A: 110, fullMark: 150 },
  { subject: "UI / UX Design", A: 100, fullMark: 150 },
];