import { getLegalData } from '@/lib/api'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default async function PoliticasDePrivacidadPage() {
  const data = await getLegalData({ id: '7qUWMYL7BxF0uZdLYokpyE' })

  return (
    <main>
      <section className="relative grid h-[60vh] grid-cols-1 overflow-hidden bg-gradient-to-b from-transparent via-transparent to-[var(--background)] md:h-screen md:grid-cols-2 xl:grid-cols-[1fr_750px]">
        <img
          src="/images/contacto-form.png"
          alt="Heliconia"
          className="absolute -bottom-24 -z-10 w-auto object-cover brightness-95 md:-left-[22%] md:h-[1500px]"
        />
        <div className="flex items-center justify-center"></div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="font-playfair text-center text-4xl text-white md:text-7xl lg:text-8xl xl:text-9xl">
            Políticas de
            <br />
            Privacidad
          </h1>
        </div>
      </section>

      <p className="mx-auto max-w-6xl px-10 py-20 md:text-2xl md:text-3xl">
        {documentToReactComponents(data?.content?.json)}
      </p>
    </main>
  )
}
