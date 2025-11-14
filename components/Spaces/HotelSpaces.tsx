'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

type SpaceCard = {
  title: string
  description: string[]
  href?: string
  url: string
  img: string
}

// ========================================
// CONFIGURACIÓN EDITABLE
// ========================================

// Grosor del borde de las tarjetas (en píxeles)
const CARD_BORDER_WIDTH_PX = 2

// Tamaño de texto cuando la imagen NO está expandida
const TEXT_SIZE_COLLAPSED = {
  title: 'text-2xl md:text-3xl',       // Tamaño del título colapsado
  description: 'text-xs md:text-sm',   // Tamaño de la descripción colapsada
}

// Tamaño de texto cuando la imagen ESTÁ expandida (hover)
const TEXT_SIZE_EXPANDED = {
  title: 'text-4xl md:text-5xl',       // Tamaño del título expandido
  description: 'text-base md:text-lg', // Tamaño de la descripción expandida
}

// Contenido de cada espacio (EDITABLE)
const SPACES: SpaceCard[] = [
  {
    title: 'Restaurante',
    description: [
      'Amelier Lounge',
      'Cocina con Alma | Coctelería',
      'Consciente | Café de Especialidad',
    ],
    href: '/restaurante',
    img: '/images/espacios/restaurante.png',
    url: '/restaurante',
  },
  {
    title: 'Rooftop',
    description: [
      'Próximamente',
      'Vista panorámica',
      'Bar & Lounge',
    ],
    img: '/images/rooftop.png',
    url: '/rooftop',
  },
  {
    title: 'Piscina',
    description: [
      'Próximamente',
      'Área de relajación',
      'Servicio de toallas',
    ],
    img: '/images/espacios/piscina.png',
    url: '/',
  },
  {
    title: 'Gimnasio',
    description: [
      'Próximamente',
      'Equipamiento moderno',
      '24/7 disponible',
    ],
    img: '/images/espacios/gimnasio.png',
    url: '/',
  },
  {
    title: 'Spa',
    description: [
      'Próximamente',
      'Tratamientos exclusivos',
      'Zona de bienestar',
    ],
    img: '/images/espacios/amelier.png',
    url: '/',
  },
]

export default function HotelSpaces() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0) // Primera imagen (índice 0) abierta por defecto
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0) // Primer elemento expandido por defecto

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
      className="relative h-auto pb-[10%]  flex items-center justify-center overflow-x-hidden"
      data-section="HotelSpaces"
    >
      {/* Fondo de imagen del hotel con opacidad */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/room/5.jpg"
          alt="Calle Flora Hotel"
          fill
          priority={false}
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      <div className="relative w-full px-4 md:px-6 max-w-7xl mx-auto flex flex-col items-center pt-16 md:pt-24">
        {/* Controles solo en desktop (cuando el layout es horizontal) */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 
          h-9 w-9 items-center justify-center rounded-full bg-white/20 
          text-white backdrop-blur hover:bg-white/30 cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        
        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          className="hidden lg:flex absolute right-2 top-1/2 
          -translate-y-1/2 z-10 h-9 w-9 items-center justify-center 
          rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 cursor-pointer"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        {/* Slider: vertical en mobile / tablet, horizontal sólo en desktop */}
        <div
          ref={sliderRef}
          className="flex flex-col lg:flex-row lg:snap-x lg:snap-mandatory 
          overflow-visible lg:overflow-x-auto scrollbar-hide gap-6 px-2 md:px-8 
          items-stretch mx-auto max-w-full"
        >
          {SPACES.map((space, idx) => {
            const isExpanded = hoveredIndex === idx
            const CardContent = ( 
              <div
                className={`group relative lg:snap-center h-[360px] 
                lg:h-[520px] overflow-hidden rounded-[24px] border border-white 
                shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer
                ${isExpanded 
                  ? 'w-[90vw] max-w-[540px] lg:w-[430px]' 
                  : 'w-[90vw] max-w-[540px] lg:w-[120px] xl:w-[150px]'
                }`}
                style={{ borderWidth: CARD_BORDER_WIDTH_PX }}
                onMouseEnter={() => setHoveredIndex(idx)}
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
                <div className={`absolute right-3 top-3 transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom overlay con texto siempre visible */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pb-8">
                  <h3 className={`font-playfair font-bold text-white mb-3 transition-all duration-300 ${
                    isExpanded ? TEXT_SIZE_EXPANDED.title : TEXT_SIZE_COLLAPSED.title
                  }`}>
                    {space.title}
                  </h3>
                  <div className={`font-quicksand text-white/90 space-y-1 transition-all duration-300 ${
                    isExpanded ? TEXT_SIZE_EXPANDED.description : TEXT_SIZE_COLLAPSED.description
                  }`}>
                    {space.description.map((line, i) => (
                      <p key={i} className={`leading-snug ${i === 0 ? 'font-bold' : ''}`}>
                        {line}
                      </p>
                    ))}
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
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={space.title}
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
