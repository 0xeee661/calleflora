'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { flowers } from '@/data/flowers'
import { cn } from '@/lib/utils'
import FlowerDialog from './FlowerDialog'
import { X } from 'lucide-react'
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'

// Ajustes de posición y tamaño de la flor decorativa (migrados a Tailwind)
import { DecorFlower } from '@/components/common/DecorFlower'

type RoomCarouselProps = {
  images: string[]
}

function RoomCarousel({ images }: RoomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false)
  const [zoom, setZoom] = useState<number>(1)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  )
  const [translate, setTranslate] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true)

  const showPrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }
  const showNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIsAutoPlay(false)
        showPrev()
      }
      if (e.key === 'ArrowRight') {
        setIsAutoPlay(false)
        showNext()
      }
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Autoplay cada 1s; se pausa cuando hay interacción del usuario
  useEffect(() => {
    if (!isAutoPlay) return
    const id = setInterval(() => {
      setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
    }, 1000)
    return () => clearInterval(id)
  }, [isAutoPlay, images.length])

  const openLightbox = () => {
    setIsAutoPlay(false)
    setLightboxOpen(true)
    setZoom(1)
    setTranslate({ x: 0, y: 0 })
  }
  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const next = Math.min(3, Math.max(1, zoom + (e.deltaY < 0 ? 0.2 : -0.2)))
    setZoom(next)
    if (next === 1) setTranslate({ x: 0, y: 0 })
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom === 1) return
    setDragStart({ x: e.clientX - translate.x, y: e.clientY - translate.y })
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragStart) return
    setTranslate({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
  }
  const onMouseUp = () => setDragStart(null)

  return (
    <div className="w-full mb-4">

      <div className="relative w-full max-w-[420px] aspect-[16/9] 
      overflow-hidden rounded-2xl mx-auto md:mx-0 h-[300px] cursor-pointer">
        <Image
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Habitación ${currentIndex + 1}`}
          fill
          priority
          sizes="70vw, 500px "
          className="object-cover "
          onClick={openLightbox}
        />

      
      </div>

      <div className="mt-4 flex justify-center gap-2 w-full max-w-[420px] mx-auto md:mx-0 ">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={() => {
              setIsAutoPlay(false)
              setCurrentIndex(i)
            }}
            className={cn(
              'h-2 w-2 rounded-full transition cursor-pointer hover:scale-125',
              i === currentIndex ? 'bg-white' : 'bg-white/40',
            )}
          />
        ))}
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 py-4
          "
        >
          <button
            onClick={closeLightbox}
            aria-label="Cerrar"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
            style={{ cursor: zoom > 1 ? ('grab' as const) : ('zoom-in' as const) }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Habitación ${currentIndex + 1}`}
              width={1600}
              height={900}
              className="select-none"
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoom})`,
                transition: dragStart ? 'none' : 'transform 120ms ease-out',
              }}
              draggable={false}
            />
          </div>

        </div>
      )}
    </div>
  )
}

export default function Habitacion() {
  const [selectedFlower, setSelectedFlower] = useState<
    (typeof flowers)[0] | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const habitacionRef = useRef<HTMLElement>(null)

  // Removed unused handleFlowerClick to satisfy linter

  const handleCloseModal = () => {
    setIsModalOpen(false)

    setTimeout(() => {
      setSelectedFlower(null)
    }, 500)
  }

  const arrowRotationDeg = 270

  return (
    <main
      ref={habitacionRef}
      className="lg:h-[80vh] h-[100vh] bg-[#2b2929] flex items-center justify-center"
      data-section="building"
    >

      <div className='bg-[#201f1f] xl:w-[80%] w-[90%] lg:h-[65vh] h-[90vh] mx-[5%] rounded-3xl
      flex flex-col md:flex-row items-center justify-center gap-8 relative'>

        {/* Capa de opacidad sobre toda la sección */}
        <div className="absolute inset-0 bg-black pointer-events-none z-[1]" style={{ opacity: 0.3 }} />

        <div className=" w-full md:w-1/2 flex flex-col 
        items-start justify-center  
        relative text-left z-[1] ">
          <DecorFlower
            src="/images/newResources/florA.png"
            top="-175%"
            right="10%"
            rightLg="-10%"
            width={800}
            height={700}
            overlayOpacity={0}
            priority={false}
            className="z-[10]"
          />

          <div className='flex flex-col items-end justify-center w-full'>
          <div className='font-playfair font-normal
          text-[24px]  md:text-[26px] lg:text-[32px] xl:text-[36px] leading-[100%] 
          -mt-20 lg:-mt-20'>
            <p>Cada habitación</p>
            <p>es una experiencia</p>
            <p>floral</p>
          </div>
          <div className='font-playfair
          text-[24px] md:text-[26px] lg:text-[32px] xl:text-[36px] lg:pr-4 font-normal
          pt-4 -mt-16 lg:-mt-2 font-thin leading-[100%]'>
            <p>Conoce nuestras</p>
            <p>habitaciones</p>
            <p>y sus amenidades</p>
          </div>
          </div>

        </div>

        <div className="border-red-50 w-full md:w-1/2 z-[2]">

          {/* Carousel con zoom */}
          {(() => {
            const carouselImages: string[] = [
              '/images/room/1.jpg',
              '/images/room/2.jpg',
              '/images/room/3.jpg',
              '/images/room/4.jpg',
              '/images/room/5.jpg',
              '/images/room/6.jpg',
            ]
            return <RoomCarousel images={carouselImages} />
          })()}

          <div className='border-red-50 w-full  mx-auto md:mx-0 text-center mt-4
          flex gap-4 justify-end 
          xl:pr-[40%] lg:pr-[22%] pr-0 flex flex-col lg:flex-row 
          items-center lg:items-end pt-2 lg:pt-0'>
            <p className='text-white font-quicksand text-[24px] leading-[100%]'>
              Conocer Habitaciones</p>
            <Link
            href="/habitaciones"
            className="flex size-9 items-center justify-center rounded-full 
            bg-white shadow-lg transition hover:scale-105 active:scale-95 max-md:mb-8"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)', 
              transform: `rotate(${arrowRotationDeg}deg)` }}
            aria-label="Siguiente"
          >
            <ArrowDownRight className="size-6 font-light text-black" />
          </Link>
          </div>
        </div>


      </div>

      <FlowerDialog
        flower={selectedFlower}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        buildingRef={habitacionRef}
      />
    </main>
  )
}
