"use client";

import { Cpu, Terminal } from "lucide-react";
import React, { useMemo } from "react";
import { techStack } from "@/app/data";

export default function Stack() {
     const loopedStack = useMemo(() => [...techStack, ...techStack], []);

     return (
          <section id="stack" className="glass relative overflow-hidden rounded-3xl p-8">
               <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                         <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Signal chain</p>
                         <h2 className="mt-2 text-3xl font-semibold text-slate-50">Tech rail: always in motion.</h2>
                         <p className="mt-2 max-w-xl text-slate-300/90">
                              A kinetic ticker of the tools I ship with. Everything is battle-tested for DX,
                              resilience, and velocity.
                         </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                         <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                              <Cpu size={16} className="text-emerald-400" />
                              Edge-native
                         </div>
                         <div className="flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                              <Terminal size={16} className="text-violet-400" />
                              Automation heavy
                         </div>
                    </div>
               </div>

               <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60">
                    <div className="marquee-track">
                         {loopedStack.map((item, idx) => (
                              <div
                                   key={`${item}-${idx}`}
                                   className="m-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                              >
                                   <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
                                   {item}
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
