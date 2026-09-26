"use client";

import { motion } from "framer-motion";
import { BookOpen, Shield, Brain, Wrench } from "lucide-react";
import React from "react";
import { currentlyLearning } from "@/app/data";

const categoryIcons: Record<string, React.ReactNode> = {
     "Cybersecurity": <Shield size={18} className="text-emerald-400" />,
     "Artificial Intelligence": <Brain size={18} className="text-violet-400" />,
     "Engineering": <Wrench size={18} className="text-cyan-400" />,
};

export default function CurrentlyLearning() {
     return (
          <section id="learning" className="space-y-6">
               <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                    Currently Exploring
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentlyLearning.map((group, idx) => (
                         <motion.div
                              key={group.category}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="glass rounded-3xl p-6 space-y-4 hover:border-white/15 transition-colors"
                         >
                              <div className="flex items-center gap-3">
                                   {categoryIcons[group.category]}
                                   <h3 className="text-lg font-semibold text-slate-100">{group.category}</h3>
                              </div>
                              <div className="space-y-2">
                                   {group.items.map((item) => (
                                        <div
                                             key={item}
                                             className="flex items-center gap-2 text-sm text-slate-300/80"
                                        >
                                             <span className="h-1 w-1 rounded-full bg-slate-500" />
                                             {item}
                                        </div>
                                   ))}
                              </div>
                         </motion.div>
                    ))}
               </div>
          </section>
     );
}
