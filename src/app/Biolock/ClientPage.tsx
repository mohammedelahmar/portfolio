"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
     ArrowLeft,
     ShieldCheck,
     Lock,
     Brain,
     Cpu,
     Clock,
     Activity,
     Layers,
     Zap,
     Github,
     AlertTriangle,
     KeyRound,
     Database,
     Sliders,
     CheckCircle2,
     SlidersHorizontal,
     Sparkles
} from "lucide-react";

export default function ClientPage() {
     const jsonLd = {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "BioLock",
          operatingSystem: "Windows, Mac, Linux",
          applicationCategory: "SecurityApplication",
          offers: {
               "@type": "Offer",
               price: "0",
               priceCurrency: "USD",
          },
          description:
               "An endpoint security prototype combining millisecond-precision keystroke behavioral biometrics with Isolation Forest anomaly detection to block unauthorized access from stolen credentials.",
          author: {
               "@type": "Person",
               name: "Mohammed El Ahmar",
               url: "https://elahmar.dev",
          },
          image: "https://elahmar.dev/projects/BioLock/Unlocked.png",
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

                    {/* 2. Violet Glow (Bottom Right) */}
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-violet-600/10 rounded-full blur-[60px] md:blur-[120px]" />

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
                                   <ShieldCheck size={14} />
                                   Cybersecurity × Behavioral Biometrics
                              </div>
                              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 leading-tight mb-6">
                                   Zero-trust security, <br />
                                   <span className="text-emerald-400">verified by cadence.</span>
                              </h1>
                              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                                   An endpoint authentication system combining millisecond-precision
                                   keystroke dynamics with unsupervised Isolation Forest anomaly detection
                                   to block stolen credentials in real time.
                              </p>

                              <div className="mt-8 flex gap-4">
                                   <a
                                        href="https://github.com/mohammedelahmar/BioLock_Project"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-emerald-400 transition-colors"
                                   >
                                        <Github size={20} /> View Source Code
                                   </a>
                              </div>
                         </motion.div>

                         {/* Hero Visual Preview */}
                         <motion.div
                              initial={{ opacity: 0, y: 40, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ delay: 0.2, duration: 0.8 }}
                              className="mt-16 relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(16,185,129,0.15)] bg-slate-950/70 p-6 md:p-12 flex flex-col items-center justify-center group"
                         >
                              <div className="w-full flex items-center justify-between pb-6 border-b border-white/5 text-xs font-mono text-slate-400">
                                   <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                        <span className="ml-2 text-slate-500">BioLock Client — CustomTkinter Dark Mode GUI</span>
                                   </div>
                                   <div className="text-emerald-400 flex items-center gap-1.5">
                                        <CheckCircle2 size={13} />
                                        <span>Authenticated Session</span>
                                   </div>
                              </div>

                              <div className="relative my-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                   <Image
                                        src="/projects/BioLock/Unlocked.png"
                                        alt="BioLock Lock Screen - Genuine Biometric Verification"
                                        width={404}
                                        height={384}
                                        priority
                                        className="transform transition-transform duration-500 group-hover:scale-[1.02]"
                                   />
                              </div>

                              <div className="text-center text-xs font-mono text-slate-400 max-w-md">
                                   Endpoint lock screen interface intercepting physical keyboard timing to evaluate user subconscious typing cadences against an enrolled biometric profile.
                              </div>
                         </motion.div>
                    </section>

                    {/* Overview & Architecture */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                         <div>
                              <h2 className="text-3xl font-semibold text-slate-100 mb-6 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                   Project Identity
                              </h2>
                              <div className="prose prose-invert text-slate-400 leading-relaxed space-y-4">
                                   <p>
                                        BioLock is an AI-augmented endpoint security system that authenticates users by
                                        analyzing <span className="text-slate-200 font-semibold">how</span> they type
                                        rather than merely <span className="text-slate-200 font-semibold">what</span> they
                                        type. By capturing physical keyboard interactions at millisecond precision, the system
                                        builds a personalized biometric typing profile based on subconscious muscle memory.
                                   </p>
                                   <p>
                                        In traditional access control, static passwords suffer from severe single-point-of-failure
                                        vulnerabilities: credentials can be phished, shoulder-surfed, leaked, or shared. Even
                                        if an adversary possesses the victim&apos;s correct plaintext password, BioLock enforces
                                        a zero-trust behavioral defense layer. If the keystroke cadence does not match the enrolled
                                        user, access is rejected.
                                   </p>
                                   <p>
                                        Unlike physiological biometrics (fingerprints, facial scans, retinal hardware) that require
                                        costly dedicated sensors and can be reverse-engineered from photos or physical residue,
                                        keystroke dynamics operates on standard QWERTY keyboards with zero hardware overhead.
                                        Furthermore, all feature extraction, scaling, and anomaly scoring execute locally on the
                                        endpoint, preserving complete user privacy without transmitting biometric data across networks.
                                   </p>
                              </div>
                         </div>

                         <div className="glass p-8 rounded-3xl border border-white/10">
                              <h3 className="text-xl font-semibold text-slate-100 mb-6">
                                   Architecture &amp; Tech Stack
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                   <div className="space-y-4">
                                        <div className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
                                             Application &amp; Desktop GUI
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-400">
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                                  Python 3.10+
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                                                  CustomTkinter 5.2.2 (Dark Mode)
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                                                  Tkinter &lt;KeyPress&gt; Event Loop
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                                  pynput 1.8.1 (Enrollment Hook)
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                                                  Monotonic Hardware Clock
                                             </li>
                                        </ul>
                                   </div>

                                   <div className="space-y-4">
                                        <div className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
                                             Machine Learning &amp; Biometrics
                                        </div>
                                        <ul className="space-y-2 text-sm text-slate-400">
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                                  scikit-learn 1.8.0 (IsolationForest)
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                                  StandardScaler (Z-Score Normalization)
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                                                  NumPy 2.4.2 &amp; Pandas 3.0.0
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full" />
                                                  Dwell &amp; Flight Temporal Vector
                                             </li>
                                             <li className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                                  Joblib 1.5.3 Model Bundle
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </section>

                    {/* Features Grid / Core Modules */}
                    <section className="space-y-8">
                         <div>
                              <h2 className="text-3xl font-semibold text-slate-100 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                   Core Engineering Modules
                              </h2>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors"
                              >
                                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 border border-emerald-500/20">
                                        <Clock className="text-emerald-400" size={24} />
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                        Millisecond Keystroke Capture
                                   </h3>
                                   <p className="text-slate-400 leading-relaxed text-sm">
                                        Leverages Python&apos;s monotonic hardware clock (<code className="text-emerald-300 font-mono text-xs">time.perf_counter()</code>)
                                        to extract Dwell Time (key hold duration) and Flight Time (inter-key transition interval)
                                        with sub-millisecond precision.
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
                                        <Zap className="text-violet-400" size={24} />
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                        Rollover Latency Engine
                                   </h3>
                                   <p className="text-slate-400 leading-relaxed text-sm">
                                        Accurately accommodates high-speed finger rollovers where a typist presses a subsequent
                                        key before releasing the preceding key. Computes negative flight times seamlessly without
                                        dropping or distorting feature sequences.
                                   </p>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.2 }}
                                   className="glass p-8 rounded-3xl border border-white/5 hover:border-sky-500/20 transition-colors"
                              >
                                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-sky-500/20">
                                        <Brain className="text-sky-400" size={24} />
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                        Unsupervised Anomaly Model
                                   </h3>
                                   <p className="text-slate-400 leading-relaxed text-sm">
                                        Constructs an ensemble of 100 Isolation Forest estimators trained exclusively on genuine user
                                        typing vectors. Isolates anomalous motor cadences without requiring synthetic attacker samples.
                                   </p>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="glass p-8 rounded-3xl border border-white/5 hover:border-amber-500/20 transition-colors"
                              >
                                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-6 border border-amber-500/20">
                                        <Database className="text-amber-400" size={24} />
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                        Adaptive Schema Management
                                   </h3>
                                   <p className="text-slate-400 leading-relaxed text-sm">
                                        Validates dataset row length against header schemas. If target password length changes,
                                        automatically archives legacy data files to prevent feature vector corruption during re-training.
                                   </p>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.1 }}
                                   className="glass p-8 rounded-3xl border border-white/5 hover:border-rose-500/20 transition-colors"
                              >
                                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-red-500/20 flex items-center justify-center mb-6 border border-rose-500/20">
                                        <Lock className="text-rose-400" size={24} />
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                        Multi-Stage Rate Limiting
                                   </h3>
                                   <p className="text-slate-400 leading-relaxed text-sm">
                                        Enforces a strict 3-attempt lockout defense. Anomaly scores below the acceptance threshold
                                        decrement remaining attempts, completely disabling controls upon exhaustion to mitigate brute-force attempts.
                                   </p>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.2 }}
                                   className="glass p-8 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-colors"
                              >
                                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center mb-6 border border-emerald-500/20">
                                        <SlidersHorizontal className="text-emerald-400" size={24} />
                                   </div>
                                   <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                        Noise Filter &amp; Panic Override
                                   </h3>
                                   <p className="text-slate-400 leading-relaxed text-sm">
                                        Detects Backspace or edit keystrokes to abort contaminated typing sequences, ensuring clean timing data.
                                        Includes an emergency F12 administrative killswitch for safe development recovery.
                                   </p>
                              </motion.div>
                         </div>
                    </section>

                    {/* Security & Machine Learning Deep Dive */}
                    <section className="glass p-8 md:p-12 rounded-3xl border border-white/10 space-y-8">
                         <div>
                              <div className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2">
                                   Technical Deep Dive
                              </div>
                              <h2 className="text-3xl font-semibold text-slate-100 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                   Mathematical Modeling &amp; Anomaly Detection
                              </h2>
                         </div>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
                              <div className="space-y-4">
                                   <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
                                        <Activity size={18} className="text-emerald-400" />
                                        Feature Vector Formulation
                                   </h3>
                                   <p>
                                        For an enrolled password of length <span className="text-slate-100 font-mono">N</span>, BioLock constructs a standardized continuous feature vector in <span className="text-slate-100 font-mono">2N</span>-dimensional space:
                                   </p>
                                   <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 font-mono text-xs text-emerald-300">
                                        X = [ D₁, D₂, ..., Dₙ,  F₁, F₂, ..., Fₙ₋₁,  T_total ] ∈ ℝ²ᴺ
                                   </div>
                                   <ul className="space-y-2 text-slate-400 text-xs">
                                        <li>• <span className="text-slate-200 font-mono">Dᵢ (Dwell Time)</span>: Release timestamp minus press timestamp (key hold duration).</li>
                                        <li>• <span className="text-slate-200 font-mono">Fᵢ (Flight Time)</span>: Press timestamp of key (i+1) minus release timestamp of key (i). Negative during rollover typing.</li>
                                        <li>• <span className="text-slate-200 font-mono">T_total</span>: Total elapsed typing duration.</li>
                                   </ul>
                                   <p>
                                        Features are normalized using Z-score standardization (<code className="text-emerald-300 font-mono text-xs">z = (x - μ) / σ</code>) to balance key press durations against inter-key travel intervals.
                                   </p>
                              </div>

                              <div className="space-y-4">
                                   <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">
                                        <Brain size={18} className="text-violet-400" />
                                        Isolation Forest Decision Boundary
                                   </h3>
                                   <p>
                                        Traditional classifiers require both legitimate and attacker samples. Because an organization cannot model all future attackers, BioLock deploys an <span className="text-slate-100 font-semibold">unsupervised Isolation Forest</span> (<code className="text-violet-300 font-mono text-xs">n_estimators=100, contamination=0.05</code>).
                                   </p>
                                   <p>
                                        The model recursively partitions feature space using random binary decision trees. Legitimate typing patterns cluster tightly, requiring deep paths to isolate. Impostor rhythms are isolated rapidly near tree roots, producing negative decision scores:
                                   </p>
                                   <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-2 font-mono text-xs">
                                        <div className="flex items-center justify-between text-emerald-300">
                                             <span>Genuine Typist Score:</span>
                                             <span>+0.1307 (Access Granted)</span>
                                        </div>
                                        <div className="flex items-center justify-between text-rose-400">
                                             <span>Perturbed Cadence Score:</span>
                                             <span>-0.0191 (Anomaly Detected)</span>
                                        </div>
                                   </div>
                                   <p className="text-xs text-slate-400">
                                        The acceptance threshold τ is calibrated dynamically at the 5th percentile of genuine training scores, balancing false acceptance with benign user variation.
                                   </p>
                              </div>
                         </div>
                    </section>

                    {/* Screenshot Showcase / Visual States */}
                    <section className="space-y-8">
                         <div>
                              <div className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 mb-2">
                                   Runtime Evidence
                              </div>
                              <h2 className="text-3xl font-semibold text-slate-100 flex items-center gap-3">
                                   <span className="w-1 h-8 bg-emerald-500 rounded-full" />
                                   System Authentication States
                              </h2>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* State 1: Unlocked */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
                              >
                                   <div className="p-6 border-b border-white/5">
                                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                                             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                             Genuine Typist (Verified)
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-100 mb-1">
                                             Access Granted
                                        </h3>
                                        <p className="text-slate-400 text-xs">
                                             Legitimate user inputs password matching enrolled subconscious typing cadence (Score: +0.0522).
                                        </p>
                                   </div>
                                   <div className="relative p-6 flex justify-center bg-slate-950/40">
                                        <Image
                                             src="/projects/BioLock/Unlocked.png"
                                             alt="BioLock Access Granted"
                                             width={320}
                                             height={300}
                                             className="rounded-xl border border-white/10 shadow-lg object-contain"
                                        />
                                   </div>
                              </motion.div>

                              {/* State 2: Anomaly Intercepted */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.1 }}
                                   className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
                              >
                                   <div className="p-6 border-b border-white/5">
                                        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                                             <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                             Anomaly Detected
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-100 mb-1">
                                             Threat Interception
                                        </h3>
                                        <p className="text-slate-400 text-xs">
                                             Correct password characters entered with abnormal timing profile (Score: -0.0959). Attempt decremented.
                                        </p>
                                   </div>
                                   <div className="relative p-6 flex justify-center bg-slate-950/40">
                                        <Image
                                             src="/projects/BioLock/Attempts.png"
                                             alt="BioLock Anomaly Detected"
                                             width={320}
                                             height={300}
                                             className="rounded-xl border border-white/10 shadow-lg object-contain"
                                        />
                                   </div>
                              </motion.div>

                              {/* State 3: Locked Out */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.2 }}
                                   className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
                              >
                                   <div className="p-6 border-b border-white/5">
                                        <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2">
                                             <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                                             Policy Enforced
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-100 mb-1">
                                             Security Lockout
                                        </h3>
                                        <p className="text-slate-400 text-xs">
                                             After 3 consecutive failed biometric attempts, entry controls are securely locked to prevent brute force.
                                        </p>
                                   </div>
                                   <div className="relative p-6 flex justify-center bg-slate-950/40">
                                        <Image
                                             src="/projects/BioLock/LockedOut.png"
                                             alt="BioLock Security Lockout"
                                             width={320}
                                             height={300}
                                             className="rounded-xl border border-white/10 shadow-lg object-contain"
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
                                   "Python 3.10+",
                                   "scikit-learn",
                                   "Isolation Forest",
                                   "Behavioral Biometrics",
                                   "CustomTkinter",
                                   "NumPy",
                                   "Pandas",
                                   "pynput",
                                   "Joblib",
                                   "StandardScaler",
                                   "Monotonic Clock",
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
