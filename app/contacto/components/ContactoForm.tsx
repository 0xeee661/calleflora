'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative grid grid-cols-2 rounded-[47px] rounded-bl-[312px] border-2">
      <div className="absolute -left-20 h-[850px] w-fit">
        <Image
          src="/images/contacto-form.png"
          alt="Contacto background"
          width={717}
          height={981}
          className="h-full w-full object-contain object-center"
          priority
        />
      </div>

      <div></div>

      <form
        className="flex flex-col gap-2 p-28"
        autoComplete="one-time-code"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="rounded-md border border-white/50 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Correo *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="rounded-md border border-white/50 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-white">
            Celular *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="rounded-md border border-white/50 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white">
            Obervaciones *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="resize-none rounded-md border border-white/50 bg-black/30 px-3 py-2 text-white placeholder:text-white/40 focus:border-white focus:outline-none"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="font-playfair mt-4 w-full cursor-pointer rounded-full bg-white px-6 py-3 text-lg font-semibold text-black shadow transition hover:bg-white/90"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
