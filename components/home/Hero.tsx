"use client"

/* import Reservation from '../Reservation/Reservation' */

import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Hero() {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const [videoError, setVideoError] = React.useState(false)

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Try to play; if it fails (format/autoplay), fallback to image
    const tryPlay = async () => {
      try {
        // iOS/Android autoplay requires muted + playsInline
        v.muted = true
        ;(v as HTMLVideoElement & { playsInline?: boolean }).playsInline = true
        v.setAttribute('playsinline', '')
        v.setAttribute('muted', '')
        await v.play()
      } catch {
        setVideoError(true)
      }
    }
    // If metadata not ready, attempt after canplay
    if (v.readyState < 2) {
      const onCanPlay = () => tryPlay()
      v.addEventListener('canplay', onCanPlay, { once: true })
      return () => v.removeEventListener('canplay', onCanPlay)
    } else {
      void tryPlay()
    }
    // As a fallback on iOS: trigger play on first user interaction
    const onUserInteract = () => {
      void tryPlay()
      document.removeEventListener('touchstart', onUserInteract)
      document.removeEventListener('click', onUserInteract)
    }
    document.addEventListener('touchstart', onUserInteract, { once: true })
    document.addEventListener('click', onUserInteract, { once: true })
    return () => {
      document.removeEventListener('touchstart', onUserInteract)
      document.removeEventListener('click', onUserInteract)
    }
  }, [])
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
            src="/videos/home.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover opacity-[0.47]"
          >
            {/* Si el navegador no soporta el formato, mostrará el fallback */}
          </video>
        )}
      </div>

      <div className="relative flex min-h-[calc(100vh-109px)] flex-col items-center justify-center">
        <Image
          src={logo}
          alt="Calle Flora Logo"
          className="h-8 w-auto md:hidden"
        />
        <div className="mt-10 flex flex-col items-center justify-between gap-0">
          <h1 className="font-playfair text-foreground text-center text-[4rem] font-bold tracking-wide select-none sm:text-nowrap md:text-[6.5625rem]">
            UN HO<span className="font-semibold italic">TEL</span>
          </h1>

          <div className="font-playfair text-foreground max-w-2xl text-center tracking-wide select-none">
            <span className="block text-2xl leading-snug font-light text-white/90 sm:text-2xl md:text-[2rem]">
              que hace homenaje a la <br className="md:hidden" />
              <i className="font-black">eterna primavera</i>.
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
