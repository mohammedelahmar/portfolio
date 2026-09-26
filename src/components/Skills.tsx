"use client";

import { motion } from "framer-motion";
import { Layers, Shield, Terminal, Server, Database, Monitor, Brain, Network } from "lucide-react";
import React from "react";
import { technicalFocus } from "@/app/data";

const iconMap: Record<string, React.ReactNode> = {
     layers: <Layers size={20} />,
     shield: <Shield size={20} />,
     terminal: <Terminal size={20} />,
     server: <Server size={20} />,
     database: <Database size={20} />,
     monitor: <Monitor size={20} />,
     brain: <Brain size={20} />,
     network: <Network size={20} />,
};

export default function Skills() {
     return (
          <section id="skills" className="space-y-6">
               <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                    Technical Focus
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {technicalFocus.map((item, idx) => (
                         <motion.div
                              key={item.area}
                              initial={{ opacity: 0, y: 16 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              className="glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center hover:border-violet-500/30 transition-colors group"
                         >
                              <div className="text-emerald-400 group-hover:text-violet-400 transition-colors">
                                   {iconMap[item.icon]}
                              </div>
                              <span className="text-sm font-medium text-slate-200">
                                   {item.area}
                              </span>
                         </motion.div>
                    ))}
               </div>
          </section>
     );
}
