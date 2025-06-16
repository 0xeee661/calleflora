import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function QuotePage() {
  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/quote.png"
          alt="Quote"
          className="h-full w-full object-cover object-[18%_0%] max-sm:hidden"
          fill
        />
        <Image
          src="/images/quote-bg.png"
          alt="Quote"
          className="h-full w-full object-cover object-[18%_10%] sm:hidden"
          fill
        />
      </div>

      <p className="font-playfair text-foreground absolute top-28 left-10 max-w-[330px] pr-10 text-base tracking-wide select-none sm:hidden">
        En el corazón de Colombia, existe un rincón donde la naturaleza susurra,
        y la literatura florece entre muros y jardines. CALLE FLORA es un hotel
        botánico, inspirado en la diversidad silvestre de nuestras tierras y en
        las palabras que alguna vez la nombraron. Aquí cada espacio cuenta una
        historia: la de una hoja, una raíz, una voz. Bienvenidos a su refugio
        entre lo natural y lo narrado.
        <br />
        <span className="font-quicksand mt-2 block text-end text-sm sm:text-base">
          — Calle Flora, 2025
        </span>
      </p>

      <Link
        href="/"
        className="absolute right-24 bottom-24 z-20 flex size-16 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 active:scale-95 max-sm:right-1/2 max-sm:bottom-20 max-sm:translate-x-1/2"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
        aria-label="Siguiente"
      >
        <ArrowDown className="size-9 font-light text-black" />
      </Link>
    </main>
  )
}
