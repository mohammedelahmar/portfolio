"use client";

import { useEffect, useRef, useState } from "react";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MatrixBackground from "@/components/MatrixBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stack from "@/components/Stack";
import AboutGrid from "@/components/AboutGrid";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([
    "user@mohammed:~$ help",
    "commands: help · clear · goto projects · whoami · download cv · sudo login",
  ]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [passwordMode, setPasswordMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  // Audio Logic
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ensureAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    return audioCtxRef.current;
  };

  const playTone = (freq: number, duration: number, volume: number, type: OscillatorType) => {
    const ctx = ensureAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  };

  const playHover = () => playTone(1400, 0.05, 0.02, "sine");
  const playEnter = () => playTone(280, 0.12, 0.05, "square");
  const playDenied = () => playTone(110, 0.25, 0.08, "sawtooth");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  useEffect(() => {
    const sectionIds = ["console", "projects", "stack", "contact", "experience", "skills"];
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
    playEnter();
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    const append = (lines: string[]) =>
      setCommandHistory((prev) => [...prev, ...lines].slice(-50));

    // 1. PASSWORD MODE
    if (passwordMode) {
      if (cmd === "admin") {
        append([`root@mohammed:~$ *****`, "ACCESS GRANTED.", "Loading admin modules..."]);
        setIsAdmin(true);
        setPasswordMode(false);
      } else {
        append([`root@mohammed:~$ *****`, "ACCESS DENIED.", "Incident reported."]);
        playDenied();
        setPasswordMode(false);
      }
      setCommandInput("");
      return;
    }

    // 2. STANDARD COMMAND MODE
    const lowerCmd = cmd.toLowerCase();
    switch (lowerCmd) {
      case "help":
        append([
          `user@mohammed:~$ ${cmdRaw}`,
          "commands: help · clear · goto [section] · whoami · download cv · sudo login · toggle matrix",
        ]);
        break;
      case "clear":
        setCommandHistory([]);
        break;
      case "goto projects":
        append([`user@mohammed:~$ ${cmdRaw}`, "navigating -> projects"]);
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "goto skills":
        append([`user@mohammed:~$ ${cmdRaw}`, "navigating -> skills"]);
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "goto experience":
        append([`user@mohammed:~$ ${cmdRaw}`, "navigating -> experience"]);
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
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
      case "toggle matrix":
        setMatrixEnabled((prev) => !prev);
        append([`user@mohammed:~$ ${cmdRaw}`, `Matrix effect: ${!matrixEnabled ? "ON" : "OFF"}`]);
        break;
      case "sudo login":
      case "login admin":
        append([`user@mohammed:~$ ${cmdRaw}`, "Enter root password:"]);
        setPasswordMode(true);
        break;
      case "logout":
        if (isAdmin) {
          setIsAdmin(false);
          append([`user@mohammed:~$ ${cmdRaw}`, "Session terminated."]);
        } else {
          append([`user@mohammed:~$ ${cmdRaw}`, "You are not logged in."]);
        }
        break;
      default:
        append([`user@mohammed:~$ ${cmdRaw}`, "command not found. try 'help'"]);
    }
    setCommandInput("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100 scanlines">
      {matrixEnabled && <MatrixBackground />}

      <div
        className="pointer-events-none fixed inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(139,92,246,0.15), transparent 32%)`,
          zIndex: 1,
        }}
      />
      <div className="noise" />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-28 pt-8 sm:px-10 lg:px-12 z-10 transition-all duration-300">
        <Hero playHover={playHover} />
        <AboutGrid
          playHover={playHover}
          commandInput={commandInput}
          setCommandInput={setCommandInput}
          handleCommand={handleCommand}
          commandHistory={commandHistory}
          passwordMode={passwordMode}
        />
        <Projects
          playHover={playHover}
        />
        <Experience />
        <Skills />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
