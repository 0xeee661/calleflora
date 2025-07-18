import { ArrowUpRight } from 'lucide-react'

export default function EspaciosPage() {
  const flowers = [
    {
      name: 'Protea',
      image: '/flores/PROTEA.png',
    },
    {
      name: 'Gerbera',
      image: '/flores/GERBERA.png',
    },
    {
      name: 'Orquídea',
      image: '/flores/ORQUIDEA.png',
    },
    {
      name: 'Anturio',
      image: '/flores/ANTURIO.png',
    },
    {
      name: 'Heliconia',
      image: '/flores/HELICONIA.png',
    },
    {
      name: 'Passiflora',
      image: '/flores/PASSIFLORA.png',
    },
    {
      name: 'Flor Mariposa',
      image: '/flores/FLOR-MARIPOSA.png',
    },
    {
      name: 'Cardo Azul',
      image: '/flores/CARDO-AZUL.png',
    },
    {
      name: 'Delfinios',
      image: '/flores/DELFINIOS.png',
    },
  ]

  return (
    <main>
      <section className="relative h-[50vh] snap-start md:h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-[50vh] w-full object-cover align-top opacity-40 md:min-h-screen"
        >
          <source src="/videos/espacios.mp4" type="video/mp4" />
        </video>
        {/* Overlay for play and reservar buttons */}
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent to-[var(--background)]">
          <h1 className="font-playfair text-4xl font-normal md:text-[170px]">
            ESPACIOS
          </h1>
          <p className="font-playfair max-w-2xl text-center text-2xl md:text-3xl">
            <i className="font-semibold">Calle Flora</i> no es un solo lugar: es
            un conjunto de <i className="font-semibold">atmósferas</i> que
            florecen a su propio ritmo.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 p-8 py-24 md:grid-cols-2 xl:grid-cols-[370px_1fr]">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-playfair text-6xl font-normal">Fachada</h2>

            <h3 className="font-playfair mt-4 text-6xl font-semibold italic">
              Kinética
            </h3>
          </div>

          <p className="font-playfair mt-5 text-3xl leading-relaxed italic">
            Uno de los mayores atractivos y diferenciales del hotel, son sus
            ventanas y su apertura. La fachada kinética se asemeja a flores, que
            al estar totalmente abiertas, sin duda hacen que los transeuntes y
            curiosos quieran conocer más de un hotel icónico y representativo de
            Medellín, la ciudad de las flores.
          </p>
        </div>

        <div className="relative h-[850px] w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover align-top"
          >
            <source src="/videos/fachada-espacios.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 w-full bg-gradient-to-b from-transparent via-transparent via-40% to-[var(--background)]" />
          <div className="absolute inset-0 z-10 w-full bg-gradient-to-t from-transparent via-transparent via-40% to-[var(--background)]" />
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-4 items-center justify-items-center gap-4">
          {flowers.slice(0, 4).map(flower => (
            <div key={flower.name} className="flex flex-col items-center gap-2">
              <img
                src={flower.image}
                alt={flower.name}
                className="h-full w-full object-cover"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.45))',
                }}
              />
              <p className="font-playfair text-center text-2xl font-medium tracking-wide text-white italic">
                {flower.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 items-center justify-items-center gap-4">
          {flowers.slice(4, 7).map(flower => (
            <div key={flower.name} className="flex flex-col items-center gap-2">
              <img
                src={flower.image}
                alt={flower.name}
                className="h-full w-full object-cover"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.45))',
                }}
              />
              <p className="font-playfair text-center text-2xl font-medium tracking-wide text-white italic">
                {flower.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-xl grid-cols-2 items-center justify-items-center gap-4">
          {flowers.slice(7, 10).map(flower => (
            <div key={flower.name} className="flex flex-col items-center gap-2">
              <img
                src={flower.image}
                alt={flower.name}
                className="h-full w-full object-cover"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.45))',
                }}
              />
              <p className="font-playfair text-center text-2xl font-medium tracking-wide text-white italic">
                {flower.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 grid-rows-4 gap-8 p-8 py-24">
        {/* Gimnasio */}
        <div className="relative col-span-2 h-[267px] bg-neutral-900 md:col-span-1 md:row-span-2 md:h-auto">
          <img
            src="/images/espacios/gimnasio.png"
            alt="Gimnasio"
            className="h-full w-full rounded-3xl object-cover"
          />
          <h1 className="font-playfair absolute bottom-0 p-4 text-5xl text-white">
            Gimnasio
          </h1>

          <LinkButton />
        </div>

        {/* Piscina */}
        <div className="relative col-span-2 h-[267px] bg-neutral-900 md:col-span-1 md:row-span-2 md:h-auto">
          <img
            src="/images/espacios/piscina.png"
            alt="Piscina"
            className="h-full w-full rounded-3xl object-cover"
          />
          <h1 className="font-playfair absolute bottom-0 p-4 text-5xl text-white">
            Piscina
          </h1>

          <LinkButton />
        </div>

        {/* Amelier */}
        <div className="relative col-span-2 h-[267px] bg-neutral-900">
          <img
            src="/images/espacios/amelier.png"
            alt="Amelier"
            className="h-full w-full rounded-3xl object-cover brightness-75"
          />
          <h1 className="font-playfair absolute bottom-0 p-4 text-5xl text-white">
            Amelier
          </h1>

          <LinkButton />
        </div>

        {/* Restaurante */}
        <div className="relative col-span-2 h-[267px] bg-neutral-900">
          <img
            src="/images/espacios/restaurante.png"
            alt="Restaurante"
            className="h-full w-full rounded-3xl object-cover brightness-75"
          />
          <h1 className="font-playfair absolute bottom-0 p-4 text-5xl text-white">
            Restaurante
          </h1>

          <LinkButton />
        </div>
      </section>
    </main>
  )
}

// button component

function LinkButton() {
  return (
    <div className="absolute -right-2 -bottom-2 flex size-20 items-center justify-center rounded-full bg-[var(--background)] text-2xl text-white">
      <button className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-white p-2 text-2xl text-black transition hover:scale-105 active:scale-95">
        <ArrowUpRight className="size-7" />
      </button>
    </div>
  )
}
