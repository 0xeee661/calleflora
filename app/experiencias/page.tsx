import Image from 'next/image'
import ExperienciasCarousel from './components/Carousel'

export default function ExperienciasPage() {
  return (
    <section className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-transparent to-[var(--background)] pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/experiencias/experiencias-bg.jpg"
          alt="Experiencias background"
          fill
          className="h-full w-full object-cover object-center blur-xl brightness-50"
          priority
        />
      </div>

      <ExperienciasCarousel />
    </section>
  )
}
