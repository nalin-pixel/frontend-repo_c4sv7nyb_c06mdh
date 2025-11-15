import { Home, Compass, Flame, Bookmark, User2 } from 'lucide-react'

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Browse', icon: Compass },
  { label: 'Trending', icon: Flame },
  { label: 'Watchlist', icon: Bookmark },
  { label: 'Profile', icon: User2 },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-2 p-3 w-20 lg:w-56 shrink-0 bg-transparent">
      <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="p-3 lg:p-4">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_#22d3ee]" />
            <span className="hidden lg:block text-xl font-extrabold tracking-tight text-cyan-400">
              Aether
            </span>
          </div>
        </div>
        <nav className="py-2">
          {navItems.map(({ label, icon: Icon }, idx) => (
            <button
              key={label}
              className={`group flex items-center w-full gap-3 lg:gap-4 px-3 lg:px-5 py-3 text-sm lg:text-base transition-all ${
                idx === 0
                  ? 'text-cyan-300/90' 
                  : 'text-slate-300/70 hover:text-cyan-200'
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all ${
                  idx === 0
                    ? 'border-cyan-500/40 bg-cyan-500/10 shadow-[0_0_18px_rgba(34,211,238,0.45)]'
                    : 'border-white/10 bg-white/5 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10'
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="hidden lg:block font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
