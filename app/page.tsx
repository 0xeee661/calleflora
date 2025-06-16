import Hero from '@/components/home/Hero'
import Habitaciones from '@/components/home/Habitaciones'

export default function Home() {
  return (
    <div className="scrollbar-hide font-istok overflow-x-hidden scroll-smooth md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
      <Hero />

      <Habitaciones />
    </div>
  )
}
