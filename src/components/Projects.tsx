"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, PanelsTopLeft } from "lucide-react";
import React, { useState } from "react";
import { Project, projects } from "@/app/data";

export default function Projects({
     playHover,
}: {
     playHover: () => void;
}) {
     const [selectedProject, setSelectedProject] = useState<Project | null>(null);

     // Close modal on Escape
     React.useEffect(() => {
          const handleEsc = (e: KeyboardEvent) => {
               if (e.key === "Escape") setSelectedProject(null);
          };
          window.addEventListener("keydown", handleEsc);
          return () => window.removeEventListener("keydown", handleEsc);
     }, []);

     return (
          <section id="projects" className="space-y-6">
               <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                    Projects Grid
               </div>

               {/* Simplified Grid: Responsive 1 cols -> 2 cols -> 3 cols */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                    {projects.map((project, idx) => {
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
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: idx * 0.1 }}
                                   whileHover={{ y: -6, scale: 1.02 }}
                                   onMouseEnter={playHover}
                                   onClick={() => setSelectedProject(project)}
                                   className="glass relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-6 group"
                                   style={
                                        project.image
                                             ? {
                                                  backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.7), rgba(2,6,23,0.95)), url(${project.image})`,
                                                  backgroundSize: "cover",
                                                  backgroundPosition: "center",
                                             }
                                             : undefined
                                   }
                              >
                                   <div className="flex items-center justify-between text-sm text-slate-300 relative z-10">
                                        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]">
                                             <span
                                                  className={`h-2 w-2 rounded-full ${accentDot} shadow-[0_0_12px_rgba(124,58,237,0.6)] animate-pulse`}
                                             />
                                             {project.badge}
                                        </span>
                                        <PanelsTopLeft size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                                   </div>

                                   <div className="relative z-10">
                                        <h3 className={`glitch-title text-2xl font-semibold text-slate-50 ${accentText} group-hover:scale-[1.01] transition-transform`}>
                                             {project.title}
                                        </h3>
                                        <p className="mt-3 text-sm text-slate-300/80 line-clamp-2 leading-relaxed">
                                             {project.description}
                                        </p>
                                   </div>

                                   <div className="flex items-center justify-between text-sm text-slate-200 relative z-10 pt-4 border-t border-white/5 mt-4">
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wide opacity-80">
                                             {project.detail.split("·")[0]} {/* First tag only for cleanliness */}
                                        </span>
                                        <div className="flex items-center gap-1 text-emerald-200/90 group-hover:text-emerald-400 transition-colors">
                                             <span className="text-xs font-semibold">ACCESS</span>
                                             <ArrowUpRight size={14} />
                                        </div>
                                   </div>

                                   <div
                                        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${accentLight} via-transparent to-slate-900`}
                                   />
                                   <div className="pointer-events-none absolute inset-0 border border-white/5 rounded-3xl group-hover:border-white/20 transition-colors" />
                              </motion.article>
                         );
                    })}
               </div>

               <AnimatePresence>
                    {selectedProject && (
                         <motion.div
                              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setSelectedProject(null)}
                         >
                              <motion.div
                                   initial={{ scale: 0.95, opacity: 0 }}
                                   animate={{ scale: 1, opacity: 1 }}
                                   exit={{ scale: 0.95, opacity: 0 }}
                                   onClick={(e) => e.stopPropagation()}
                                   className="glass relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 p-8 text-slate-100 shadow-2xl"
                              >
                                   <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200 hover:border-violet-400/60 hover:text-white transition-colors"
                                   >
                                        close
                                   </button>

                                   <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-300 mb-6">
                                        <span className={`h-2 w-2 rounded-full animate-pulse ${selectedProject.accent === "purple" ? "bg-violet-400" :
                                                  selectedProject.accent === "green" ? "bg-emerald-400" :
                                                       selectedProject.accent === "blue" ? "bg-sky-400" : "bg-rose-400"
                                             }`} />
                                        {selectedProject.badge}
                                   </div>

                                   <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
                                        {selectedProject.title}
                                   </h3>

                                   <p className="text-lg text-slate-300/90 leading-relaxed mb-8">
                                        {selectedProject.description}
                                   </p>

                                   {selectedProject.image && (
                                        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8 border border-white/10">
                                             <div
                                                  className="absolute inset-0 bg-cover bg-center"
                                                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                                             />
                                        </div>
                                   )}

                                   <div className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-200 mb-8">
                                        <div className="flex items-center justify-between">
                                             <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                                                  system status
                                             </span>
                                             <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200">
                                                  online
                                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                             </span>
                                        </div>
                                        <div className="h-[1px] w-full bg-white/5" />
                                        <div className="flex flex-wrap gap-2">
                                             {selectedProject.detail.split("·").map((tag, i) => (
                                                  <span key={i} className="text-xs border border-white/10 bg-white/5 px-2 py-1 rounded text-slate-300 font-mono">
                                                       {tag.trim()}
                                                  </span>
                                             ))}
                                        </div>
                                   </div>

                                   {selectedProject.url && (
                                        <div className="flex justify-end">
                                             <a
                                                  href={selectedProject.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-8 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/20 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                             >
                                                  Initialize Full Briefing <ArrowUpRight size={16} />
                                             </a>
                                        </div>
                                   )}
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </section>
     );
}
