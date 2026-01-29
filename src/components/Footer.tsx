import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="mt-20 border-t border-white/5 bg-black/20 pb-8 pt-12 text-center backdrop-blur-sm sm:text-left">
               <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10 lg:px-12">

                    {/* Brand / Copyright */}
                    <div className="flex flex-col items-center gap-1 sm:items-start">
                         <span className="text-sm font-semibold text-slate-100">
                              Mohammed El Ahmar
                         </span>
                         <span className="text-xs text-slate-400">
                              &copy; {currentYear} Security & Full Stack Engineering.
                         </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                         <a
                              href="https://github.com/mohammedelahmar"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 transition hover:text-white"
                              aria-label="GitHub"
                         >
                              <Github size={18} />
                         </a>
                         <a
                              href="https://www.linkedin.com/in/mohammed-el-ahmar-470516213/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 transition hover:text-white"
                              aria-label="LinkedIn"
                         >
                              <Linkedin size={18} />
                         </a>
                    </div>
               </div>
          </footer>
     );
}
