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
    <main ref={buildingRef} className="relative mt-30 min-h-screen snap-start">
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

      <div className="relative mx-auto flex min-h-[calc(100vh-109px)] max-w-3xl flex-col items-center justify-center">
        <Image
          src="/images/building/building.png"
          alt="Building"
          className="mr-[30%] h-auto w-auto"
          width={1920}
          height={1080}
        />

        <div className="absolute right-24 bottom-[24%] flex flex-col items-center justify-center gap-[52px]">
          {flowers.map(flower => (
            <div
              key={flower.name}
              onClick={() => handleFlowerClick(flower)}
              className={cn(
                `group flex max-w-[50px] flex-col items-center gap-2 transition-all duration-300 hover:scale-150 hover:cursor-pointer`,
                flower.class,
                selectedFlower?.name === flower.name && 'scale-150',
              )}
              title={`Haz clic para conocer más sobre ${flower.name}`}
            >
              <img
                src={flower.image}
                alt={flower.name}
                className="h-full w-full object-cover transition-all duration-300 group-hover:drop-shadow-[0_12px_32px_rgba(255,255,255,0.6)]"
                style={{
                  filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.45))',
                }}
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
