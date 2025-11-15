import { Bell, Search, SlidersHorizontal } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <div className="w-8 h-8" />

          <div className="flex-1 max-w-xl mx-auto">
            <div className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 shadow-[0_0_30px_rgba(0,0,0,0.35)] focus-within:border-cyan-400/40 focus-within:bg-cyan-400/5">
              <Search className="h-5 w-5 text-cyan-300" />
              <input
                placeholder="Search anime, characters, studios..."
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-200 focus:outline-none"
              />
              <SlidersHorizontal className="h-5 w-5 text-slate-300/70" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative h-10 w-10 rounded-full border border-white/10 bg-white/10 backdrop-blur-lg flex items-center justify-center text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            </button>
            <img
              src="https://i.pravatar.cc/60?img=15"
              alt="profile"
              className="h-10 w-10 rounded-full ring-2 ring-cyan-500/40 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
