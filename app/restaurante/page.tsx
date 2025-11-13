'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'
import { PrimaryButton } from '../../components/Button/PrimaryButton'
import { bookingLink } from '../../constants/app'
import image1 from '@/public/images/restaurante/1.jpg'
import image2 from '@/public/images/restaurante/2.jpg'
import image3 from '@/public/images/restaurante/3.jpg'
import image4 from '@/public/images/restaurante/4.jpg'
import image5 from '@/public/images/restaurante/5.jpg'
import image6 from '@/public/images/restaurante/6.jpg'
import image7 from '@/public/images/restaurante/7.jpg'
import image8 from '@/public/images/restaurante/8.jpg'
import image9 from '@/public/images/restaurante/9.jpg'
import image10 from '@/public/images/restaurante/10.jpg'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export default function RestaurantePage() {
  const scheduleData = [
    {
      day: 'Lunes',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Martes',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Miércoles',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Jueves',
      hours: '5:00 PM -1:00 AM',
    },

    {
      day: 'Viernes',
      hours: '5:00 PM -1:00 AM',
    },
    {
      day: 'Sábado',
      hours: '5:00 PM -1:00 AM',
    },
  ]

  return (
    <main>
      <section className="relative h-[90vh] snap-start overflow-hidden md:h-screen">
        <Image
          src="/images/restaurante/9.jpg"
          alt="Restaurante"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-50"
          fill
        />

        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent to-[var(--background)]">
          <div className="mb-12 grid grid-cols-2 gap-4">
            <PrimaryButton className="font-quicksand mt-12 !h-[38px] min-h-auto cursor-pointer rounded-2xl border-2 border-white !px-5 py-1.5 text-xl font-bold transition-colors duration-300 hover:bg-white/10 md:hidden">
              VER MENÚ
            </PrimaryButton>

            <PrimaryButton
              className="font-quicksand mt-12 !h-[38px] min-h-auto cursor-pointer rounded-2xl border-2 border-white !px-5 py-1.5 text-xl font-bold transition-colors duration-300 hover:bg-white/10 md:hidden"
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              RESERVAR
            </PrimaryButton>
          </div>

          <h1 className="font-playfair text-7xl font-normal md:text-8xl">
          Restaurante Amelier
          </h1>
          <div className="font-playfair mt-3 text-center text-xl md:text-2xl">
            <p className="font-semibold">Sabores que cuentan historias{' '} </p>
            <p className="font-semibold">creados para disfrutar cada momento</p>.
          </div>

          <PrimaryButton className="font-quicksand mt-5 !h-[38px] min-h-auto cursor-pointer !rounded-2xl border-2 border-white !px-5 py-1.5 text-xl font-bold transition-colors duration-300 hover:bg-white/10 md:hidden">
            VER HORARIOS
          </PrimaryButton>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-8 py-20 md:grid-cols-2 md:gap-8 md:py-24 md:pt-56">
        <div className="absolute top-0 right-0 left-0 z-1 hidden h-20 max-w-6xl items-center justify-between gap-6 px-8 md:flex">
          {scheduleData.map(item => (
            <div
              key={item.day}
              className="flex flex-col items-center justify-center gap-2.5"
            >
              <h3 className="font-playfair text-2xl font-normal text-[#B19C00]">
                {item.day}
              </h3>
              <p className="font-playfair text-xl font-normal">{item.hours}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-4 max-md:order-last">
          <h2 className="font-playfair text-center text-6xl font-normal md:text-left md:text-8xl">
            Nuestro <br />
            <i className="text-[#B19C00]">Menú</i>
          </h2>

          <p className="font-playfair mt-5 text-2xl font-normal italic md:text-3xl md:leading-relaxed">
            <i className="font-semibold">Calle Flora</i> no es un solo lugar: es
            un conjunto de <i className="font-semibold">atmósferas</i> que
            florecen a su propio ritmo.
          </p>
          <div className="mt-6">
            <Link
              href="/restaurante/menu"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-pink-300 px-6 py-2 font-playfair text-2xl text-white tracking-wide hover:bg-pink-300/10"
            >
              MENÚ
            </Link>
          </div>
        </div>

        <div className="mx-auto flex aspect-square max-w-96 justify-center max-md:order-first md:max-w-full">
          <Image
            src="/images/restaurante/restaurante-plato.png"
            alt="Restaurante plato"
            width={678}
            height={678}
          />
        </div>
      </section>

      <section className="px-4 py-12 md:px-12">
        <Gallery>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-7 gap-y-6 md:h-[700px] md:grid-cols-5 md:grid-rows-5">
            <Item
              original={image1.src}
              thumbnail={image1.src}
              width={image1.width}
              height={image1.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image1.src}
                  alt="Imagen del restaurante"
                  className="h-full w-full cursor-pointer object-cover md:col-span-2 md:row-span-full"
                  style={{ maxHeight: '700px' }}
                />
              )}
            </Item>
            <Item
              original={image2.src}
              thumbnail={image2.src}
              width={image2.width}
              height={image2.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image2.src}
                  alt="Imagen del restaurante"
                  className="h-full w-full cursor-pointer object-cover md:col-span-2 md:row-span-2"
                  style={{ maxHeight: '700px' }}
                />
              )}
            </Item>
            <Item
              original={image3.src}
              thumbnail={image3.src}
              width={image3.width}
              height={image3.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image3.src}
                  alt="Imagen del restaurante"
                  className="h-full w-full cursor-pointer object-cover md:row-span-3"
                  style={{ maxHeight: '700px' }}
                />
              )}
            </Item>
            <Item
              original={image4.src}
              thumbnail={image4.src}
              width={image4.width}
              height={image4.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image4.src}
                  alt="Imagen del restaurante"
                  className="h-full w-full cursor-pointer object-cover md:col-span-2 md:row-span-3"
                  style={{ maxHeight: '700px' }}
                />
              )}
            </Item>
            <Item
              original={image5.src}
              thumbnail={image5.src}
              width={image5.width}
              height={image5.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={image5.src}
                  alt="Imagen del restaurante"
                  className="h-full w-full cursor-pointer object-cover md:col-span-1 md:row-span-2"
                  style={{ maxHeight: '700px' }}
                />
              )}
            </Item>
            {/* Imágenes extra solo para la galería */}
            {[image6, image7, image8, image9, image10].map(img => (
              <Item
                key={img.src}
                original={img.src}
                thumbnail={img.src}
                width={img.width}
                height={img.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={img.src}
                    alt="Imagen del restaurante"
                    className="h-[300px] w-full cursor-pointer object-cover md:hidden"
                    style={{ maxHeight: '700px' }}
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </section>

      <section className="relative h-screen snap-start md:mt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full min-h-screen w-full object-cover align-top opacity-70 brightness-75"
        >
          <source src="/videos/restaurante.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-[var(--background)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent via-60% to-[var(--background)]"></div>

        <div className="absolute inset-0 z-1 flex flex-col-reverse items-center justify-center bg-gradient-to-b from-transparent via-transparent to-[var(--background)] md:flex-col">
          <i className="font-playfair max-w-[850px] px-8 text-center text-xl md:text-4xl">
            Nuestro rooftop es un refugio entre cielo y botánica: un espacio
            abierto donde los atardeceres tiñen la ciudad de oro y las plantas
            nativas acompañan cada respiro.
          </i>

          <Link
            href="/"
            className="mt-5 flex size-16 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 active:scale-95 max-md:mb-8"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            aria-label="Siguiente"
          >
            <ArrowDownRight className="size-9 font-light text-black" />
          </Link>
        </div>
      </section>
    </main>
  )
}
