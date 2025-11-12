'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Sun, Moon, Coffee, ArrowUpRight } from 'lucide-react'

interface Flower {
  name: string
  image: string
  imageNoBg: string
  description: string
}

interface FlowerDialogProps {
  flower: Flower | null
  isOpen: boolean
  onClose: () => void
  buildingRef?: React.RefObject<HTMLElement | null>
}

export default function FlowerDialog({
  flower,
  isOpen,
  onClose,
  buildingRef,
}: FlowerDialogProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    if (!buildingRef?.current || !isOpen) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && isOpen) {
            onClose()
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px',
      },
    )

    observer.observe(buildingRef.current)

    return () => {
      observer.disconnect()
    }
  }, [buildingRef, isOpen, onClose])

  if (!flower || !isVisible) return null

  return (
    <div className="fixed z-40">
      <div
        className={`fixed top-1/2 left-[12%] w-[80%] -translate-y-1/2 transform transition-all duration-500 md:w-96 ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div
          className="relative h-full min-h-[300px] rounded-4xl bg-black md:min-h-[524px]"
          style={{
            filter: 'drop-shadow(0 8px 24px rgba(255,255,255,0.45))',
          }}
        >
          <button
            onClick={onClose}
            className="pointer-events-auto absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-90 hover:bg-white/20 md:hidden"
          >
            <X size={18} />
          </button>

          <div className="grid min-h-[300px] md:min-h-[524px] md:grid-cols-[1fr_250px] md:gap-4">
            <div className="relative">
              <div className="top-0 -left-7 h-[300px] w-full md:absolute md:-left-48 md:h-[524px] md:w-[380px]">
                <Image
                  src={flower.imageNoBg}
                  alt={flower.name}
                  fill
                  className="object-contain max-md:p-8 max-md:pb-0"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 p-6 md:px-6 md:py-9">
              {/* Top icons row - Sun, Moon, Coffee */}
              <div className="mb-4 flex justify-end gap-4 md:gap-7">
                <div className="rounded-full p-2 backdrop-blur-sm">
                  <Sun className="size-6 text-white md:size-8" />
                </div>
                <div className="rounded-full p-2 backdrop-blur-sm">
                  <Moon className="size-6 text-white md:size-8" />
                </div>
                <div className="rounded-full p-2 backdrop-blur-sm">
                  <Coffee className="size-6 text-white md:size-8" />
                </div>
              </div>

              <p className="font-playfair text-base font-medium text-pretty text-white md:text-3xl">
                Elige{' '}
                <span className="font-bold italic">
                  {flower.name.toLowerCase()}
                </span>{' '}
                si amas sin medida y tu forma de cuidar es tu mayor.
              </p>

              <div className="flex items-center justify-end gap-2 md:justify-start md:gap-4">
                <p className="font-quicksand text-base font-medium text-white md:text-xl">
                  Conocer piso
                </p>
                <Link
                  href={`/experiencias/${flower.name}`}
                  className="size-10 cursor-pointer rounded-full bg-white p-2 text-base text-black transition hover:bg-white/80 md:size-11 md:text-2xl"
                >
                  <ArrowUpRight className="size-6 md:size-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
