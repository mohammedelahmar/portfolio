"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import React, { useEffect, useState } from "react";
import { phrases, portfolioMetrics } from "@/app/data";

export default function Hero({ playHover }: { playHover: () => void }) {
     const [displayText, setDisplayText] = useState("");
     const [phraseIndex, setPhraseIndex] = useState(0);
     const [charIndex, setCharIndex] = useState(0);
     const [deleting, setDeleting] = useState(false);

     useEffect(() => {
          const current = phrases[phraseIndex];
          let timer: ReturnType<typeof setTimeout>;

          const updateTyping = () => {
               if (!deleting && charIndex < current.length) {
                    setCharIndex((prev) => prev + 1);
                    setDisplayText(current.slice(0, charIndex + 1));
               } else if (!deleting && charIndex === current.length) {
                    setDeleting(true);
               } else if (deleting && charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                    setDisplayText(current.slice(0, charIndex - 1));
               } else if (deleting && charIndex === 0) {
                    setDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
               }
          };

          const typingSpeed = deleting ? 40 : 100;
          const pauseAtEnd = !deleting && charIndex === current.length ? 1500 : 0;
          const pauseAtStart = deleting && charIndex === 0 ? 500 : 0;

          timer = setTimeout(updateTyping, typingSpeed + pauseAtEnd + pauseAtStart);

          return () => clearTimeout(timer);
     }, [charIndex, deleting, phraseIndex]);

     return (
          <header id="console" className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] pt-20">
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="glass grid-overlay relative overflow-hidden rounded-3xl p-8 shadow-2xl"
               >
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-300">
                         <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                         Cybersecurity & Full Stack Engineer
                    </div>
                    <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl min-h-[3.6em] sm:min-h-[2.4em]">
                         Building Secure, <br className="hidden sm:block" />
                         <span className="text-emerald-400">
                              {displayText}
                              <span className="animate-pulse">_</span>
                         </span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-slate-300/90">
                         Cybersecurity & AI engineering student building secure full-stack
                         applications, intelligent systems, and polished developer experiences.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                         <a
                              href="mailto:mohamedahmar06@gmail.com"
                              onMouseEnter={playHover}
                              className="shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.01]"
                         >
                              Contact Me <ArrowUpRight size={16} />
                         </a>
                         <a
                              href="https://github.com/mohammedelahmar"
                              target="_blank"
                              rel="noreferrer"
                              onMouseEnter={playHover}
                              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-violet-400/60 hover:text-white"
                         >
                              <Github size={16} /> GitHub
                         </a>
                         <a
                              href="https://www.linkedin.com/in/mohammed-el-ahmar-470516213/"
                              target="_blank"
                              rel="noreferrer"
                              onMouseEnter={playHover}
                              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
                         >
                              <Linkedin size={16} /> LinkedIn
                         </a>
                         <a
                              href="/resume.pdf"
                              target="_blank"
                              onMouseEnter={playHover}
                              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
                         >
                              <ArrowUpRight size={16} /> CV
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
                              portfolio-stats
                         </div>
                         <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
                              overview
                         </span>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                         {portfolioMetrics.map((metric) => (
                              <div key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
                                   <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-violet-400 font-mono">
                                        {metric.value}
                                   </div>
                                   <div className="mt-1 text-xs text-slate-300/70 uppercase tracking-wider">
                                        {metric.label}
                                   </div>
                              </div>
                         ))}
                    </div>
               </motion.div>
          </header>
     );
}
