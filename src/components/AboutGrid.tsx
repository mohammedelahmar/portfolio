"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const QUICK_COMMANDS = ["whoami", "projects", "skills", "cv"];

export default function AboutGrid({
     playHover,
     commandInput,
     setCommandInput,
     handleCommand,
     commandHistory,
     passwordMode,
     navigateHistory,
     autocomplete,
}: {
     playHover: () => void;
     commandInput: string;
     setCommandInput: (s: string) => void;
     handleCommand: (c: string) => void;
     commandHistory: string[];
     passwordMode: boolean;
     navigateHistory: (direction: "up" | "down") => void;
     autocomplete: () => void;
}) {
     const scrollRef = useRef<HTMLDivElement>(null);

     // Auto-scroll to bottom when new output is added
     useEffect(() => {
          if (scrollRef.current) {
               scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          }
     }, [commandHistory]);

     return (
          <section id="console" className="grid grid-cols-1 md:grid-cols-12 gap-4">

               {/* TERMINAL WIDGET */}
               <motion.article
                    id="console-terminal"
                    whileHover={{ y: -4 }}
                    className="col-span-12 md:col-span-7 lg:col-span-8 glass relative overflow-hidden rounded-3xl p-5 font-mono text-sm flex flex-col min-h-[340px]"
                    onMouseEnter={playHover}
                    aria-label="Interactive terminal emulator"
               >
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-300">
                         <span className="flex items-center gap-2">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                              terminal
                         </span>
                         <Terminal size={14} className="text-slate-400" />
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-emerald-100 shadow-inner overflow-hidden flex flex-col">
                         {/* Terminal output */}
                         <div
                              ref={scrollRef}
                              className="flex-1 flex flex-col gap-0.5 overflow-y-auto scrollbar-hide"
                              role="log"
                              aria-live="polite"
                              aria-label="Terminal output"
                         >
                              {commandHistory.map((line, idx) => {
                                   // Determine line styling based on content
                                   let lineClass = "text-xs leading-relaxed break-all text-emerald-100/80";

                                   if (line.startsWith("MOHAMMED@")) {
                                        lineClass = "text-xs leading-relaxed break-all text-emerald-300 font-semibold";
                                   } else if (line.startsWith("────")) {
                                        lineClass = "text-xs leading-relaxed text-emerald-500/30";
                                   } else if (line.startsWith("[SYSTEM READY]")) {
                                        lineClass = "text-xs leading-relaxed text-emerald-400/70";
                                   } else if (line.startsWith("user@") || line.startsWith("root@")) {
                                        lineClass = "text-xs leading-relaxed break-all text-emerald-200/90";
                                   } else if (line.startsWith("→")) {
                                        lineClass = "text-xs leading-relaxed text-emerald-100/60 pl-2";
                                   } else if (
                                        line === "FOCUS" ||
                                        line === "FEATURED PROJECTS" ||
                                        line === "LANGUAGES" ||
                                        line === "FULL-STACK" ||
                                        line === "SECURITY" ||
                                        line === "AI" ||
                                        line === "CERTIFICATIONS"
                                   ) {
                                        lineClass = "text-xs leading-relaxed text-emerald-300/90 font-medium";
                                   } else if (line.startsWith("[ IN PROGRESS ]")) {
                                        lineClass = "text-xs leading-relaxed text-amber-400/80";
                                   } else if (line === "") {
                                        return <div key={idx} className="h-1.5" />;
                                   }

                                   return (
                                        <div key={idx} className={lineClass}>
                                             {line}
                                        </div>
                                   );
                              })}
                         </div>

                         {/* Command input */}
                         <div className="flex items-center gap-2 text-xs text-emerald-100 mt-2 pt-2 border-t border-white/5 shrink-0">
                              <span className="text-emerald-400 animate-pulse" role="status" aria-label="Terminal prompt">{">"}</span>
                              <input
                                   value={commandInput}
                                   type={passwordMode ? "password" : "text"}
                                   onChange={(e) => setCommandInput(e.target.value)}
                                   onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                             e.preventDefault();
                                             handleCommand(commandInput);
                                        } else if (e.key === "ArrowUp") {
                                             e.preventDefault();
                                             navigateHistory("up");
                                        } else if (e.key === "ArrowDown") {
                                             e.preventDefault();
                                             navigateHistory("down");
                                        } else if (e.key === "Tab") {
                                             e.preventDefault();
                                             autocomplete();
                                        }
                                   }}
                                   className="w-full bg-transparent text-emerald-100 outline-none placeholder:text-emerald-700"
                                   placeholder={passwordMode ? "password..." : "type a command..."}
                                   autoComplete="off"
                                   aria-label="terminal input"
                              />
                         </div>

                         {/* Quick-command chips */}
                         <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-white/5 shrink-0">
                              {QUICK_COMMANDS.map((cmd) => (
                                   <button
                                        key={cmd}
                                        onClick={() => handleCommand(cmd)}
                                        className="text-[10px] text-emerald-400/50 hover:text-emerald-300 border border-emerald-500/15 hover:border-emerald-400/40 rounded px-2 py-0.5 transition-colors font-mono focus:outline-none focus:ring-1 focus:ring-emerald-400/30"
                                        aria-label={`Run ${cmd} command`}
                                   >
                                        [ {cmd} ]
                                   </button>
                              ))}
                         </div>
                    </div>
               </motion.article>

               {/* PROFILE PHOTO WIDGET */}
               <motion.article
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="col-span-12 md:col-span-5 lg:col-span-4 aspect-square max-w-[380px] w-full mx-auto md:mx-0 glass relative overflow-hidden rounded-3xl p-0 photo-verify"
                    onMouseEnter={playHover}
               >
                    <div className="relative h-full w-full">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_35%)]" />
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_35%)]" />
                         <Image
                              src="/profile-bw.png"
                              alt="Mohammed El Ahmar"
                              fill
                              sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                              quality={95}
                              className="object-cover opacity-90 transition duration-300 hover:opacity-100 grayscale hover:grayscale-0"
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
          </section>
     );
}
