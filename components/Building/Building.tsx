'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { flowers } from '@/data/flowers'
import { cn } from '@/lib/utils'
import FlowerDialog from './FlowerDialog'

export default function Building() {
  const [selectedFlower, setSelectedFlower] = useState<
    (typeof flowers)[0] | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const buildingRef = useRef<HTMLElement>(null)

  const handleFlowerClick = (flower: (typeof flowers)[0]) => {
    setSelectedFlower(flower)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)

    setTimeout(() => {
      setSelectedFlower(null)
    }, 500)
  }

  return (
    <main
      ref={buildingRef}
      className="relative mt-14 min-h-screen snap-start md:mt-30"
      data-section="building"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/building/building-bg.png"
          alt="Building"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/70 via-40% to-transparent" />

      {/* align vertical center */}
      <div className="mx-auto grid max-w-5xl gap-2 px-8 md:grid-cols-2 md:px-10">
        <div className="flex flex-col items-end md:items-center">
          <p className="font-playfair text-end text-2xl md:text-start md:text-3xl">
            Cada piso es una{' '}
            <span
              className="font-bold"
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
            >
              experiencia
            </span>
          </p>
          <p className="font-playfair text-6xl md:text-9xl">Floral</p>
        </div>

        <div className="font-playfair hidden items-center text-end text-2xl font-semibold text-balance text-white italic md:flex">
          Cada Piso una flor, una mezcla de colores, aromas y texturas que hacen
          de cada estadía, una experiencia única.
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-109px)] max-w-3xl flex-col items-center justify-center">
        <Image
          src="/images/building/building.png"
          alt="Building"
          className="mr-[30%] h-auto max-md:w-[80%] md:mt-40 md:w-full"
          priority
          width={1920}
          height={1080}
        />

        <div className="absolute right-[12%] bottom-[24%] flex flex-col items-center justify-center gap-6 sm:right-12 sm:gap-[52px]">
          {flowers.map(flower => (
            <div
              key={flower.name}
              onClick={() => handleFlowerClick(flower)}
              className={cn(
                `group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-150 hover:cursor-pointer`,
                flower.class,
                selectedFlower?.name === flower.name && 'scale-150',
              )}
              title={`Haz clic para conocer más sobre ${flower.name}`}
            >
              <Image
                src={flower.image}
                alt={flower.name}
                className="h-[30px] w-[30px] object-cover transition-all duration-300 group-hover:drop-shadow-[0_12px_32px_rgba(255,255,255,0.6)] sm:h-[50px] sm:w-[50px]"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.45))',
                }}
                priority
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>

      <FlowerDialog
        flower={selectedFlower}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        buildingRef={buildingRef}
      />
    </main>
  )
}
