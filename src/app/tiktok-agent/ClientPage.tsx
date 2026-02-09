"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
     ArrowLeft,
     Bot,
     Scissors,
     Smartphone,
     Zap,
     LayoutGrid,
     History,
     Terminal,
     Layers,
     Cpu,
     RefreshCw,
     Eye,
     Github,
     Film,
     Download,
     X,
     Play
} from "lucide-react";

export default function ClientPage() {
     const [isDemoOpen, setIsDemoOpen] = useState(false);

     const jsonLd = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TikTok Agent",
          operatingSystem: "Windows, Mac, Linux",
          applicationCategory: "VideoEditingApplication",
          offers: {
               "@type": "Offer",
               price: "0",
               priceCurrency: "USD",
          },
          description:
               "Advanced AI-powered tool that automatically extracts viral-worthy clips from long-form videos and formats them for TikTok, YouTube Shorts, and Instagram Reels.",
          author: {
               "@type": "Person",
               name: "Mohammed El Ahmar", // Using consistent author name from other files
               url: "https://elahmar.dev",
          },
          image: "/projects/TiktokAgent/HomePage.png",
     };

     const fadeInUp = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
     };

     const stagger = {
          animate: {
               transition: {
                    staggerChildren: 0.1,
               },
          },
     };

     return (
          <div className="min-h-screen bg-[#050505] text-slate-100 scanlines relative overflow-x-hidden selection:bg-purple-500/30">
               <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
               />

               {/* Dynamic Background - Cyberpunk Feel */}
               <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {/* Purple/Pink Glow (Top Right) */}
                    <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/10 rounded-full blur-[120px]" />

                    {/* Cyan/Blue Glow (Bottom Left) */}
                    <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-600/10 rounded-full blur-[120px]" />

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
               </div>

               <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
                    <Link
                         href="/"
                         className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-purple-400 transition-colors group"
                    >
                         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                         BACK_TO_HQ
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500">
                         <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]" />
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
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-mono uppercase tracking-widest mb-6">
                                   <Zap size={14} />
                                   AI Viral Engine V1.0
                              </div>
                              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 leading-tight mb-6">
                                   Automated Viral <br />
                                   <span className="text-purple-500">Clip Extraction.</span>
                              </h1>
                              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                   Transform long-form content into engaging short-form videos instantly. Features standard-defying AI motion analysis, smart framing, and a cyberpunk glass UI.
                              </p>

                              <div className="mt-8 flex gap-4">
                                   <a
                                        href="https://github.com/mohammedelahmar/tiktok-agent"
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-purple-400 hover:text-white transition-colors"
                                   >
                                        <Github size={20} /> View Repository
                                   </a>
                                   <button
                                        onClick={() => setIsDemoOpen(true)}
                                        className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-colors text-slate-300 group"
                                   >
                                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center group-hover:bg-purple-400 transition-colors">
                                             <Play size={12} className="fill-white text-white ml-0.5" />
                                        </div>
                                        Watch Generated Output
                                   </button>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 40, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.8 }}
                              className="mt-16 relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(168,85,247,0.15)] group"
                         >
                              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60" />
                              <Image
                                   src="/projects/TiktokAgent/HomePage.png" // Updated path
                                   alt="TikTok Agent Dashboard"
                                   width={1920}
                                   height={1080}
                                   priority
                                   quality={90}
                                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                              />
                              {/* Play Button Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                   <button
                                        onClick={() => setIsDemoOpen(true)}
                                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 hover:scale-110 group/play"
                                   >
                                        <Play size={32} className="fill-white text-white ml-1" />
                                   </button>
                              </div>
                         </motion.div>
                    </section>

                    {/* Features Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="col-span-1 md:col-span-3 mb-8">
                              <h2 className="text-3xl font-semibold text-slate-100 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-purple-500 rounded-full" />
                                   Core Capabilities
                              </h2>
                         </div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-colors"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 border border-purple-500/20">
                                   <Bot className="text-purple-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">AI Viral & Face Detection</h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Combines <strong>MediaPipe</strong> and <strong>OpenCV</strong> for precise face detection with motion scoring to identify 99% of viral moments automatically.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-500/20">
                                   <Smartphone className="text-cyan-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">Smart Reformatting</h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Intelligent 9:16 cropping or blurred background fill. Maintains context while optimizing for mobile screens.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 border border-emerald-500/20">
                                   <LayoutGrid className="text-emerald-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">Neon Glass UI</h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Premium "Dark Mode Glassmorphism" interface with bento-grid layouts and smooth micro-interactions.
                              </p>
                         </motion.div>
                    </section>

                    {/* Detailed Application Screenshots */}
                    <section className="space-y-32">
                         {/* Feature 1: Processing */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                              >
                                   <Image
                                        src="/projects/TiktokAgent/Processing.png"
                                        alt="AI Processing"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                   />
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="order-1 lg:order-2"
                              >
                                   <div className="flex items-center gap-3 mb-4 text-purple-400 font-mono text-sm uppercase tracking-wider">
                                        <Layers size={16} />
                                        <span className="text-purple-400">Workflow</span>
                                   </div>
                                   <h3 className="text-3xl font-bold text-slate-100 mb-6">Input & Configure</h3>
                                   <p className="text-slate-400 mb-6 leading-relaxed">
                                        Simply paste a YouTube URL or upload a local file. Configure clip count, duration target, and visual style (Crop vs Blur).
                                        Supports Gemini API for automatic SEO metadata generation including titles and hashtags.
                                   </p>
                                   <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                             YouTube & Local File Support
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                             AI Metadata Generation (SEO)
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                             Custom Watermarking
                                        </li>
                                   </ul>
                              </motion.div>
                         </div>

                         {/* Feature 2: Review & Edit */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                              >
                                   <div className="flex items-center gap-3 mb-4 text-cyan-400 font-mono text-sm uppercase tracking-wider">
                                        <Scissors size={16} />
                                        <span className="text-cyan-400">Precision Editing</span>
                                   </div>
                                   <h3 className="text-3xl font-bold text-slate-100 mb-6">Trimmer & Candidates</h3>
                                   <p className="text-slate-400 mb-6 leading-relaxed">
                                        Review AI-selected candidates in a dedicated trimming interface.
                                        Fine-tune start/end times with frame-perfect precision before rendering.
                                        See the "Virality Score" for every suggested clip.
                                   </p>
                                   <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                             Frame-Perfect Scrubber
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                             Real-time Preview
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                             Batch Rendering
                                        </li>
                                   </ul>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                              >
                                   <Image
                                        src="/projects/TiktokAgent/ReviewCandidates.png"
                                        alt="Trimmer Interface"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                   />
                              </motion.div>
                         </div>

                         {/* Feature 3: History */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                              >
                                   <Image
                                        src="/projects/TiktokAgent/History.png"
                                        alt="Job History"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                   />
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="order-1 lg:order-2"
                              >
                                   <div className="flex items-center gap-3 mb-4 text-emerald-400 font-mono text-sm uppercase tracking-wider">
                                        <History size={16} />
                                        <span className="text-emerald-400">Persistence</span>
                                   </div>
                                   <h3 className="text-3xl font-bold text-slate-100 mb-6">History & Recovery</h3>
                                   <p className="text-slate-400 mb-6 leading-relaxed">
                                        Never lose your work. The system automatically saves job progress to a local JSON database.
                                        Resume past jobs, view completed renders, or retry failed attempts from a centralized dashboard.
                                   </p>
                                   <ul className="space-y-3 text-slate-300">
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                             Auto-Save Capabilities
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                             Crash Recovery
                                        </li>
                                   </ul>
                              </motion.div>
                         </div>
                    </section>

                    {/* Technical Architecture & CLI */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="glass p-8 rounded-3xl border border-white/10"
                         >
                              <div className="flex items-center gap-3 mb-6">
                                   <Terminal className="text-slate-400" />
                                   <h3 className="text-xl font-semibold text-slate-100">CLI Automation</h3>
                              </div>
                              <div className="bg-[#0a0a0a] rounded-xl p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-white/5">
                                   <p className="comment text-slate-500"># Process a YouTube video</p>
                                   <p className="mb-4">
                                        <span className="text-purple-400">python</span> main.py --youtube https://youtu.be/VIDEO_ID
                                   </p>

                                   <p className="comment text-slate-500"># Process local file with blur format</p>
                                   <p>
                                        <span className="text-purple-400">python</span> main.py --file video.mp4 --format blur
                                   </p>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className="glass p-8 rounded-3xl border border-white/10"
                         >
                              <div className="flex items-center gap-3 mb-6">
                                   <Cpu className="text-slate-400" />
                                   <h3 className="text-xl font-semibold text-slate-100">Architecture</h3>
                              </div>
                              <ul className="space-y-4 text-sm text-slate-300">
                                   <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-500">Backend</span>
                                        <span className="font-mono">Python, FastAPI, OpenCV</span>
                                   </li>
                                   <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-500">Frontend</span>
                                        <span className="font-mono">React 18, Vite, Tailwind</span>
                                   </li>
                                   <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-500">AI Models</span>
                                        <span className="font-mono">MediaPipe, PyTorch, Gemini</span>
                                   </li>
                                   <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-slate-500">Media Processing</span>
                                        <span className="font-mono">FFmpeg, MoviePy</span>
                                   </li>
                              </ul>
                         </motion.div>
                    </section>


                    {/* Tech Stack Chips */}
                    <section className="py-12 border-t border-white/5">
                         <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">Built With</h2>
                         <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                              {["Python", "FastAPI", "React", "OpenCV", "PyTorch", "Tailwind CSS", "FFmpeg", "Google Gemini"].map((tech) => (
                                   <div key={tech} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono text-sm hover:border-purple-500/30 hover:text-purple-300 transition-colors cursor-default">
                                        {tech}
                                   </div>
                              ))}
                         </div>
                    </section>
               </main>

               {/* Demo Video Modal */}
               <AnimatePresence>
                    {isDemoOpen && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6 overflow-hidden" // Changed to flex center to ensure vertical centering
                              onClick={() => setIsDemoOpen(false)}
                         >
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                   animate={{ opacity: 1, scale: 1, y: 0 }}
                                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                   onClick={(e) => e.stopPropagation()}
                                   className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10" // Constrained width and aspect ratio for vertical video
                              >
                                   <button
                                        onClick={() => setIsDemoOpen(false)}
                                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                                   >
                                        <X size={20} />
                                   </button>

                                   <div className="w-full h-full">
                                        <iframe
                                             src="https://player.cloudinary.com/embed/?cloud_name=dd4xwdilm&public_id=a340153e-29e4-4a12-a70e-d95ec51e6656_Little_Dark_Age_AMV_Monster_l8SrEka7cJM_20260204-230143_clip_20260204-230443_9x16_crop_hute2e&autoplay=true&loop=true"
                                             className="w-full h-full"
                                             allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                             allowFullScreen
                                             frameBorder="0"
                                        ></iframe>
                                   </div>
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>
          </div>
     );
}
