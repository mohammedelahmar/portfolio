export default function Loading() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto pt-24 space-y-12 animate-pulse">
        {/* Nav skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-32 bg-white/5 rounded-full" />
          <div className="h-4 w-24 bg-white/5 rounded-full" />
        </div>

        {/* Hero skeleton */}
        <div className="space-y-6 max-w-4xl">
          <div className="h-5 w-40 bg-emerald-500/10 rounded-full border border-emerald-500/20" />
          <div className="h-14 w-[80%] bg-white/5 rounded-2xl" />
          <div className="h-10 w-[60%] bg-white/[0.03] rounded-2xl" />
          <div className="h-5 w-[90%] bg-white/[0.03] rounded-lg" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-emerald-500/10 rounded-full" />
          </div>
        </div>

        {/* Image skeleton */}
        <div className="h-[400px] w-full bg-white/[0.03] rounded-xl border border-white/5" />

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-56 bg-white/[0.03] rounded-3xl border border-white/5 p-8 space-y-4">
              <div className="h-12 w-12 bg-white/5 rounded-2xl" />
              <div className="h-5 w-[60%] bg-white/5 rounded-lg" />
              <div className="h-4 w-full bg-white/[0.03] rounded-lg" />
              <div className="h-4 w-[80%] bg-white/[0.03] rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
