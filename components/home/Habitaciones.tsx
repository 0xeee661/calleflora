'use client'
import { ArrowDownRight } from 'lucide-react'
import Link from 'next/link'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { useVideoAutoplay } from '@/lib/hooks/useVideoAutoplay'

export default function Habitaciones() {
  const videoRef = useVideoAutoplay<HTMLVideoElement>()
  const dataSource = [
    {
      sourceId: 1, // needed to connect following data with Item component
      original: '/images/room/1.jpg',
      thumbnail: '/images/room/1.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 2, // needed to connect following data with Item component
      original: '/images/room/2.jpg',
      thumbnail: '/images/room/2.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 3, // needed to connect following data with Item component
      original: '/images/room/3.jpg',
      thumbnail: '/images/room/3.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 4, // needed to connect following data with Item component
      original: '/images/room/4.jpg',
      thumbnail: '/images/room/4.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 5, // needed to connect following data with Item component
      original: '/images/room/5.jpg',
      thumbnail: '/images/room/5.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 6, // needed to connect following data with Item component
      original: '/images/room/6.jpg',
      thumbnail: '/images/room/6.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 7, // needed to connect following data with Item component
      original: '/images/room/7.jpg',
      thumbnail: '/images/room/7.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 8, // needed to connect following data with Item component
      original: '/images/room/8.jpg',
      thumbnail: '/images/room/8.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 9, // needed to connect following data with Item component
      original: '/images/room/9.jpg',
      thumbnail: '/images/room/9.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 10, // needed to connect following data with Item component
      original: '/images/room/10.jpg',
      thumbnail: '/images/room/10.jpg',
      width: '1450',
      height: '966',
    },
    {
      sourceId: 11, // needed to connect following data with Item component
      original: '/images/room/11.jpg',
      thumbnail: '/images/room/11.jpg',
      width: '1450',
      height: '966',
    },
  ]

  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src="/videos/habitaciones.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-[0.47]"
        />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="relative mt-20 flex w-5/6 flex-col items-start justify-between gap-14">
          <h1 className="font-playfair text-foreground text-8xl tracking-wide select-none sm:text-nowrap lg:text-9xl 2xl:text-[170px]">
            ORQU<i>I</i> <br />
            <i>DEA</i>
          </h1>

          <div className="font-playfair text-foreground relative max-w-2xl text-start tracking-wide select-none">
            <span className="block text-xl leading-snug font-light text-white/90 sm:text-2xl">
              “En esta <i className="font-semibold">habitación</i> <br />
              el tiempo se posa suave, <br />
              como <i className="font-semibold">orquídea en rama</i>, <br />
              como voz que no se apura”.
            </span>

            <Gallery dataSource={dataSource}>
              <Item
                sourceId={1} // needed to connect Item component with data from dataSource
              >
                {({ ref, open }) => (
                  <button
                    ref={ref}
                    onClick={open}
                    className="mt-4 cursor-pointer rounded-md bg-white px-4 py-2 text-black"
                  >
                    Ver Galería
                  </button>
                )}
              </Item>
            </Gallery>
          </div>

          <Link
            href="/"
            className="absolute right-0 bottom-0 z-20 flex size-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 active:scale-95 sm:size-16"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            aria-label="Siguiente"
          >
            <ArrowDownRight className="size-6 font-light text-black sm:size-9" />
          </Link>
        </div>
      </div>
    </main>
  )
}
