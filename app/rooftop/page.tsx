import { PrimaryButton } from '@/components/Button/PrimaryButton'
import { bookingLink, whatsappLink } from '@/constants/app'
import a1 from '@/public/images/a1.png'
import a2 from '@/public/images/a2.png'
import a3 from '@/public/images/a3.png'
import rooftop from '@/public/images/rooftop2.png'
import Image from 'next/image'
import RooftopReservation from '@/components/RooftopReservation/RooftopReservation'

const Rooftop = () => {
  return (
    <main>
      <section className="relative h-screen snap-start">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-screen w-full object-cover align-top opacity-40"
        >
          <source src="/videos/r1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] p-8 lg:p-20">
          <h1 className="font-playfair w-full text-center text-7xl leading-none md:text-right lg:text-[10.625rem]">
            SELVA <br />
            <span className="italic">NEGRA</span>
          </h1>
          <PrimaryButton
            className="font-quicksand mt-12 !h-[38px] min-h-auto cursor-pointer rounded-2xl border-2 border-white !px-5 py-1.5 text-xl font-bold transition-colors duration-300 hover:bg-white/10 md:hidden"
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            RESERVAR
          </PrimaryButton>
          <p className="font-playfair mt-8 hidden w-full text-left text-xl md:block lg:mt-0 lg:text-2xl">
            La ciudad susurra abajo, pero arriba,
            <br /> solo importa el instante <br />
            en que el sol se inclina <br /> sobre las hojas. <br /> Bienvenido
            al lugar donde florecen <br /> los cielos.
          </p>
        </div>
      </section>
      <section className="relative z-2 px-8 py-10 md:py-40">
        <p className="font-playfair relative z-2 mx-auto -mt-30 max-w-[849px] text-center text-2xl italic md:mt-0 md:text-4xl">
          Nuestro rooftop es un refugio entre cielo y botánica: un espacio
          abierto donde los atardeceres tiñen la ciudad de oro y las plantas
          nativas acompañan cada respiro.
        </p>
        <Image
          src={a1}
          alt="Rooftop"
          className="absolute right-0 bottom-[-100px] max-w-[150px] md:max-w-full"
        />
        <Image
          src={a2}
          alt="Rooftop"
          className="absolute top-[-100px] -left-10 max-w-[150px] md:left-0 md:max-w-full"
        />
      </section>
      <section className="relative h-screen snap-start">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-screen w-full object-cover align-top opacity-80"
        >
          <source src="/videos/r2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]"></div>
      </section>

      <section className="relative h-[50vh] md:h-auto">
        <Image
          src={rooftop}
          alt="Rooftop"
          className="h-full w-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]">
          <PrimaryButton
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-2"
          >
            VER MENU
          </PrimaryButton>
          <Image
            src={a3}
            alt="Rooftop"
            className="absolute right-0 bottom-[-100px] hidden md:block"
          />
          <Image
            src={a2}
            alt="Rooftop"
            className="absolute top-[-200px] left-0 hidden md:block"
          />
        </div>
      </section>

      {/* Sección de reservas */}
      <section className="relative flex items-center justify-center md:min-h-screen">
        <RooftopReservation className="relative z-10" />
      </section>
    </main>
  )
}

export default Rooftop
