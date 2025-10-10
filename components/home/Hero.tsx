/* import Reservation from '../Reservation/Reservation' */

import { bookingLink } from '@/constants/app'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Hero() {
  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/home.mov"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-[0.47]"
        />
      </div>

      <div className="relative flex min-h-[calc(100vh-109px)] flex-col items-center justify-center">
        <Image
          src={logo}
          alt="Calle Flora Logo"
          className="h-8 w-auto md:hidden"
        />
        <div className="mt-10 flex flex-col items-center justify-between gap-0">
          <h1 className="font-playfair text-foreground text-center text-[4rem] font-bold tracking-wide select-none sm:text-nowrap md:text-[6.5625rem]">
            UN HO<span className="font-semibold italic">TEL</span>
          </h1>

          <div className="font-playfair text-foreground max-w-2xl text-center tracking-wide select-none">
            <span className="block text-2xl leading-snug font-light text-white/90 sm:text-2xl md:text-[2rem]">
              que hace homenaje a la <br className="md:hidden" />
              <i className="font-black">eterna primavera</i>.
            </span>

            {/* <span className="font-quicksand mt-2 block text-sm sm:text-base">
              — Diario de Lecumberri, Álvaro Mutis
            </span> */}

            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex cursor-pointer rounded-md bg-white px-4 py-2 text-black"
            >
              RESERVAR
            </a>
          </div>
        </div>
      </div>

      {/* <Reservation /> */}
    </main>
  )
}
