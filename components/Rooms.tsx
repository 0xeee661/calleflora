
'use client'

import { Maybe, Room } from '@/types/graphql/graphql'
import { useState, useEffect, useRef } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { applyItalicPattern } from '@/lib/utils'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import NavDrawer from '@/components/Navbar/NavDrawer/NavDrawer'

type ArrowProps = {
  className: string
  style: React.CSSProperties
  onClick: () => void
}
function SampleNextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <IoIosArrowForward
      className={className}
      style={style}
      onClick={onClick}
      color="white"
    />
  )
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <IoIosArrowBack
      className={className}
      style={style}
      onClick={onClick}
      color="white"
    />
  )
}

export const Rooms = ({ rooms }: { rooms: Maybe<Room>[] }) => {
  const [currentRoom, setCurrentRoom] = useState<Room | null>(rooms[0] || null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const hasRooms = Array.isArray(rooms) && rooms.length > 0

  // Alias visibles en el menú sin afectar el tipo real (selección sigue usando room.type)
  const NAV_ALIAS: Record<string, string> = {
    'XS': 'Signature Bath',
    'S': 'Grand Studio',
    'M' : 'Studio',
    'J': 'Grand',
    'U': 'Urban',
    'P': 'Petite',
  }
  
  // Autoplay logic for iOS Chrome
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hasPlayed = false

    const tryPlay = async () => {
      if (hasPlayed || !video) return

      try {
        video.muted = true
        video.playsInline = true
        video.defaultMuted = true
        video.setAttribute('playsinline', '')
        video.setAttribute('webkit-playsinline', 'true')

        await video.play()
        hasPlayed = true
      } catch (error) {
        console.warn('[Rooms] Video autoplay failed:', error)
      }
    }

    // Try immediately if ready
    if (video.readyState >= 2) {
      void tryPlay()
    }

    // Try when can play
    const onCanPlay = () => void tryPlay()
    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('loadeddata', onCanPlay)

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video && !hasPlayed) {
            void tryPlay()
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(video)

    // User interaction
    const events = ['touchstart', 'click', 'scroll']
    const onUserInteract = () => {
      if (!hasPlayed) void tryPlay()
      events.forEach(e => document.removeEventListener(e, onUserInteract))
    }

    events.forEach(e => {
      document.addEventListener(e, onUserInteract, { once: true, passive: true })
    })

    // Cleanup
    return () => {
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('loadeddata', onCanPlay)
      observer.disconnect()
      events.forEach(e => document.removeEventListener(e, onUserInteract))
    }
  }, [currentRoom])
  
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="" style={{}} onClick={() => {}} />,
    prevArrow: <SamplePrevArrow className="" style={{}} onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (!hasRooms) {
    return (
      <section className="relative min-h-screen snap-start flex items-center justify-center p-8">
        <p className="font-playfair text-2xl text-white/80 text-center">
          No hay habitaciones disponibles por el momento.
        </p>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen snap-start pt-16">
      {/* Menú flotante de 3 puntos para habitaciones */}
      <div className="absolute left-4 top-4 z-[50]">
        <NavDrawer />
      </div>
      <AnimatePresence mode="wait">
        {currentRoom && (
          <motion.video
            key={currentRoom.type}
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full min-h-screen w-full object-cover align-top"
            poster={currentRoom.poster?.url || undefined}
          >
            {currentRoom.background?.url && (
              <source src={currentRoom.background?.url} type="video/mp4" />
            )}
          </motion.video>
        )}
      </AnimatePresence>

      <nav className="absolute right-8 top-1/4 z-10 flex flex-col items-end gap-6">
        {rooms.map(room => (
          <motion.button
            key={room?.type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentRoom(room)}
            className={`font-quicksand text-[2rem] transition-all duration-300 text-right ${
              currentRoom?.type === room?.type ? 'underline' : 'hover:underline'
            }`}
          >
            {NAV_ALIAS[room?.type ?? ''] ?? room?.type}
          </motion.button>
        ))}
      </nav>

      <div className="relative z-1 flex h-full flex-col gap-8 p-4 py-50 pb-20 md:justify-end md:p-16">
        <AnimatePresence mode="wait">
          {currentRoom && (
            <motion.div
              key={currentRoom.type}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="my-16 flex flex-col items-center justify-start gap-4 md:my-0 md:flex-row"
            >
              {currentRoom?.imageLetter?.url && (
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src={currentRoom?.imageLetter?.url}
                  alt={`Flor de la habitación ${currentRoom?.type}`}
                  className="h-96"
                />
              )}
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-playfair max-w-[356px] text-center md:text-left md:text-2xl"
              >
                {applyItalicPattern(currentRoom?.description || '')}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentRoom?.imagesCollection?.items && (
            <motion.div
              key={currentRoom.type}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Gallery>
                <Slider
                  {...settings}
                  className="mr-auto w-full max-w-[754px] gap-[20px] px-5"
                >
                  {currentRoom?.imagesCollection?.items?.map(
                    (image, index) =>
                      image?.url && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.5 + index * 0.1,
                            ease: 'easeOut',
                          }}
                        >
                          <Item
                            original={image?.url || ''}
                            thumbnail={image?.url || ''}
                            width={image?.width || 0}
                            height={image?.height || 0}
                          >
                            {({ ref, open }) => (
                              <motion.img
                                ref={ref}
                                onClick={open}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                src={image?.url || ''}
                                alt={`photo-${index + 1}`}
                                width={image?.width || 0}
                                height={image?.height || 0}
                                className="h-[103px] w-full cursor-pointer rounded-[20px] object-cover md:h-40"
                              />
                            )}
                          </Item>
                        </motion.div>
                      ),
                  )}
                </Slider>
              </Gallery>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          src="/images/logo.png"
          alt="Calle Flora Logo"
          width={200}
          height={32}
          className="mx-auto h-8 w-max md:hidden"
        />
      </div>
    </section>
  )
}
