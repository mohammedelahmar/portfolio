"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
     ArrowLeft,
     ArrowUpRight,
     BarChart3,
     Bot,
     Ghost,
     ShieldCheck,
     UserX,
     Users,
     Search,
     Zap,
     Github,
} from "lucide-react";

export default function ClientPage() {
     const jsonLd = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "InstaTrack",
          operatingSystem: "Windows, Mac, Linux",
          applicationCategory: "SocialNetworkingApplication",
          offers: {
               "@type": "Offer",
               price: "0",
               priceCurrency: "USD",
          },
          description:
               "A self-hosted Instagram analytics dashboard that detects ghost followers, visualizes network graphs, and tracks engagement privacy.",
          author: {
               "@type": "Person",
               name: "Mohammed El Ahmar",
               url: "https://elahmar.dev",
          },
          image: "https://elahmar.dev/projects/instatrack/dashboard_full.png",
     };

     const fadeInUp = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
     };

     return (
          <div className="min-h-screen bg-[#020617] text-slate-100 scanlines relative overflow-x-hidden">
               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
               />

               {/* Dynamic Background - MOBILE OPTIMIZED */}
               <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {/* 1. Green Glow (Top Left) - Visible on Mobile (Safe Blur) */}
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[60px] md:blur-[120px]" />

                    {/* 2. Purple Glow (Bottom Right) - Visible on Mobile (Safe Blur) */}
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-violet-600/10 rounded-full blur-[60px] md:blur-[120px]" />

                    {/* 3. The Noise Texture - HIDDEN ON MOBILE (This stops the crash) */}
                    <div className="noise hidden md:block" />
               </div>

               <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
                    <Link
                         href="/"
                         className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors group"
                    >
                         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                         BACK_TO_HQ
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500">
                         <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                         System Online
                    </div>
               </nav>

               <main className="relative z-10 px-6 pb-24 md:px-12 max-w-7xl mx-auto space-y-24">
                    {/* Hero Section */}
                    <section className="pt-8 md:pt-16">
                         <motion.div
                              initial="initial"
                              animate="animate"
                              variants={fadeInUp}
                              className="max-w-4xl"
                         >
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
                                   <Zap size={14} />
                                   V1.0 Stable Release
                              </div>
                              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 leading-tight mb-6">
                                   Audience intelligence, <br />
                                   <span className="text-emerald-400">unfiltered.</span>
                              </h1>
                              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                   InstaTrack is a self-hosted analytics engine that bridges the gap between raw data and actionable insights. Use ghost detection to clean your network and AI to query your growth.
                              </p>

                              <div className="mt-8 flex gap-4">
                                   <a
                                        href="https://github.com/mohammedelahmar/InstaTrack"
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-emerald-400 transition-colors"
                                   >
                                        <Github size={20} /> View Source Code
                                   </a>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 40, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.8 }}
                              className="mt-16 relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(16,185,129,0.15)] group"
                         >
                              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-60" />
                              <Image
                                   src="/projects/instatrack/dashboard_full.png"
                                   alt="InstaTrack Dashboard"
                                   width={1920}
                                   height={1176}
                                   priority
                                   quality={90}
                                   placeholder="blur"
                                   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px"
                                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                              />
                         </motion.div>
                    </section>

                    {/* Features Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="col-span-1 md:col-span-3 mb-8">
                              <h2 className="text-3xl font-semibold text-slate-100 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                   Core Modules
                              </h2>
                         </div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="glass p-8 rounded-3xl"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6 border border-red-500/20">
                                   <Ghost className="text-red-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">Ghost Hunter</h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Identifies dormant accounts that harm engagement rates by cross-referencing liked posts and comments against your follower list.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="glass p-8 rounded-3xl"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 border border-emerald-500/20">
                                   <UserX className="text-emerald-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">Unfollow Tracking</h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Daily diffing engine automatically compares follower snapshots to detect exactly who unfollowed you and when.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className="glass p-8 rounded-3xl"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-6 border border-blue-500/20">
                                   <Bot className="text-blue-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">Gemini AI Assistant</h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Ask natural language questions like "Who are my new followers this week?" and get data-backed answers instantly.
                              </p>
                         </motion.div>
                    </section>

                    {/* Detailed Visuals */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="glass rounded-3xl overflow-hidden border border-white/10"
                         >
                              <div className="p-8 border-b border-white/5">
                                   <h3 className="text-xl font-semibold text-slate-100 mb-1">Deep Analytics</h3>
                                   <p className="text-slate-400 text-sm">Interactive charts for growth velocity.</p>
                              </div>
                              <div className="relative h-64 md:h-80 w-full bg-slate-900/50">
                                   <Image
                                        src="/projects/instatrack/dashboard_graphs.png"
                                        alt="Analytics Graphs"
                                        fill
                                        className="object-cover"
                                   />
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="glass rounded-3xl overflow-hidden border border-white/10"
                         >
                              <div className="p-8 border-b border-white/5">
                                   <h3 className="text-xl font-semibold text-slate-100 mb-1">AI Integration</h3>
                                   <p className="text-slate-400 text-sm">Context-aware insights powered by Gemini.</p>
                              </div>
                              <div className="relative h-64 md:h-80 w-full bg-slate-900/50">
                                   <Image
                                        src="/projects/instatrack/dashboard_geminiAssistant.png"
                                        alt="AI Assistant"
                                        fill
                                        className="object-cover object-top"
                                   />
                              </div>
                         </motion.div>
                    </section>

                    {/* Tech Stack */}
                    <section className="py-12 border-t border-white/5">
                         <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">Engineering Architecture</h2>
                         <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                              {["Python 3.10", "Flask", "MongoDB", "Docker", "Instagrapi", "Chart.js", "Redis"].map((tech, i) => (
                                   <div key={tech} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono text-sm hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default">
                                        {tech}
                                   </div>
                              ))}
                         </div>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center py-16">
                         <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-violet-600">
                              <div className="px-10 py-4 rounded-full bg-[#020617] relative group overflow-hidden">
                                   <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                   <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 font-semibold tracking-wide">
                                        PROJECT STATUS: PRIVATE BETA
                                   </span>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
}
