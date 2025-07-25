'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { experiencias } from '@/data/experiencias'

import { ArrowUpRight, CarFront, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function ExperienciasCarousel() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(2)
  const total = experiencias.length

  // Get the visible images, wrapping around
  const getVisibleImages = () => {
    return Array.from(
      { length: visible },
      (_, i) => experiencias[(current + i) % total],
    )
  }

  const goTo = (idx: number) => setCurrent((idx + total) % total)
  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  React.useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisible(1)
      } else if (window.innerWidth < 1024) {
        setVisible(2)
      } else {
        setVisible(4)
      }
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
      <div className="relative flex w-full items-center justify-center gap-4">
        <button
          aria-label="Anterior"
          onClick={prev}
          className="absolute top-1/2 left-0 z-10 size-10 -translate-y-1/2 cursor-pointer rounded-full p-2 text-3xl text-white transition hover:bg-black/60"
        >
          <ChevronLeft />
        </button>

        <div className="flex w-full justify-center gap-4 px-16">
          {getVisibleImages().map((item, idx) => {
            const isSelected = idx === 0
            return (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-3xl border-4 border-white"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={isSelected ? 415 : 200}
                  height={608}
                  className={`h-[400px] max-h-[608px] object-cover brightness-[60%] transition-all duration-300 md:h-[608px] ${isSelected ? 'w-[415px]' : 'w-[200px]'}`}
                />
                {isSelected ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeOut',
                        delay: 0.25,
                      }}
                      className="font-playfair absolute right-0 bottom-5 left-0 space-y-2 p-4"
                    >
                      <h3 className="text-4xl uppercase italic md:text-6xl">
                        {item.title}
                      </h3>

                      <p className="w-4/5 text-sm md:text-lg">
                        {item.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.25,
                        ease: 'easeOut',
                      }}
                      className="absolute top-5 left-4 flex items-center gap-2 rounded-full border-2 px-5 py-2"
                    >
                      <CarFront className="size-5 md:size-6" />

                      <p className="font-quicksand text-sm font-semibold md:text-base">
                        {item.distance}
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute right-0 bottom-4 left-0 p-4"
                  >
                    <h3 className="font-playfair text-xl uppercase italic md:text-2xl">
                      {item.title}
                    </h3>
                  </motion.div>
                )}

                <Link
                  href={`/experiencias/${item.id}`}
                  className="absolute top-5 right-4 size-11 cursor-pointer rounded-full bg-white p-2 text-3xl text-black transition hover:bg-white/80"
                >
                  <ArrowUpRight className="size-7" />
                </Link>
              </div>
            )
          })}
        </div>

        <button
          aria-label="Siguiente"
          onClick={next}
          className="absolute top-1/2 right-0 z-10 size-10 -translate-y-1/2 cursor-pointer rounded-full p-2 text-3xl text-white transition hover:bg-black/60"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
