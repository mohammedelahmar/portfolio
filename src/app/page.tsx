"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Cpu,
  Github,
  Linkedin,
  Mail,
  PanelsTopLeft,
  Radar,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Project = {
  title: string;
  description: string;
  badge: string;
  accent: "purple" | "green" | "blue" | "red";
  span: string;
  detail: string;
  image?: string;
};

const phrases = [
  "Red team strategist",
  "Threat-informed builder",
  "Automating SecOps",
  "Designing resilient systems",
];

const projects: Project[] = [
  {
    title: "Elegance Commerce Engine",
    description:
      "Secure full-stack retail OS with JWT auth, RBAC, and realtime inventory state streaming.",
    badge: "MERN ARCHITECTURE",
    accent: "purple",
    span: "col-span-12 lg:col-span-7 row-span-2",
    detail: "event-driven carts · rate-limited APIs · audit trails",
  image: "/projects/elegance.svg",
  },
  {
    title: "Social Signal Intel",
    description:
      "Python-based OSINT scraper for social graph analysis and follower retention telemetry.",
    badge: "PYTHON AUTOMATION",
    accent: "green",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
    detail: "celery workers · headless browsers · alert webhooks",
  image: "/projects/social-signal.svg",
  },
  {
    title: "Optic Finance Core",
    description:
      "AI-driven OCR ingestion that parses receipts and digitizes unstructured financial streams.",
    badge: "AI INTEGRATION",
    accent: "blue",
    span: "col-span-12 sm:col-span-6 lg:col-span-5",
    detail: "ocr pipeline · vector store receipts · anomaly flags",
  image: "/projects/optic-finance.svg",
  },
  {
    title: "Packet Watch / Lab Env",
    description:
      "Virtualized pentest range to rehearse exploit chains + defense protocols (ISO 27001 ready).",
    badge: "INFOSEC",
    accent: "red",
    span: "col-span-12 lg:col-span-7",
    detail: "fortigate sims · kali boxes · blue team drills",
  image: "/projects/packet-watch.svg",
  },
];

const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind 4",
  "Framer Motion",
  "Lucide",
  "tRPC",
  "Edge Functions",
  "PlanetScale",
  "Drizzle",
  "WebGL",
  "Zod",
  "Clerk",
  "Playwright",
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([
    "user@mohammed:~$ help",
    "commands: help · clear · goto projects · whoami",
  ]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const scrollToId = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const displayText = useMemo(
    () => phrases[phraseIndex].slice(0, charIndex),
    [charIndex, phraseIndex],
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timer = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timer = setTimeout(() => setDeleting(true), 1100);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((c) => c - 1), 36);
    } else if (deleting && charIndex === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
        setCharIndex(1);
      }, 180);
    }

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  useEffect(() => {
    const sectionIds = ["console", "projects", "stack", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleCommand = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;
    const append = (lines: string[]) =>
      setCommandHistory((prev) => [...prev, ...lines].slice(-50));

    switch (cmd) {
      case "help":
        append([
          `user@mohammed:~$ ${cmdRaw}`,
          "commands: help · clear · goto projects · whoami · download cv",
        ]);
        break;
      case "clear":
        setCommandHistory([]);
        break;
      case "goto projects":
        append([`user@mohammed:~$ ${cmdRaw}`, "navigating -> projects"]);
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "download cv":
        append([`user@mohammed:~$ ${cmdRaw}`, "opening resume.pdf"]);
        window.open("/resume.pdf", "_blank");
        break;
      case "whoami":
        append([
          `user@mohammed:~$ ${cmdRaw}`,
          "security-focused engineer · red/blue crossover · builds control-room UIs",
        ]);
        break;
      default:
        append([`user@mohammed:~$ ${cmdRaw}`, "command not found. try 'help'"]);
    }
    setCommandInput("");
  };

  const loopedStack = useMemo(() => [...techStack, ...techStack], []);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100 scanlines">
      <div
        className="pointer-events-none fixed inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.2), transparent 32%)`,
        }}
      />
      <div className="noise" />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-28 pt-16 sm:px-10 lg:px-12">
        <header
          id="console"
          className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass grid-overlay relative overflow-hidden rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
              Digital Command Center
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Clean Cyber, faster than real-time.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300/90">
              I build security-grade interfaces that feel like control rooms—motion-driven,
              resilient, and obsessively polished.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="font-mono uppercase tracking-[0.16em] rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-violet-100">
                {displayText || phrases[0]}
              </span>
              <span className="font-mono uppercase tracking-[0.16em] rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-100">
                dark-mode-native
              </span>
              <span className="font-mono uppercase tracking-[0.16em] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-100">
                app-router · edge-ready
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@command.center"
                className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.01]"
              >
                Initiate Contact <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-violet-400/60 hover:text-white"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-6"
          >
            <div className="flex items-center justify-between text-sm text-slate-300">
              <div className="flex items-center gap-2 font-mono">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                live-systems
              </div>
              <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
                realtime
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {["Command latency", "Uptime", "Signal fidelity"].map((label, idx) => (
                <div key={label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span className="font-mono text-xs text-slate-200/80">
                      {idx === 0 && "18ms"}
                      {idx === 1 && "99.99%"}
                      {idx === 2 && "+43%"}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
                    <div
                      className={`h-full rounded-full ${
                        idx === 0
                          ? "bg-gradient-to-r from-emerald-400 to-violet-500"
                          : idx === 1
                            ? "bg-gradient-to-r from-violet-500 to-blue-500"
                            : "bg-gradient-to-r from-emerald-500 to-cyan-400"
                      }`}
                      style={{ width: idx === 0 ? "78%" : idx === 1 ? "96%" : "64%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                Zero-trust defaults
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                <Radar size={16} className="text-violet-400" />
                Observability native
              </div>
            </div>
          </motion.div>
        </header>

        <section id="projects" className="space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            Projects Grid
          </div>
          <AnimatePresence>
            <div className="grid grid-cols-12 auto-rows-[200px] gap-4 lg:auto-rows-[220px]">
            {projects.map((project) => {
              const accentLight =
                project.accent === "purple"
                  ? "from-violet-600/40"
                  : project.accent === "green"
                    ? "from-emerald-500/40"
                    : project.accent === "blue"
                      ? "from-sky-400/40"
                      : "from-rose-500/40";
              const accentDot =
                project.accent === "purple"
                  ? "bg-violet-400"
                  : project.accent === "green"
                    ? "bg-emerald-400"
                    : project.accent === "blue"
                      ? "bg-sky-400"
                      : "bg-rose-400";
              const accentText =
                project.accent === "purple"
                  ? "text-violet-100"
                  : project.accent === "green"
                    ? "text-emerald-100"
                    : project.accent === "blue"
                      ? "text-sky-100"
                      : "text-rose-100";
              return (
                <motion.article
                  key={project.title}
                    layoutId={`project-${project.title}`}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    onClick={() => setSelectedProject(project)}
                  className={`${project.span} glass relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-6`}
                  style={
                    project.image
                      ? {
                          backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.55), rgba(2,6,23,0.9)), url(${project.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]">
                      <span
                        className={`h-2 w-2 rounded-full ${accentDot} shadow-[0_0_12px_rgba(124,58,237,0.6)] animate-pulse`}
                      />
                      {project.badge}
                    </span>
                    <PanelsTopLeft size={16} className="text-slate-400" />
                  </div>
                  <div>
                    <h3 className={`glitch-title text-2xl font-semibold text-slate-50 ${accentText}`}>
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300/90">{project.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide">
                      {project.detail}
                    </span>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-1 text-emerald-200/90"
                    >
                      open <ArrowUpRight size={14} />
                    </motion.button>
                  </div>
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-50 blur-3xl bg-gradient-to-br ${accentLight} via-transparent to-slate-900`}
                  />
                  <div className="pointer-events-none absolute inset-0 border border-white/5" />
                </motion.article>
              );
            })}

            <motion.article
              id="console-terminal"
              whileHover={{ y: -4 }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 glass relative overflow-hidden rounded-3xl p-5 font-mono text-sm"
            >
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  terminal
                </span>
                <Terminal size={14} className="text-slate-400" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-emerald-100 shadow-inner">
                <div className="flex flex-col gap-1">
                  {commandHistory.map((line, idx) => (
                    <div key={`${line}-${idx}`} className="text-xs text-emerald-100/90">
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-emerald-100">
                    <span className="text-emerald-400">{">"}</span>
                    <input
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleCommand(commandInput);
                        }
                      }}
                      className="w-full bg-transparent text-emerald-100 outline-none placeholder:text-emerald-700"
                      placeholder="type a command (help)"
                      aria-label="terminal input"
                    />
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              whileHover={{ y: -4 }}
              className="col-span-12 sm:col-span-6 lg:col-span-3 glass relative overflow-hidden rounded-3xl p-5"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  certification
                </span>
                <ShieldCheck size={14} className="text-amber-300" />
              </div>
              <div className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">prep</div>
                <div className="text-lg font-semibold">Certified Ethical Hacker</div>
                <div className="text-xs text-slate-300">focus: spring security · network defense · blue team drills</div>
              </div>
            </motion.article>

            <motion.article
              whileHover={{ y: -4, scale: 1.01 }}
              className="col-span-12 sm:col-span-6 lg:col-span-5 glass relative overflow-hidden rounded-3xl p-0 photo-verify"
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_35%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_35%)]" />
                <Image
                  src="/profile-bw.svg"
                  alt="Mohammed El Ahmar"
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover opacity-70 transition duration-300 hover:opacity-100 grayscale hover:grayscale-0"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                    operator: online
                  </div>
                  <div className="text-xl font-semibold text-white">Mohammed El Ahmar</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-200">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    security id badge
                  </div>
                </div>
              </div>
            </motion.article>
            </div>
          </AnimatePresence>
        </section>

        <section id="stack" className="glass relative overflow-hidden rounded-3xl p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Signal chain</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-50">Tech rail: always in motion.</h2>
              <p className="mt-2 max-w-xl text-slate-300/90">
                A kinetic ticker of the tools I ship with. Everything is battle-tested for DX,
                resilience, and velocity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                <Cpu size={16} className="text-emerald-400" />
                Edge-native
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                <Terminal size={16} className="text-violet-400" />
                Automation heavy
              </div>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60">
            <div className="marquee-track">
              {loopedStack.map((item, idx) => (
                <div
                  key={`${item}-${idx}`}
                  className="m-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="glass relative overflow-hidden rounded-3xl p-8 text-slate-100"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.28em] text-slate-400">
                contact protocol
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Ready to sync?</h3>
              <p className="text-slate-300/90">
                Drop a line for collabs, security labs, or interface builds. Response SLA: &lt; 12h.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@command.center"
                className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/80 to-violet-500/80 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.01]"
              >
                open channel <ArrowUpRight size={16} />
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
              >
                <Linkedin size={16} /> linkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.title}`}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-[min(900px,92vw)] max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 p-8 text-slate-100 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200 hover:border-violet-400/60 hover:text-white"
              >
                close
              </button>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                {selectedProject.badge}
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-slate-50">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-slate-300/90">{selectedProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide">
                  {selectedProject.detail}
                </span>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-100">
                  immersive modal
                </span>
              </div>
              <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                    status
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200">
                    online
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  </span>
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                  notes
                </div>
                <ul className="list-disc space-y-1 pl-4 text-slate-200/90">
                  <li>Motion-linked expansion via shared layoutId.</li>
                  <li>Stay in-app: no tab change, faster context switching.</li>
                  <li>Ideal for deep dives: architecture, tooling, links.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="dock-blur fixed bottom-6 left-1/2 z-30 flex w-[min(640px,90vw)] -translate-x-1/2 items-center justify-between rounded-full px-3 py-2 text-sm text-slate-100">
        {[
          { label: "console", icon: Terminal, id: "console" },
          { label: "projects", icon: PanelsTopLeft, id: "projects" },
          { label: "stack", icon: Cpu, id: "stack" },
          { label: "contact", icon: Mail, id: "contact" },
        ].map(({ label, icon: Icon, id }) => {
          const active = activeSection === id;
          return (
            <button
              key={label}
              onClick={() => scrollToId(id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 transition ${
                active ? "bg-white/15 text-white" : "hover:bg-white/10"
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{label}</span>
              {active && <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
