"use client";

import React from "react";
import { techStackFoundation, techStackGrowing } from "@/app/data";

export default function Stack() {
     return (
          <section id="stack" className="glass relative overflow-hidden rounded-3xl p-8 space-y-8">
               <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Technical Stack</p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-50">Tools & Technologies</h2>
                    <p className="mt-2 max-w-xl text-slate-300/90">
                         Technologies I build with — organized by depth of experience.
                    </p>
               </div>

               {/* Strong Foundation */}
               <div className="space-y-4">
                    <div className="flex items-center gap-3">
                         <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                         <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">Strong Foundation</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                         {techStackFoundation.map((tech) => (
                              <div
                                   key={tech}
                                   className="flex items-center gap-2 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 px-4 py-2.5 text-sm text-slate-100 hover:border-emerald-400/40 transition-colors"
                              >
                                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                   {tech}
                              </div>
                         ))}
                    </div>
               </div>

               {/* Growing / Specialization */}
               <div className="space-y-4">
                    <div className="flex items-center gap-3">
                         <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                         <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300">Growing / Specialization</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                         {techStackGrowing.map((tech) => (
                              <div
                                   key={tech}
                                   className="flex items-center gap-2 rounded-2xl border border-violet-500/15 bg-violet-500/5 px-4 py-2.5 text-sm text-slate-100 hover:border-violet-400/40 transition-colors"
                              >
                                   <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                   {tech}
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
