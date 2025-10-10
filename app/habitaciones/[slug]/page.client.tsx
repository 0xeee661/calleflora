'use client'

import { useRef, useState } from 'react'
import { Maybe, Room } from '@/types/graphql/graphql'
import { bookingLink } from '@/constants/app'
import { TfiControlPause, TfiControlPlay } from 'react-icons/tfi'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { applyItalicPattern } from '@/lib/utils'
import { PrimaryButton } from '@/components/Button/PrimaryButton'
import { GoArrowDownRight } from 'react-icons/go'

export const RoomPage = ({ room }: { room: Maybe<Room> }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [openAccordion, setOpenAccordion] = useState<'amenities' | 'services'>(
    'amenities',
  )

  const handlePlayPause = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleAccordion = (section: 'amenities' | 'services') => {
    setOpenAccordion(section)
  }

  return (
    <main>
      <section className="relative h-screen snap-start">
        {room?.background?.url && (
          <>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full min-h-screen w-full object-cover align-top opacity-40"
              poster={room.background?.url}
            >
              <source src={room.background?.url} type="video/mp4" />
            </video>
            {/* Overlay for play and reservar buttons */}
            <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]">
              {/* Play Button */}
              <button
                onClick={handlePlayPause}
                className="mb-[40px] flex h-21 w-21 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:bg-white/10"
                aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              >
                {isPlaying ? (
                  <TfiControlPause size={40} color="white" />
                ) : (
                  <TfiControlPlay size={40} color="white" />
                )}
              </button>
              {/* Reservar Button */}
              <PrimaryButton
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                RESERVAR
              </PrimaryButton>
            </div>
          </>
        )}
      </section>
      <section className="relative z-1 mx-auto my-20 grid max-w-[85%] grid-cols-1 gap-8 lg:mt-50 lg:mb-80 lg:max-w-6xl lg:grid-cols-[2fr_1.6fr]">
        <div className="relative z-1 flex flex-col gap-[38px]">
          <p className="font-playfair text-4xl lg:text-6xl">
            {applyItalicPattern(room?.message || '')}
          </p>
          <div className="flex gap-[38px]">
            <PrimaryButton
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              RESERVAR
            </PrimaryButton>
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-white transition hover:bg-white/10"
            >
              <GoArrowDownRight size={40} color="#000" />
            </a>
          </div>
        </div>
        {room?.flower1?.url && (
          <div className="row-start-1 flex items-center justify-center lg:row-start-auto">
            <img
              src={room.flower1.url}
              alt="Flor decorativa"
              className="z-1 h-80 lg:absolute lg:top-1/2 lg:right-0 lg:h-[900px] lg:w-auto lg:-translate-y-1/2"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </section>
      {/* Sección de flor y acordeón */}
      <section className="relative mx-auto my-20 flex max-w-[85%] flex-col items-center justify-center rounded-[47px] rounded-tr-[400px] border-2 border-white px-4 py-12 lg:my-42 lg:max-w-[1146px] lg:flex-row lg:gap-8 lg:py-20">
        {/* Flor */}
        {room?.flower2?.url && (
          <div className="flex w-full items-center pl-6 lg:w-1/2">
            <img
              src={room.flower2.url}
              alt="Flor decorativa"
              className="h-60 lg:absolute lg:top-1/2 lg:left-[52px] lg:h-[950px] lg:w-auto lg:-translate-y-1/2"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
        {/* Acordeón */}
        <div className="relative z-1 flex w-full flex-col gap-6 p-8 lg:w-1/2">
          {/* AMENIDADES */}
          <button
            className={`font-playfair flex w-max items-center justify-between border-b pb-2 text-left text-4xl font-bold transition-colors lg:text-3xl ${openAccordion === 'amenities' ? 'border-white text-white' : 'border-white/50 text-white/50'}`}
            onClick={() => handleAccordion('amenities')}
          >
            <span>
              <span className="font-normal">
                AMENID<span className="italic">ADES</span>
              </span>
            </span>
          </button>
          {openAccordion === 'amenities' && (
            <ul className="animate-fade-in font-quicksand mb-4 ml-4 list-disc text-2xl text-white/90">
              {room?.amenities?.length ? (
                room.amenities.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li>No hay amenidades disponibles.</li>
              )}
            </ul>
          )}
          {/* SERVICIOS */}
          <button
            className={`font-playfair flex w-max items-center justify-between border-b pb-2 text-left text-4xl font-bold transition-colors lg:text-3xl ${openAccordion === 'services' ? 'border-white text-white' : 'border-white/50 text-white/50'}`}
            onClick={() => handleAccordion('services')}
          >
            <span>
              <span className="font-normal">
                SERVI<span className="italic">CIOS</span>
              </span>
            </span>
          </button>
          {openAccordion === 'services' && (
            <ul className="animate-fade-in font-quicksand mb-4 ml-4 list-disc text-2xl text-white/90">
              {room?.services?.length ? (
                room.services.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li>No hay servicios disponibles.</li>
              )}
            </ul>
          )}
        </div>
      </section>
      {/* Galería de imágenes de la habitación */}
      {room?.imagesCollection?.items &&
        Array.isArray(room.imagesCollection.items) &&
        room.imagesCollection.items.length > 0 && (
          <section className="px-4 py-12 md:px-12">
            <Gallery>
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-7 gap-y-6 md:h-[700px] md:grid-cols-5 md:grid-rows-5">
                {room.imagesCollection?.items?.[0]?.url && (
                  <Item
                    original={room.imagesCollection.items[0]?.url || ''}
                    thumbnail={room.imagesCollection.items[0]?.url || ''}
                    width={room.imagesCollection.items[0]?.width || 1200}
                    height={room.imagesCollection.items[0]?.height || 800}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={room.imagesCollection?.items?.[0]?.url || ''}
                        alt="Imagen de la habitación"
                        className="h-full w-full cursor-pointer object-cover md:col-span-2 md:row-span-full"
                        style={{ maxHeight: '700px' }}
                      />
                    )}
                  </Item>
                )}
                {room.imagesCollection?.items?.[1]?.url && (
                  <Item
                    original={room.imagesCollection.items[1]?.url || ''}
                    thumbnail={room.imagesCollection.items[1]?.url || ''}
                    width={room.imagesCollection.items[1]?.width || 1200}
                    height={room.imagesCollection.items[1]?.height || 800}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={room.imagesCollection?.items?.[1]?.url || ''}
                        alt="Imagen de la habitación"
                        className="h-full w-full cursor-pointer object-cover md:col-span-2 md:row-span-2"
                        style={{ maxHeight: '700px' }}
                      />
                    )}
                  </Item>
                )}
                {room.imagesCollection?.items?.[2]?.url && (
                  <Item
                    original={room.imagesCollection.items[2]?.url || ''}
                    thumbnail={room.imagesCollection.items[2]?.url || ''}
                    width={room.imagesCollection.items[2]?.width || 1200}
                    height={room.imagesCollection.items[2]?.height || 800}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={room.imagesCollection?.items?.[2]?.url || ''}
                        alt="Imagen de la habitación"
                        className="h-full w-full cursor-pointer object-cover md:row-span-3"
                        style={{ maxHeight: '700px' }}
                      />
                    )}
                  </Item>
                )}
                {room.imagesCollection?.items?.[3]?.url && (
                  <Item
                    original={room.imagesCollection.items[3]?.url || ''}
                    thumbnail={room.imagesCollection.items[3]?.url || ''}
                    width={room.imagesCollection.items[3]?.width || 1200}
                    height={room.imagesCollection.items[3]?.height || 800}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={room.imagesCollection?.items?.[3]?.url || ''}
                        alt="Imagen de la habitación"
                        className="h-full w-full cursor-pointer object-cover md:col-span-2 md:row-span-3"
                        style={{ maxHeight: '700px' }}
                      />
                    )}
                  </Item>
                )}
                {room.imagesCollection?.items?.[5]?.url && (
                  <Item
                    original={room.imagesCollection.items[5]?.url || ''}
                    thumbnail={room.imagesCollection.items[5]?.url || ''}
                    width={room.imagesCollection.items[5]?.width || 1200}
                    height={room.imagesCollection.items[5]?.height || 800}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={room.imagesCollection?.items?.[5]?.url || ''}
                        alt="Imagen de la habitación"
                        className="h-full w-full cursor-pointer object-cover md:col-span-1 md:row-span-2"
                        style={{ maxHeight: '700px' }}
                      />
                    )}
                  </Item>
                )}
                {/* Imágenes extra solo para la galería */}
                {room.imagesCollection?.items?.slice(6).map(img =>
                  img?.url ? (
                    <Item
                      key={img.url}
                      original={img.url || ''}
                      thumbnail={img.url || ''}
                      width={img.width || 1200}
                      height={img.height || 800}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={img.url || ''}
                          alt="Imagen de la habitación"
                          className="h-[300px] w-full cursor-pointer object-cover md:hidden"
                          style={{ maxHeight: '700px' }}
                        />
                      )}
                    </Item>
                  ) : null,
                )}
              </div>
            </Gallery>
          </section>
        )}
    </main>
  )
}
