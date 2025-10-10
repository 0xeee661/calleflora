import { experiencias } from '@/data/experiencias'
import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import MapModal from '@/components/MapModal/MapModal'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ExperienciaPage({ params }: Props) {
  const { slug } = await params

  const experiencia = experiencias.find(exp => exp.id === Number(slug))

  return (
    <section className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-transparent to-[var(--background)] pt-32 md:pt-36">
      <div className="absolute -right-40 -bottom-36 -z-10">
        <Image
          src="/images/experiencias/experiencias-item-bg.png"
          alt="Contacto background"
          className="rotate-y-180 opacity-50 lg:opacity-80"
          priority
          width={602}
          height={1069}
        />
      </div>

      <Link
        href="/experiencias"
        className="absolute top-32 left-6 z-10 cursor-pointer rounded-full p-2 text-white transition hover:bg-black/60 md:top-36"
      >
        <ChevronLeft className="size-7" />
      </Link>

      <div className="mx-auto grid max-w-2xl gap-6 px-8 md:max-w-6xl md:grid-cols-2 xl:grid-cols-[415px_1fr] xl:gap-10">
        <div className="relative h-[500px] overflow-hidden rounded-3xl border-4 border-white md:h-[610px] md:w-full xl:w-[415px]">
          <Image
            src={experiencia?.image || ''}
            alt={experiencia?.title || ''}
            fill
            className="object-cover brightness-75"
          />
        </div>

        <div className="font-playfair relative space-y-10">
          <h1 className="text-6xl uppercase lg:text-8xl">
            {experiencia?.fullTitle}
          </h1>

          <div className="space-y-4">
            <p className="text-lg text-pretty md:max-w-96">
              {experiencia?.fullDescription}
            </p>

            <MapModal
              mapImage={experiencia?.mapImage || ''}
              recommendations={experiencia?.recommendations || []}
            />
          </div>

          <div className="right-0 bottom-0 flex w-fit items-center gap-3 md:absolute">
            <div className="size-10 cursor-pointer rounded-full bg-white p-2 text-3xl text-black transition hover:bg-white/80">
              <ArrowUpRight className="size-6" />
            </div>

            <p className="font-quicksand text-lg font-semibold md:pr-6 md:text-xl">
              Saber más información
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
