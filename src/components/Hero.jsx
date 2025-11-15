import Spline from '@splinetool/react-spline'
import { Play, Star, Plus } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[56vh] sm:h-[62vh] lg:h-[68vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0B1220] to-[#060911] shadow-2xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#060911]" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 text-xs text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            Featured Premiere
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            Neon Genesis: Elysium Protocol
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300/85 max-w-xl">
            In a city of eternal night, a renegade pilot bonds with a sentient mech to expose a conspiracy spanning worlds.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-sm text-slate-200">
              <Star className="h-4 w-4 text-yellow-300" /> 4.9
            </div>
            <div className="flex -space-x-2">
              {[1,2,3,4].map((n) => (
                <img key={n} src={`https://i.pravatar.cc/64?img=${10+n}`} className="h-7 w-7 rounded-full ring-2 ring-white/20" />
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 px-5 py-2.5 font-semibold shadow-[0_0_24px_rgba(34,211,238,0.35)] transition">
              <span className="relative flex h-5 w-5 items-center justify-center">
                <Play className="h-5 w-5" />
                <span className="absolute inset-0 rounded-full blur-sm bg-cyan-400/40 -z-10" />
              </span>
              Watch Now
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-slate-200 px-5 py-2.5">
              <Plus className="h-5 w-5 text-cyan-300" /> Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
