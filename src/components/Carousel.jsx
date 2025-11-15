import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const sample = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Arc ${i + 1}`,
  poster: `https://picsum.photos/seed/anime${i}/400/560`,
  progress: Math.random(),
}))

export default function Carousel({ title, withProgress = false }) {
  const scroller = useRef(null)

  const scrollBy = (dx) => {
    scroller.current?.scrollBy({ left: dx, behavior: 'smooth' })
  }

  return (
    <section className="mt-8">
      <div className="flex items-end justify-between mb-3 px-1">
        <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
          {title}
        </h2>
        <div className="hidden sm:flex items-center gap-2">
          <button onClick={() => scrollBy(-480)} className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
            <ChevronLeft className="mx-auto" />
          </button>
          <button onClick={() => scrollBy(480)} className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
            <ChevronRight className="mx-auto" />
          </button>
        </div>
      </div>

      <div ref={scroller} className="relative flex gap-4 overflow-x-auto no-scrollbar px-1 pb-1 snap-x snap-mandatory">
        {sample.map((item) => (
          <div key={item.id} className="group min-w-[160px] sm:min-w-[180px] lg:min-w-[200px] snap-start">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={item.poster} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="mt-2">
              <p className="text-slate-200 text-sm font-medium truncate">{item.title}</p>
              {withProgress && (
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" style={{ width: `${Math.round(item.progress * 100)}%` }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
