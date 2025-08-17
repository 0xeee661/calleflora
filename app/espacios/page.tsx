import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function EspaciosPage() {
  const flowers = [
    {
      name: 'Protea',
      image: '/flores/PROTEA.png',
      class: 'md:col-start-1',
    },
    {
      name: 'Gerbera',
      image: '/flores/GERBERA.png',
      class: 'md:col-start-3',
    },
    {
      name: 'Orquídea',
      image: '/flores/ORQUIDEA.png',
      class: 'md:col-start-5',
    },
    {
      name: 'Anturio',
      image: '/flores/ANTURIO.png',
      class: 'md:col-start-7',
    },
    {
      name: 'Heliconia',
      image: '/flores/HELICONIA.png',
      class: 'md:col-start-2',
    },
    {
      name: 'Passiflora',
      image: '/flores/PASSIFLORA.png',
      class: 'md:col-start-4',
    },
    {
      name: 'Flor Mariposa',
      image: '/flores/FLOR-MARIPOSA.png',
      class: 'md:col-start-6',
    },
    {
      name: 'Cardo Azul',
      image: '/flores/CARDO-AZUL.png',
      class: 'md:col-start-3',
    },
    {
      name: 'Delfinios',
      image: '/flores/DELFINIOS.png',
      class: 'md:col-start-5',
    },
  ]

  const spaces = [
    {
      name: 'Gimnasio',
      image: '/images/espacios/gimnasio.png',
      additionalClass: 'md:col-span-1 md:row-span-2 md:h-auto',
    },
    {
      name: 'Piscina',
      image: '/images/espacios/piscina.png',
      additionalClass: 'md:col-span-1 md:row-span-2 md:h-auto',
    },
    {
      name: 'Amelier',
      image: '/images/espacios/amelier.png',
    },
    {
      name: 'Restaurante',
      image: '/images/espacios/restaurante.png',
    },
  ]

  return (
    <main>
      <section className="relative h-[60vh] snap-start md:h-screen">
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
          <p className="font-playfair max-w-2xl px-8 text-center text-2xl md:text-3xl">
            <i className="font-semibold">Calle Flora</i> no es un solo lugar: es
            un conjunto de <i className="font-semibold">atmósferas</i> que
            florecen a su propio ritmo.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 py-24 max-md:relative md:grid-cols-2 md:px-8 xl:grid-cols-[370px_1fr]">
        <div className="z-20 flex flex-col items-end gap-4 pr-5 md:items-start">
          <div>
            <h2 className="font-playfair text-right text-5xl font-normal sm:text-5xl md:text-left md:text-6xl">
              Fachada
            </h2>

            <h3 className="font-playfair mt-4 text-right text-5xl font-semibold italic sm:text-5xl md:text-left md:text-6xl">
              Kinética
            </h3>
          </div>

          <p className="font-playfair mt-5 max-w-2/3 text-right text-xl leading-relaxed text-pretty italic sm:text-2xl md:max-w-full md:text-left md:text-3xl">
            Uno de los mayores atractivos y diferenciales del hotel, son sus
            ventanas y su apertura. La fachada kinética se asemeja a flores, que
            al estar totalmente abiertas, sin duda hacen que los transeuntes y
            curiosos quieran conocer más de un hotel icónico y representativo de
            Medellín, la ciudad de las flores.
          </p>
        </div>

        <div className="absolute inset-0 z-10 w-full md:relative md:h-[850px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover align-top opacity-40 md:opacity-100"
          >
            <source src="/videos/fachada-espacios.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 w-full bg-gradient-to-b from-transparent via-transparent via-40% to-[var(--background)]" />
          <div className="absolute inset-0 z-10 w-full bg-gradient-to-t from-transparent via-transparent via-40% to-[var(--background)]" />
        </div>
      </section>

      <section className="px-8 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fill,minmax(150px,1fr))] items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-7 md:grid-rows-3">
          {flowers.map(flower => (
            <div
              key={flower.name}
              className={cn(
                `flex flex-col items-center gap-2 md:min-w-[150px]`,
                flower.class,
              )}
            >
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
        {spaces.map(space => (
          <div
            key={space.name}
            className={cn(
              'relative col-span-2 h-[267px] bg-neutral-900',
              space.additionalClass,
            )}
          >
            <img
              src={space.image}
              alt={`${space.name} imagen`}
              className="h-full w-full rounded-3xl object-cover brightness-75"
            />
            <h1 className="font-playfair absolute bottom-0 p-4 text-3xl text-white sm:text-5xl">
              {space.name}
            </h1>

            <LinkButton />
          </div>
        ))}
      </section>
    </main>
  )
}

// button component

function LinkButton() {
  return (
    <div className="absolute -right-2 -bottom-2 flex size-16 items-center justify-center rounded-full bg-[var(--background)] text-2xl text-white sm:size-20">
      <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white p-2 text-2xl text-black transition hover:scale-105 active:scale-95 sm:size-14">
        <ArrowUpRight className="size-7" />
      </button>
    </div>
  )
}
