'use client'

import { Maybe, Room } from '@/types/graphql/graphql'
import { useState, useMemo } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  console.log(currentRoom)

  // Función para renderizar la descripción con palabras aleatorias en cursiva
  const renderDescription = useMemo(() => {
    if (!currentRoom?.description) return null

    const words = currentRoom.description.split(' ')
    const italicizedWords = words.map((word, index) => {
      // 30% de probabilidad de que una palabra sea cursiva
      const shouldItalicize = Math.random() < 0.3

      return shouldItalicize ? (
        <em key={index} className="font-semibold italic">
          {word}{' '}
        </em>
      ) : (
        <span key={index}>{word} </span>
      )
    })

    return italicizedWords
  }, [currentRoom?.description])

  console.log(currentRoom?.imagesCollection?.items)

  return (
    <section className="relative h-screen snap-start">
      {currentRoom && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-screen w-full object-cover align-top opacity-40"
          poster={currentRoom.background?.url || undefined}
        >
          {currentRoom.background?.url && (
            <source src={currentRoom.background?.url} type="video/mp4" />
          )}
        </video>
      )}
      <nav className="absolute top-30 right-8 z-10 flex justify-center gap-4">
        {rooms.map(room => (
          <button
            key={room?.type}
            onClick={() => setCurrentRoom(room)}
            className={`font-quicksand text-[2rem] transition-all duration-300 ${
              currentRoom?.type === room?.type ? 'underline' : ''
            }`}
          >
            {room?.type}
          </button>
        ))}
      </nav>
      <div className="relative z-1 flex h-full flex-col gap-8 p-4 py-50 md:justify-end md:p-16">
        <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
          {currentRoom?.imageLetter?.url && (
            <img
              src={currentRoom?.imageLetter?.url}
              alt={`Flor de la habitación ${currentRoom?.type}`}
              className="h-60 md:h-96"
            />
          )}
          <p className="font-playfair max-w-[356px] text-2xl">
            {renderDescription}
          </p>
        </div>
        {currentRoom?.imagesCollection?.items && (
          <Gallery>
            <Slider
              {...settings}
              className="ml-auto w-full max-w-[754px] gap-[20px] px-5"
            >
              {currentRoom?.imagesCollection?.items?.map(
                (image, index) =>
                  image?.url && (
                    <Item
                      key={index}
                      original={image?.url || ''}
                      thumbnail={image?.url || ''}
                      width={image?.width || 0}
                      height={image?.height || 0}
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          onClick={open}
                          src={image?.url || ''}
                          alt={`photo-${index + 1}`}
                          width={image?.width || 0}
                          height={image?.height || 0}
                          className="h-40 w-full rounded-[20px] object-cover"
                        />
                      )}
                    </Item>
                  ),
              )}
            </Slider>
          </Gallery>
        )}
      </div>
    </section>
  )
}
