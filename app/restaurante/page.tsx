import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'

export default function RestaurantePage() {
  const scheduleData = [
    {
      day: 'Lunes',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Martes',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Miércoles',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Jueves',
      hours: '5:00 PM -1:00 AM',
    },

    {
      day: 'Viernes',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Sábado',
      hours: '5:00 PM -1:00 AM',
    },
  ]

  return (
    <main>
      <section className="relative h-[60vh] snap-start overflow-hidden md:h-screen">
        <Image
          src="/images/restaurante/restaurante-bg.png"
          alt="Restaurante"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-50"
          fill
        />

        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent to-[var(--background)]">
          <h1 className="font-playfair text-4xl font-normal md:text-8xl">
            AMELIER
          </h1>
          <p className="font-playfair text-center text-2xl">
            &quot;Las <i className="font-semibold">plantas</i> eran mi{' '}
            <i className="font-semibold">primer amor</i>. <br /> En su{' '}
            <i className="font-semibold">silencio entendí todo</i>.&quot;
          </p>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-8 py-24 pt-56 md:grid-cols-2 md:gap-8">
        <div className="absolute top-0 right-0 left-0 z-1 flex h-20 max-w-6xl items-center justify-between gap-6 px-8">
          {scheduleData.map(item => (
            <div
              key={item.day}
              className="flex flex-col items-center justify-center gap-2.5"
            >
              <h3 className="font-playfair text-2xl font-normal text-[#B19C00]">
                {item.day}
              </h3>
              <p className="font-playfair text-xl font-normal">{item.hours}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-4">
          <h2 className="font-playfair text-7xl font-normal md:text-8xl">
            Nuestro <br />
            <i className="text-[#B19C00]">Menú</i>
          </h2>

          <p className="font-playfair mt-5 text-3xl leading-relaxed italic">
            <i className="font-semibold">Calle Flora</i> no es un solo lugar: es
            un conjunto de <i className="font-semibold">atmósferas</i> que
            florecen a su propio ritmo.
          </p>
        </div>

        <div className="mx-auto flex aspect-square max-w-96 justify-center md:max-w-full">
          <Image
            src="/images/restaurante/restaurante-plato.png"
            alt="Restaurante plato"
            width={678}
            height={678}
          />
        </div>
      </section>

      <section className="relative mt-20 h-[50vh] snap-start md:h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-[50vh] w-full object-cover align-top opacity-40 md:min-h-screen"
        >
          <source src="/videos/restaurante.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-[var(--background)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent via-60% to-[var(--background)]"></div>

        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent to-[var(--background)]">
          <i className="font-playfair max-w-[850px] px-8 text-center text-2xl md:text-4xl">
            Nuestro rooftop es un refugio entre cielo y botánica: un espacio
            abierto donde los atardeceres tiñen la ciudad de oro y las plantas
            nativas acompañan cada respiro.
          </i>

          <Link
            href="/"
            className="mt-5 flex size-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 active:scale-95 sm:size-16"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            aria-label="Siguiente"
          >
            <ArrowDownRight className="size-6 font-light text-black sm:size-9" />
          </Link>
        </div>
      </section>
    </main>
  )
}
