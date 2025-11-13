"use client"

/* import Reservation from '../Reservation/Reservation' */

import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { useVideoAutoplay } from '@/lib/hooks/useVideoAutoplay'

export default function Hero() {
  const [videoError, setVideoError] = React.useState(false)
  const videoRef = useVideoAutoplay<HTMLVideoElement>({
    onPlayError: (error) => {
      console.warn('Hero video autoplay failed:', error)
    }
  })
  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        {videoError ? (
          // Fallback estático si el video no puede reproducirse en el dispositivo
          <img
            src="/images/og.jpg"
            alt="Calle Flora Background"
            className="h-full w-full object-cover opacity-[0.47]"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover opacity-[0.47]"
          >
            <source src="/videos/home.mp4" type="video/mp4" />
            {/* Formato MP4 H.264 compatible con iOS y Android */}
          </video>
        )}
      </div>

      <div className="relative flex min-h-[calc(100vh-109px)] flex-col items-center justify-center">
        <Image
          src={logo}
          alt="Calle Flora Logo"
          className="h-8 w-auto md:hidden"
        />
        <div className="mt-10 flex flex-col items-center   justify-between gap-0">
          <h1 className="font-playfair text-foreground text-center text-[4rem] font-bold 
          tracking-wide select-none sm:text-nowrap xl:text-[6.5625rem]
        lg:text-[4rem]
          ">
            El Hotel en Medellín 
          </h1>

          <div className="font-playfair text-foreground max-w-2xl text-center tracking-wide select-none">
            <span className="block text-2xl leading-snug font-light text-white/90 sm:text-2xl md:text-[2rem]">
            Inspirado en las flores<br className="md:hidden" />
              {/*<i className="font-black">flores</i>.*/}
            </span>

            {/* <span className="font-quicksand mt-2 block text-sm sm:text-base">
              — Diario de Lecumberri, Álvaro Mutis
            </span> */}

            
          </div>
        </div>
      </div>

      {/* <Reservation /> */}
    </main>
  )
}
