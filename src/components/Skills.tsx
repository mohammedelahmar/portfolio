"use client";

import { motion } from "framer-motion";
import React from "react";
import { skillsData } from "@/app/data";

export default function Skills() {
     return (
          <section id="skills" className="glass relative overflow-hidden rounded-3xl p-8">
               <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300 mb-6">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                    Skill Proficiency
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {skillsData.map((skill, idx) => {
                         const percentage = (skill.A / skill.fullMark) * 100;
                         return (
                              <div key={skill.subject} className="space-y-2">
                                   <div className="flex justify-between text-sm">
                                        <span className="text-slate-200 font-medium">{skill.subject}</span>
                                        <span className="text-emerald-400 font-mono text-xs">{Math.round(percentage)}%</span>
                                   </div>
                                   <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden">
                                        <motion.div
                                             initial={{ width: 0 }}
                                             whileInView={{ width: `${percentage}%` }}
                                             viewport={{ once: true }}
                                             transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                                             className="h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full"
                                        />
                                   </div>
                              </div>
                         );
                    })}
               </div>
          </section>
     );
}
