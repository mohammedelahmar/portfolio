import { Cpu, Globe, Server, Shield } from "lucide-react";

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
  "Next.js 15",
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
    role: "Student - Bachelor GIGD",
    company: "École Supérieure de Technologie",
    period: "Present",
    description: "Focusing on advanced backend logic and system architecture. Currently mastering Python, Advanced SQL, Design Patterns, and Entrepreneurship.",
    skills: ["Python", "Advanced SQL", "UML", "Design Patterns"],
  },
  {
    role: "Internship - Full-Stack Mapping App",
    company: "Geomatics Engineering SARL",
    period: "2025",
    description: "Engineered 'TopoMap', a full-stack mapping solution using Vite, MongoDB, Express, and Node.js. Handled complex geospatial data rendering and backend performance.",
    skills: ["Vite", "MongoDB", "Express", "Node.js"],
  },
  {
    role: "DUT in Génie Informatique",
    company: "École Supérieure de Technologie",
    period: "2025", // Graduation Year
    description: "Completed comprehensive 2-year training in Algorithms, System Exploitation, Cryptography, and Advanced Databases. Mastered C, C++, Java, and JS.",
    skills: ["C/C++", "Java", "System Exploitation", "Cryptography"],
  },
  {
    role: "Internship - IT Systems",
    company: "VPI INFO",
    period: "2023 - 2024",
    description: "Developed 'ClubHub' project while managing IT infrastructure. Gained deep proficiency in Git/GitHub, Linux Command Line, and core web technologies (HTML/CSS/JS).",
    skills: ["Git/GitHub", "Linux CMD", "ClubHub Project", "Web Core"],
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