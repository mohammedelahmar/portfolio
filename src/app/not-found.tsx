import Link from "next/link";
import { Wifi, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-slate-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-violet-900/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[30%] w-[40%] h-[40%] bg-emerald-900/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg">
        {/* Signal icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <Wifi size={36} className="text-violet-400 opacity-50" />
        </div>

        {/* Terminal-style header */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-amber-300">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          signal lost
        </div>

        {/* 404 display */}
        <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-600 mb-4 font-mono tracking-tight">
          404
        </div>

        <h1 className="text-2xl font-semibold text-slate-50 mb-3">
          Route not found
        </h1>
        <p className="text-slate-300/70 mb-8 leading-relaxed">
          The requested endpoint does not exist in this system.
          <br />
          The signal may have been rerouted or decommissioned.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/80 to-emerald-500/80 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            <Home size={16} />
            Return to HQ
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-white"
          >
            <ArrowLeft size={16} />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
