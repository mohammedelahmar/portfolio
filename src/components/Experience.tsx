"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import React from "react";
import { experience } from "@/app/data";

export default function Experience() {
     return (
          <section id="experience" className="space-y-6">
               <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                    Experience Log
               </div>

               <div className="relative border-l border-slate-800/50 ml-3 space-y-8 pl-8 py-2">
                    {experience.map((job, idx) => (
                         <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="relative"
                         >
                              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center">
                                   <div className="h-2 w-2 rounded-full bg-emerald-500" />
                              </div>

                              <div className="glass rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                                   <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
                                        <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                             {job.period}
                                        </span>
                                   </div>
                                   <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                                        <Briefcase size={14} />
                                        {job.company}
                                   </div>
                                   <p className="text-slate-300/90 text-sm leading-relaxed mb-4">
                                        {job.description}
                                   </p>
                                   <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill) => (
                                             <span key={skill} className="text-xs border border-white/5 bg-white/5 px-2 py-1 rounded-md text-slate-300">
                                                  {skill}
                                             </span>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>
                    ))}
               </div>
          </section>
     );
}
