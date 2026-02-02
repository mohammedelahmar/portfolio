"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
     ArrowLeft,
     ShoppingBag,
     ShieldCheck,
     Zap,
     LayoutDashboard,
     CreditCard,
     Github,
     Globe,
     Layers,
     Database,
     Lock,
} from "lucide-react";

export default function ClientPage() {
     const fadeInUp = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
     };

     return (
          <div className="min-h-screen bg-[#0f0b16] text-slate-100 relative overflow-x-hidden font-sans selection:bg-pink-500/30">
               {/* Background Ambience */}
               <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    {/* Deep Purple Glow (Top Left) */}
                    <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-violet-900/10 rounded-full blur-[100px]" />
                    {/* Hot Pink Glow (Bottom Right) */}
                    <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-pink-600/10 rounded-full blur-[100px]" />
                    {/* Grid Pattern Overlay */}
                    <div
                         className="absolute inset-0 opacity-[0.03]"
                         style={{
                              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                              backgroundSize: '40px 40px'
                         }}
                    />
               </div>

               <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
                    <Link
                         href="/"
                         className="flex items-center gap-2 text-sm font-mono text-purple-200/60 hover:text-amber-400 transition-colors group"
                    >
                         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                         BACK_TO_HQ
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-200/40">
                         <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_#fbbf24]" />
                         Retail OS Online
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
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-xs font-mono uppercase tracking-widest mb-6">
                                   <ShoppingBag size={14} />
                                   E-Commerce v2.0
                              </div>
                              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-pink-200 to-amber-100">
                                        Elegance Shop
                                   </span>
                                   <br />
                                   <span className="text-3xl md:text-5xl text-purple-200/40 font-light">
                                        Full-Stack Commerce Engine
                                   </span>
                              </h1>
                              <p className="text-lg md:text-xl text-purple-200/60 max-w-2xl leading-relaxed">
                                   A comprehensive MERN stack platform engineered for the modern digital boutique.
                                   Featuring role-based dashboards, secure payments, and a bespoke "Dark Neon" design system.
                              </p>

                              <div className="mt-8 flex flex-wrap gap-4">
                                   <a
                                        href="https://github.com/mohammedelahmar/elegance-shop"
                                        target="_blank"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all"
                                   >
                                        <Github size={20} /> Repository
                                   </a>
                                   <div className="flex items-center gap-2 px-6 py-3 border border-purple-500/30 text-purple-200 rounded-full font-mono text-sm bg-purple-900/10 backdrop-blur-sm">
                                        <ShieldCheck size={16} className="text-emerald-400" />
                                        Valid: JWT / Stripe / PayPal
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 40, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.8 }}
                              className="mt-16 relative rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(139,92,246,0.2)] group"
                         >
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b16] via-transparent to-transparent z-10 opacity-60" />
                              <Image
                                   src="/projects/EleganceShop/Home.png"
                                   alt="Elegance Shop Interface"
                                   width={1920}
                                   height={1080}
                                   priority
                                   quality={90}
                                   className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                              />
                         </motion.div>
                    </section>

                    {/* Core Architecture Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="col-span-1 md:col-span-3 mb-4">
                              <h2 className="text-2xl font-semibold text-purple-100 flex items-center gap-3">
                                   <Layers className="text-amber-400" />
                                   System Modules
                              </h2>
                         </div>

                         {[
                              {
                                   icon: <LayoutDashboard size={24} className="text-pink-400" />,
                                   title: "Admin Command Center",
                                   desc: "Full CRUD capabilities for products, users, and orders. Visual statistics and inventory management.",
                                   color: "pink",
                              },
                              {
                                   icon: <CreditCard size={24} className="text-amber-400" />,
                                   title: "Secure Checkout",
                                   desc: "Integrated PayPal & Stripe gateways with multi-step address verification and order summarization.",
                                   color: "amber",
                              },
                              {
                                   icon: <Lock size={24} className="text-violet-400" />,
                                   title: "RBAC Security",
                                   desc: "JWT-based authentication with distinct role guards (Admin vs. Shopper) protecting API routes.",
                                   color: "violet",
                              },
                         ].map((item, i) => (
                              <motion.div
                                   key={i}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: i * 0.1 }}
                                   className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md group"
                              >
                                   <div className={`w-12 h-12 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-6 border border-${item.color}-500/20 group-hover:bg-${item.color}-500/20 transition-colors`}>
                                        {item.icon}
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                                   <p className="text-purple-200/60 leading-relaxed text-sm">
                                        {item.desc}
                                   </p>
                              </motion.div>
                         ))}
                    </section>

                    {/* Visual Showcase */}
                    <section className="space-y-8">
                         <div className="flex items-center justify-between">
                              <h2 className="text-2xl font-semibold text-purple-100">Interface Gallery</h2>
                              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent ml-6" />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {[
                                   { src: "/projects/EleganceShop/Products.png", label: "Catalog View" },
                                   { src: "/projects/EleganceShop/Product-detail.png", label: "Product Detail" },
                                   { src: "/projects/EleganceShop/Admin-Panel.png", label: "Admin Dashboard" },
                                   { src: "/projects/EleganceShop/Checkout.png", label: "Payment Flow" },
                                   { src: "/projects/EleganceShop/About.png", label: "Brand Identity" },
                              ].map((img, idx) => (
                                   <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative min-h-[250px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                                   >
                                        <Image
                                             src={img.src}
                                             alt={img.label}
                                             fill
                                             className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                             <span className="text-white font-medium">{img.label}</span>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="py-12 border-t border-white/5">
                         <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-purple-300/40 mb-8 text-center">Managed Tech Stack</h2>
                         <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                              {["React 18", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap 5", "PayPal SDK", "Multer"].map((tech) => (
                                   <div key={tech} className="px-6 py-3 rounded-full border border-violet-500/20 bg-violet-900/10 text-violet-200/70 font-mono text-sm hover:border-amber-400/30 hover:text-amber-200 transition-colors cursor-default">
                                        {tech}
                                   </div>
                              ))}
                         </div>
                    </section>

               </main>
          </div>
     );
}
