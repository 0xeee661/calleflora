'use client'

import Image from 'next/image'
import { useState } from 'react'
import flower from '@/public/images/flower_white.png'
import { Ally, Maybe } from '@/types/graphql/graphql'
import { applyItalicPattern } from '@/lib/utils'

export const AlliesPage = ({ allies }: { allies: Maybe<Ally>[] }) => {
  const [currentCategory, setCurrentCategory] = useState<string>('COMIDA')
  const filteredAllies = allies?.filter(
    ally => ally?.category === currentCategory,
  )

  return (
    <main>
      <section className="relative h-[100vh] snap-start md:h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-[50vh] w-full object-cover align-top opacity-40 md:min-h-screen"
          /* poster={room.background?.url} */
        >
          <source src="/videos/aliados.mp4" type="video/mp4" />
        </video>
        {/* Overlay for play and reservar buttons */}
        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent to-[var(--background)]">
          <h1 className="font-playfair text-7xl font-normal md:text-9xl">
            ALIADOS
          </h1>
          <button className="font-quicksand mt-5 cursor-pointer rounded-2xl border-2 border-white px-12 py-1.5 text-xl font-bold transition-colors duration-300 hover:bg-white/10 md:hidden">
            RESERVAR
          </button>

          <p className="font-quicksand mt-32 w-full px-10 text-start text-base font-medium md:hidden">
            CONOCE LAS <br />
            <span className="font-playfair text-5xl font-normal">
              CATEGORÍAS
            </span>
          </p>

          {/* make a vertical line */}
          <div className="absolute bottom-0 left-1/2 mt-10 h-[200px] w-0.5 -translate-x-1/2 rounded-full bg-white" />
        </div>
      </section>

      <p className="font-playfair mt-12 px-8 text-center text-xl md:hidden">
        Conoce las ofertas y alianzas de nuestro hotel
      </p>

      <section className="p-8">
        <div className="mx-auto grid w-full max-w-[910px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-[74px]">
          <CategoryButton
            category="COMIDA"
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <CategoryButton
            category="BIENESTAR"
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <CategoryButton
            category="DIVERSIÓN"
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <CategoryButton
            category="CULTURA"
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        </div>
        <div className="mx-auto mt-[85px] grid max-w-[1008px] grid-cols-1 gap-8">
          {filteredAllies && filteredAllies.length > 0 ? (
            filteredAllies.map(
              ally => ally && <AllyCard key={ally?.name} ally={ally} />,
            )
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="font-playfair text-center text-2xl">
                No hay aliados disponibles en la categoría &ldquo;
                {currentCategory}&rdquo;
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

const CategoryButton = ({
  category,
  currentCategory,
  setCurrentCategory,
}: {
  category: string
  currentCategory: string
  setCurrentCategory: (category: string) => void
}) => {
  const isActive = category === currentCategory
  return (
    <button
      className={`flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-4xl border-2 border-white md:min-h-[216px] ${
        isActive ? 'bg-black' : 'bg-transparent'
      }`}
      onClick={() => setCurrentCategory(category)}
    >
      <span className="font-quicksand text-xl">{category}</span>
      <Image src={flower} alt="flower" className="block" />
    </button>
  )
}

const AllyCard = ({ ally }: { ally: Ally }) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={ally?.image?.url || ''}
        alt={ally?.name || ''}
        className="h-[244px] w-full rounded-[41px] object-cover"
      />
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <h3 className="font-quicksand text-4xl">{ally?.name}</h3>
          <p className="font-playfair max-w-[456px] text-lg">
            {applyItalicPattern(ally?.description || '')}
          </p>
        </div>
        <span className="font-quicksand mt-4 rounded-full border-2 px-4 text-center text-4xl whitespace-nowrap md:mt-0">
          {ally?.benefit}
        </span>
      </div>
    </div>
  )
}
