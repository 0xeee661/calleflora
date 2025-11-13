'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type SpaceCard = {
  title: string
  subtitle?: string
  href?: string
  url: string
  img: string
}

// Editable card border width (in pixels)
const CARD_BORDER_WIDTH_PX = 2

const SPACES: SpaceCard[] = [
  {
    title: 'Restaurante',
    href: '/restaurante',
    img: '/images/espacios/restaurante.png',
    url: '/restaurante',
  },
  {
    title: 'Rooftop',
    subtitle: 'Próximamente',
    img: '/images/rooftop.png',
    url: '/rooftop',
  },
  {
    title: 'Piscina',
    subtitle: 'Próximamente',
    img: '/images/espacios/piscina.png',
    url: '/',
  },
  {
    title: 'Gimnasio',
    subtitle: 'Próximamente',
    img: '/images/espacios/gimnasio.png',
    url: '/',
  },
  {
    title: 'Spa',
    subtitle: 'Próximamente',
    img: '/images/espacios/amelier.png',
    url: '/',
  },
]

export default function HotelSpaces() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    const children = Array.from(slider.children) as HTMLElement[]
    const target = children[current]
    if (!target) return
    // Scroll horizontally within the slider without affecting page vertical scroll
    const targetCenter = target.offsetLeft + target.offsetWidth / 2
    const containerCenter = slider.clientWidth / 2
    const newScrollLeft = Math.max(0, targetCenter - containerCenter)
    slider.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
  }, [current])

  const prev = () => setCurrent(c => (c === 0 ? SPACES.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === SPACES.length - 1 ? 0 : c + 1))

  return (
    <main
      className="h-auto pb-[10%] bg-[#2b2929] flex items-center justify-center overflow-x-hidden"
      data-section="HotelSpaces"
    >
      <div className="relative w-full px-6 max-w-7xl mx-auto flex flex-col items-center">
        {/* Controls */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex 
          h-9 w-9 items-center justify-center rounded-full bg-white/20 
          text-white backdrop-blur hover:bg-white/30 cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        
        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          className="absolute right-2 top-1/2 
          -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center 
          rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 cursor-pointer"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-6 px-8 justify-center items-center mx-auto max-w-full"
        >
          {SPACES.map((space, idx) => {
            const CardContent = ( 
              <div
                className="group relative snap-center w-[260px] 
                md:w-[340px] lg:w-[150px] xl:w-[150px] h-[420px] 
                md:h-[520px] overflow-hidden rounded-[24px] border border-white 
                shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 
                hover:w-[260px] md:hover:w-[290px] lg:hover:w-[430px] cursor-pointer"
                style={{ borderWidth: CARD_BORDER_WIDTH_PX }}
              >
                <Image
                  src={space.img}
                  alt={space.title}
                  fill
                  sizes="(max-width:768px) 80vw, 380px"
                  className="object-cover"
                  priority={idx === 0}
                />

                {/* Top-right action */}
                <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="font-playfair text-3xl md:text-4xl text-white">
                    {space.title}
                  </div>
                  <div className="text-white/80 text-sm">
                    {space.subtitle ?? (space.href ? 'Abrir' : '')}
                  </div>
                </div>
              </div>
            )

            const targetHref = space.href ?? space.url
            return targetHref ? (
              <Link
                key={space.title}
                href={space.url}
                className="focus:outline-none"
                onFocus={() => setCurrent(idx)}
                onMouseEnter={() => setCurrent(idx)}
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={space.title}
                onMouseEnter={() => setCurrent(idx)}
                className="focus:outline-none"
              >
                {CardContent}
              </div>
            )
          })}
          
        </div>
      
      </div>
    </main>
  )
}
