import Image from 'next/image'
import ContactoForm from './components/ContactoForm'

export default function ContactoPage() {
  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-between">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contacto.png"
            alt="Contacto background"
            fill
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>

        <div className="mt-32 flex flex-1 justify-center text-center select-none">
          <h1 className="font-playfair text-6xl tracking-wide text-white max-[500px]:text-5xl max-[400px]:text-4xl md:text-8xl lg:text-9xl">
            CONTÁC
            <span className="font-semibold italic">TANOS</span>
          </h1>
        </div>

        {/* <Reservation /> */}
      </main>

      <section className="z-10 mx-auto my-20 max-w-[1075px] space-y-32">
        <h2 className="font-playfair text-center text-2xl font-light text-balance text-white sm:text-4xl md:text-6xl">
          Si algo en ti quiere{' '}
          <span className="font-semibold italic">florecer aquí</span>,<br />
          escríbenos. Las puertas están abiertas,
          <br />
          como <span className="italic">pétalos al sol</span>.
        </h2>

        <ContactoForm />
      </section>

      <div className="relative z-20 -mt-[50px] h-32 w-full bg-gradient-to-t from-[#191919] via-[#191919]/90 to-[#191919]/0"></div>
    </>
  )
}
