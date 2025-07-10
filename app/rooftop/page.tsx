import { PrimaryButton } from '@/components/Button/PrimaryButton'
import a1 from '@/public/images/a1.png'
import a2 from '@/public/images/a2.png'
import a3 from '@/public/images/a3.png'
import rooftop from '@/public/images/rooftop2.png'
import Image from 'next/image'

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
          <h1 className="font-playfair w-full text-right text-6xl leading-none lg:text-[10.625rem]">
            ROOF <br />
            <span className="italic">TOP</span>
          </h1>
          <p className="font-playfair mt-8 w-full text-left text-xl lg:mt-0 lg:text-2xl">
            La ciudad susurra abajo, pero arriba,
            <br /> solo importa el instante <br />
            en que el sol se inclina <br /> sobre las hojas. <br /> Bienvenido
            al lugar donde florecen <br /> los cielos.
          </p>
        </div>
      </section>
      <section className="relative z-2 px-8 py-40">
        <p className="font-playfair relative z-2 mx-auto max-w-[849px] text-center text-4xl italic">
          Nuestro rooftop es un refugio entre cielo y botánica: un espacio
          abierto donde los atardeceres tiñen la ciudad de oro y las plantas
          nativas acompañan cada respiro.
        </p>
        <Image
          src={a1}
          alt="Rooftop"
          className="absolute right-0 bottom-[-100px]"
        />
        <Image
          src={a2}
          alt="Rooftop"
          className="absolute top-[-100px] left-0"
        />
      </section>
      <section className="relative h-screen snap-start">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-screen w-full object-cover align-top opacity-40"
        >
          <source src="/videos/r2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]"></div>
      </section>
      <section className="relative">
        <Image src={rooftop} alt="Rooftop" className="w-full" />
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]">
          <PrimaryButton
            href="https://api.whatsapp.com/send?phone=573117447836"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-2"
          >
            VER MENU
          </PrimaryButton>
          <Image
            src={a3}
            alt="Rooftop"
            className="absolute right-0 bottom-[-100px]"
          />
          <Image
            src={a2}
            alt="Rooftop"
            className="absolute top-[-200px] left-0"
          />
        </div>
      </section>
    </main>
  )
}

export default Rooftop
