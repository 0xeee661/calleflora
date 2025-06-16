import { ArrowDownRight } from 'lucide-react'
import Link from 'next/link'

export default function Habitaciones() {
  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/habitaciones.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-[0.47]"
        />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="relative mt-20 flex w-5/6 flex-col items-start justify-between gap-14">
          <h1 className="font-playfair text-foreground text-8xl tracking-wide select-none sm:text-nowrap lg:text-9xl 2xl:text-[170px]">
            ORQU<i>I</i> <br />
            <i>DEA</i>
          </h1>

          <div className="font-playfair text-foreground relative max-w-2xl text-start tracking-wide select-none">
            <span className="block text-xl leading-snug font-light text-white/90 sm:text-2xl">
              “En esta <i className="font-semibold">habitación</i> <br />
              el tiempo se posa suave, <br />
              como <i className="font-semibold">orquídea en rama</i>, <br />
              como voz que no se apura”.
            </span>
          </div>

          <Link
            href="/"
            className="absolute right-0 bottom-0 z-20 flex size-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 active:scale-95 sm:size-16"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            aria-label="Siguiente"
          >
            <ArrowDownRight className="size-6 font-light text-black sm:size-9" />
          </Link>
        </div>
      </div>
    </main>
  )
}
