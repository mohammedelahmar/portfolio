"use client";

import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import React, { useActionState } from "react";
import { sendContactEmail } from "@/app/actions";

type ActionState = { status: "idle" | "success" | "error"; message?: string };

export default function Contact() {
     const [contactState, formAction] = useActionState<ActionState, FormData>(
          sendContactEmail,
          { status: "idle" },
     );

     return (
          <section
               id="contact"
               className="glass relative overflow-hidden rounded-3xl p-8 text-slate-100"
          >
               <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="lg:w-1/2">
                         <p className="text-xs font-mono uppercase tracking-[0.28em] text-slate-400">
                              Get in Touch
                         </p>
                         <h3 className="mt-2 text-3xl font-semibold">Let's Connect</h3>
                         <p className="mt-4 text-slate-300/90 leading-relaxed">
                              Drop a line for collabs, security labs, or interface builds. <br />
                              I typically respond within 12 hours.
                         </p>

                         <div className="mt-8 flex gap-4">
                              <a
                                   href="https://www.linkedin.com/in/mohammed-el-ahmar-470516213/"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-white hover:bg-white/5"
                              >
                                   <Linkedin size={16} /> LinkedIn
                              </a>
                              <a
                                   href="https://github.com/mohammedelahmar"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:border-violet-400/60 hover:text-white hover:bg-white/5"
                              >
                                   <Github size={16} /> GitHub
                              </a>
                         </div>
                    </div>

                    <form action={formAction} className="flex flex-col gap-4 lg:w-1/2">
                         <input
                              name="senderEmail"
                              type="email"
                              required
                              placeholder="your_email@domain.com"
                              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                         />
                         <textarea
                              name="message"
                              required
                              rows={4}
                              placeholder="Enter your message..."
                              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                         />
                         <button
                              type="submit"
                              className="shine mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                         >
                              Send Message <ArrowUpRight size={16} />
                         </button>
                         {contactState.status === "success" && (
                              <div className="text-sm text-emerald-300">{contactState.message}</div>
                         )}
                         {contactState.status === "error" && (
                              <div className="text-sm text-rose-300">{contactState.message}</div>
                         )}
                    </form>
               </div>
          </section>
     );
}
