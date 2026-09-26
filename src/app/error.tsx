"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-slate-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-rose-900/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-violet-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg">
        {/* Error icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-rose-500/20 bg-rose-500/10 shadow-[0_0_40px_rgba(244,63,94,0.15)]">
          <AlertTriangle size={36} className="text-rose-400" />
        </div>

        {/* Terminal-style header */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-rose-300">
          <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
          system error
        </div>

        <h1 className="text-4xl font-bold text-slate-50 mb-3">
          Something went wrong
        </h1>
        <p className="text-slate-300/70 mb-8 leading-relaxed">
          A critical process encountered an unexpected fault.
          {error.digest && (
            <span className="block mt-2 font-mono text-xs text-slate-400/60">
              Error digest: {error.digest}
            </span>
          )}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500/80 to-violet-500/80 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]"
          >
            <RotateCcw size={16} />
            Retry
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-slate-200 transition hover:border-violet-400/60 hover:text-white"
          >
            <Home size={16} />
            Back to HQ
          </Link>
        </div>
      </div>
    </div>
  );
}
