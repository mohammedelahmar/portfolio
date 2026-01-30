"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
     ArrowLeft,
     Banknote,
     BarChart3,
     Camera,
     CreditCard,
     Github,
     Globe,
     Layers,
     PieChart,
     Receipt,
     ShieldCheck,
     Target,
     Wallet,
     Zap,
} from "lucide-react";

export default function ClientPage() {
     const jsonLd = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ExpenseTracker",
          operatingSystem: "Web",
          applicationCategory: "FinanceApplication",
          offers: {
               "@type": "Offer",
               price: "0",
               priceCurrency: "USD",
          },
          description:
               "A comprehensive personal finance management tool allowing users to track expenses, categorize spending, monitor subscriptions, set financial goals, and digitize receipts using OCR technology.",
          author: {
               "@type": "Person",
               name: "Mohammed El Ahmar",
               url: "https://elahmar.dev",
          },
          image: "https://elahmar.dev/projects/ExpenseTracker/Dashboard.png",
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

               {/* Dynamic Background */}
               <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {/* 1. Green Glow (Top Left) */}
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[60px] md:blur-[120px]" />

                    {/* 2. Red Glow (Bottom Right) - for Expenses */}
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-600/10 rounded-full blur-[60px] md:blur-[120px]" />

                    {/* 3. The Noise Texture */}
                    <div className="noise hidden md:block" />
               </div>

               <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
                    <Link
                         href="/"
                         className="flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-emerald-400 transition-colors group"
                    >
                         <ArrowLeft
                              size={16}
                              className="group-hover:-translate-x-1 transition-transform"
                         />
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
                                   Full-Stack Finance OS
                              </div>
                              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 leading-tight mb-6">
                                   Master your money, <br />
                                   <span className="text-emerald-400">effortlessly.</span>
                              </h1>
                              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                   A comprehensive financial management system integrating OCR
                                   technology to automatically scan receipts, track subscriptions,
                                   and visualize spending habits—all in one secure dashboard.
                              </p>

                              <div className="mt-8 flex gap-4">
                                   <a
                                        href="https://github.com/mohammedelahmar/expense-tracker"
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
                                   src="/projects/ExpenseTracker/WelcomePage.png"
                                   alt="ExpenseTracker Welcome Page"
                                   width={1920}
                                   height={1080}
                                   priority
                                   quality={90}
                                   placeholder="blur"
                                   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px"
                                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                              />
                         </motion.div>
                    </section>

                    {/* Overview & Architecture */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                         <div>
                              <h2 className="text-3xl font-semibold text-slate-100 mb-6 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                   Project Identity
                              </h2>
                              <div className="prose prose-invert text-slate-400 leading-relaxed">
                                   <p className="mb-4">
                                        ExpenseTracker is a robust Monorepo web application designed to
                                        take the pain out of personal finance. Built with the MERN stack
                                        and modern tooling, it offers a seamless experience for tracking
                                        daily expenses and planning for the future.
                                   </p>
                                   <p>
                                        The problem it solves is fragmentation: instead of using separate
                                        apps for budgeting, receipt storage, and goal tracking,
                                        ExpenseTracker unifies them. It features an advanced OCR engine
                                        powered by Tesseract.js that allows users to simply snap a photo
                                        of a receipt and have the data automatically extracted and
                                        logged.
                                   </p>
                              </div>
                         </div>
                         <div className="glass p-8 rounded-3xl border border-white/10">
                              <h3 className="text-xl font-semibold text-slate-100 mb-6">
                                   Architecture & Tech Stack
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                   <div className="space-y-4">
                                        <div className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
                                             Frontend
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-400">
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                                  React 19 / Vite
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                                                  Tailwind CSS v3
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                                  Chart.js / Framer Motion
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                                  Context API & Axios
                                             </li>
                                        </ul>
                                   </div>
                                   <div className="space-y-4">
                                        <div className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
                                             Backend
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-400">
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                                  Node.js & Express v5
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                                  MongoDB & Mongoose
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                                  JWT Auth & Bcrypt
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                                                  Tesseract.js OCR
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
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
                              className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 border border-emerald-500/20">
                                   <Receipt className="text-emerald-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                   OCR Receipt Scanning
                              </h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Upload images or PDFs of receipts. Tesseract.js automatically checks
                                   for merchant names, dates, and amounts to populate expense forms.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="glass p-8 rounded-3xl border border-white/5 hover:border-violet-500/20 transition-colors"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-violet-500/20">
                                   <BarChart3 className="text-violet-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                   Interactive Analytics
                              </h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Visualize spending trends with dynamic Bar, Line, and Doughnut
                                   charts. Filter by category, date range, or payment method.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className="glass p-8 rounded-3xl border border-white/5 hover:border-rose-500/20 transition-colors"
                         >
                              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/20 flex items-center justify-center mb-6 border border-rose-500/20">
                                   <Target className="text-rose-400" size={24} />
                              </div>
                              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                   Goals & Subscriptions
                              </h3>
                              <p className="text-slate-400 leading-relaxed text-sm">
                                   Set savings targets for vacations or big purchases. Track recurring
                                   monthly subscriptions to identify unwanted costs.
                              </p>
                         </motion.div>
                    </section>

                    {/* Detailed Visuals */}
                    <section className="space-y-12">
                         {/* Dashboard & Analytics */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   viewport={{ once: true }}
                                   className="glass rounded-3xl overflow-hidden border border-white/10"
                              >
                                   <div className="p-8 border-b border-white/5">
                                        <h3 className="text-xl font-semibold text-slate-100 mb-1">
                                             Main Dashboard
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                             A snapshot of your financial health.
                                        </p>
                                   </div>
                                   <div className="relative h-64 md:h-80 w-full bg-slate-900/50">
                                        <Image
                                             src="/projects/ExpenseTracker/Dashboard.png"
                                             alt="ExpenseTracker Dashboard"
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
                                        <h3 className="text-xl font-semibold text-slate-100 mb-1">
                                             Spending Analytics
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                             Deep dive into where your money goes.
                                        </p>
                                   </div>
                                   <div className="relative h-64 md:h-80 w-full bg-slate-900/50">
                                        <Image
                                             src="/projects/ExpenseTracker/Analytics.png"
                                             alt="Spending Analytics"
                                             fill
                                             className="object-cover"
                                        />
                                   </div>
                              </motion.div>
                         </div>

                         {/* Subscriptions & Goals */}
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="glass rounded-3xl overflow-hidden border border-white/10"
                              >
                                   <div className="p-8 border-b border-white/5">
                                        <h3 className="text-xl font-semibold text-slate-100 mb-1">
                                             Subscription Manager
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                             Never miss a recurring payment again.
                                        </p>
                                   </div>
                                   <div className="relative h-64 md:h-80 w-full bg-slate-900/50">
                                        <Image
                                             src="/projects/ExpenseTracker/Subscriptions.png"
                                             alt="Subscriptions UI"
                                             fill
                                             className="object-cover"
                                        />
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="glass rounded-3xl overflow-hidden border border-white/10"
                              >
                                   <div className="p-8 border-b border-white/5">
                                        <h3 className="text-xl font-semibold text-slate-100 mb-1">
                                             Financial Goals
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                             Visualize progress towards your dreams.
                                        </p>
                                   </div>
                                   <div className="relative h-64 md:h-80 w-full bg-slate-900/50">
                                        <Image
                                             src="/projects/ExpenseTracker/Financial Goals.png"
                                             alt="Financial Goals UI"
                                             fill
                                             className="object-cover"
                                        />
                                   </div>
                              </motion.div>
                         </div>
                    </section>

                    {/* Tech Stack Chips */}
                    <section className="py-12 border-t border-white/5">
                         <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">
                              Integrated Technologies
                         </h2>
                         <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                              {[
                                   "React 19",
                                   "Node.js",
                                   "Express v5",
                                   "MongoDB",
                                   "Tailwind CSS",
                                   "Tesseract.js",
                                   "Chart.js",
                                   "Multer",
                                   "Passport.js",
                              ].map((tech) => (
                                   <div
                                        key={tech}
                                        className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 font-mono text-sm hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
                                   >
                                        {tech}
                                   </div>
                              ))}
                         </div>
                    </section>
               </main>
          </div>
     );
}
