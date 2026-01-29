"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Terminal } from "lucide-react";
import Image from "next/image";
import React from "react";

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
     return (
          <section id="console" className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px]">

               {/* TERMINAL WIDGET */}
               <motion.article
                    id="console-terminal"
                    whileHover={{ y: -4 }}
                    className="col-span-12 md:col-span-6 lg:col-span-4 glass relative overflow-hidden rounded-3xl p-5 font-mono text-sm flex flex-col"
                    onMouseEnter={playHover}
               >
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-300">
                         <span className="flex items-center gap-2">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                              terminal
                         </span>
                         <Terminal size={14} className="text-slate-400" />
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-emerald-100 shadow-inner overflow-hidden flex flex-col">
                         <div className="flex-1 flex flex-col justify-end gap-1 overflow-y-auto scrollbar-hide">
                              {commandHistory.slice(-6).map((line, idx) => (
                                   <div key={`${line}-${idx}`} className="text-xs text-emerald-100/90 break-all">
                                        {line}
                                   </div>
                              ))}
                              <div className="flex items-center gap-2 text-xs text-emerald-100 mt-1">
                                   <span className="text-emerald-400">{">"}</span>
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
                                        placeholder={passwordMode ? "password..." : "type a command (help)"}
                                        autoComplete="off"
                                        aria-label="terminal input"
                                   />
                              </div>
                         </div>
                    </div>
               </motion.article>

               {/* CERTIFICATION WIDGET */}
               <motion.article
                    whileHover={{ y: -4 }}
                    className="col-span-12 md:col-span-6 lg:col-span-3 glass relative overflow-hidden rounded-3xl p-5 flex flex-col justify-between"
                    onMouseEnter={playHover}
               >
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-slate-300">
                         <span className="flex items-center gap-2">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                              certification
                         </span>
                         <ShieldCheck size={14} className="text-amber-300" />
                    </div>
                    <div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 flex-1">
                         <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">prep</div>
                         <div className="text-lg font-semibold">Certified Ethical Hacker</div>
                         <div className="text-xs text-slate-300 mt-auto">focus: spring security · network defense · blue team drills</div>
                    </div>
               </motion.article>

               {/* PROFILE PHOTO WIDGET */}
               <motion.article
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="col-span-12 lg:col-span-5 glass relative overflow-hidden rounded-3xl p-0 photo-verify min-h-[220px]"
                    onMouseEnter={playHover}
               >
                    <div className="relative h-full w-full">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_35%)]" />
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_35%)]" />
                         {/* Using a solid color placeholder if image fails, but sticking to design */}
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
          </section>
     );
}
