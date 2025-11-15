import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="min-h-screen bg-[#05070D] text-slate-200">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-blue-600/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative flex">
        <Sidebar />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4">
          <Topbar />

          <div className="space-y-8">
            <Hero />

            <Carousel title="Popular Anime" />
            <Carousel title="Continue Watching" withProgress />
            <Carousel title="Top This Week" />
            <Carousel title="New Releases" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
