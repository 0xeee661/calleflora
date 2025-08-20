import Image from 'next/image'
import ContactoForm from './components/ContactoForm'

export default function ContactoPage() {
  return (
    <>
      <main className="relative flex min-h-fit flex-col justify-between md:min-h-screen">
        <div className="absolute inset-0 -z-10 hidden md:block">
          <Image
            src="/images/contacto.png"
            alt="Contacto background"
            fill
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>

        <div className="mt-32 flex flex-1 justify-center text-center select-none">
          <h1 className="font-playfair text-4xl tracking-wide text-white sm:text-6xl md:text-8xl lg:text-9xl">
            CONTÁC<span className="font-semibold italic">TANOS</span>
          </h1>
        </div>
      </main>

      <section className="z-10 mx-auto my-4 max-w-[1075px] space-y-12 md:my-20 md:space-y-32">
        <h2 className="font-playfair text-center text-lg font-light text-balance text-white sm:text-2xl md:text-4xl lg:text-6xl">
          Si algo en ti quiere{' '}
          <span className="font-semibold italic">florecer aquí</span>,<br />
          escríbenos. Las puertas están abiertas,
          <br />
          como <span className="italic">pétalos al sol</span>.
        </h2>

        <ContactoForm />
      </section>

      <div className="block md:hidden">
        <Image
          src="/images/contacto.png"
          alt="Contacto background"
          className="h-[400px] w-[400px] object-cover object-center"
          width={1075}
          height={1075}
          priority
        />
      </div>

      <div className="relative z-20 -mt-[50px] hidden h-32 w-full bg-gradient-to-t from-[#191919] via-[#191919]/90 to-[#191919]/0 md:block"></div>
    </>
  )
}
