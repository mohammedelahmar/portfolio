"use client";

import { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MatrixBackground from "@/components/MatrixBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stack from "@/components/Stack";
import AboutGrid from "@/components/AboutGrid";
import Footer from "@/components/Footer";
import { useAudio } from "@/hooks/useAudio";
import { useTerminal } from "@/hooks/useTerminal";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Custom Hooks
  const { playHover, playEnter, playDenied } = useAudio();

  const {
    input: commandInput,
    setInput: setCommandInput,
    history: commandHistory,
    handleCommand,
    navigateHistory,
    autocomplete,
    passwordMode,
    isAdmin,
    matrixEnabled
  } = useTerminal(playEnter, playDenied);

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
          navigateHistory={navigateHistory}
          autocomplete={autocomplete}
        />
        <Projects
          playHover={playHover}
        />
        <Experience />
        <Skills />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
