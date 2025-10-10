import Image from 'next/image'
import React from 'react'

export default function AboutUsPage() {
  return (
    <main>
      <section className="relative h-[50vh] snap-start md:h-screen">
        <Image
          src="/images/about-us/about-us-bg.png"
          alt="Heliconia"
          className="absolute inset-0 h-full min-h-[50vh] w-full object-cover align-top brightness-75 md:min-h-screen"
          fill
        />

        <div className="absolute inset-0 z-1 flex flex-col items-center justify-end gap-7 bg-gradient-to-b from-transparent via-transparent to-[var(--background)] max-md:py-14 md:justify-center md:gap-10">
          <h1 className="font-playfair px-8 text-center text-7xl font-normal sm:text-7xl md:text-[150px]">
            ABOUT US
          </h1>
          <p className="font-playfair hidden max-w-3xl px-8 text-center text-2xl md:block md:text-5xl">
            Si algo en ti quiere <i className="font-semibold">florecer aquí</i>,
            escríbenos. Las puertas están abiertas,{' '}
            <i className="font-semibold">como pétalos al sol</i>.
          </p>
        </div>
      </section>

      <section className="font-playfair mx-auto grid max-w-7xl gap-8 px-8 text-center md:grid-cols-2 md:gap-14 md:text-start">
        <p className="text-2xl text-pretty md:text-4xl">
          10 PISOS DE DISEÑO ARQUITECTÓNICO IMPECABLE
          <br />
          <br />
          En el Hotel Calle Flora, la naturaleza está presente en cada rincón,
          permitiendo que cada momento sea un instante inolvidable y una foto
          para compartir. Cada piso es una flor, una experiencia única
        </p>
        <p className="text-2xl text-pretty md:text-4xl">
          FACHADA KINÉTICA: EL CENTRO DE TODAS LAS MIRADAS
          <br />
          <br />
          Uno de los mayores atractivos y diferenciales del hotel son sus
          ventanas y su apertura: la fachada cinética se asemeja a flores que,
          al estar totalmente abiertas, sin duda llaman la atención de
          transeúntes y curiosos, invitándolos a conocer más de este ícono
          representativo de Medellín, la ciudad de las flores.
        </p>
      </section>

      <section className="relative mt-10 h-[400px] w-full overflow-hidden md:mt-40 md:h-[729px]">
        <Image
          src="/images/about-us/about-us-building.png"
          alt="Fachada Hotel Calle Flora"
          className="absolute inset-0 h-full w-full object-cover align-top"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />

        <div className="pointer-events-none absolute inset-0 z-10 w-full bg-gradient-to-b from-transparent via-transparent via-40% to-[var(--background)]" />
        <div className="pointer-events-none absolute inset-0 z-10 w-full bg-gradient-to-t from-transparent via-transparent via-40% to-[var(--background)]" />
      </section>

      <section className="relative mt-24 h-full min-h-screen snap-start bg-gradient-to-t from-transparent via-transparent to-[var(--background)]">
        <Image
          src="/images/about-us/about-us-bg-footer.png"
          alt="Heliconia"
          className="absolute -z-10 h-full min-h-[50vh] w-full max-w-none object-cover object-top align-top opacity-40 brightness-75 md:min-h-screen"
          fill
        />

        {/* <img
          src="/images/about-us/about-us-bg-footer.png"
          alt="Heliconia"
          className="absolute inset-0 h-full min-h-[50vh] w-full object-cover align-top opacity-40 md:min-h-screen"
        /> */}

        <div className="inset-0 z-1 flex justify-center gap-7 py-10 md:gap-10">
          <p className="font-playfair mt-14 max-w-5xl px-8 text-center text-2xl md:text-4xl">
            EXPOSICIONES CON TEMÁTICAS FLORALES
            <br />
            <br />
            Serán parte integral del hotel, convirtiendo a Calle Flora en un
            referente de estilo, arte y diseño. Cada mes, tanto turistas como
            locales querrán descubrir qué nuevas creaciones florales adornan
            nuestros espacios y generan conversaciones.
            <br />
            <br />
            DECORACIÓN PARA CENAS Y CELEBRACIONES
            <br />
            <br />
            Adiós a los clichés de las típicas rosas: nuestra propuesta eleva
            cualquier cena romántica o fecha especial a otro nivel. Los
            huéspedes se sorprenderán con composiciones únicas, pensadas para
            ser el fondo perfecto de sus sesiones de fotos.
          </p>
        </div>
      </section>
    </main>
  )
}
