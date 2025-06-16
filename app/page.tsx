import Hero from '@/components/home/Hero'
import Habitaciones from '@/components/home/Habitaciones'
import Rooftop from '@/components/home/Rooftop'
import QuotePage from '@/components/home/QuotePage'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="scrollbar-hide font-istok no-scrollbar overflow-x-hidden scroll-smooth md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
        <Hero />

        <Habitaciones />

        <QuotePage />

        <Rooftop />
      </div>
    </>
  )
}
