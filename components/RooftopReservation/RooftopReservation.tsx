'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import styles from './RooftopReservation.module.css'

interface RooftopReservationProps {
  className?: string
}

export default function RooftopReservation({
  className,
}: RooftopReservationProps) {
  const [personas, setPersonas] = useState('1 persona')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('7:00 pm')

  // Obtener la fecha mínima (hoy)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const handleReservar = () => {
    if (!fecha) {
      alert('Por favor selecciona una fecha para tu reserva')
      return
    }

    const mensaje = `Hola, me gustaría hacer una reserva en el rooftop Selva Negra:
    
• Personas: ${personas}
• Fecha: ${fecha}
• Hora: ${hora}

¿Podrían ayudarme con la reserva?`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=573117447836&text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center p-8 ${className}`}
    >
      {/* Título con líneas decorativas */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-16 bg-white"></div>
        <h2 className="font-playfair text-2xl font-bold text-white md:text-5xl">
          RESERVA
        </h2>
        <div className="h-px w-16 bg-white"></div>
      </div>

      {/* Formulario */}
      <div className="w-full max-w-[524px] space-y-4">
        {/* Selector de personas */}
        <div className="relative">
          <select
            value={personas}
            onChange={e => setPersonas(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-2xl border border-white bg-transparent px-4 py-3 text-2xl text-white outline-none md:min-h-[89px] md:rounded-4xl md:text-4xl"
          >
            <option value="1 persona">1 persona</option>
            <option value="2 personas">2 personas</option>
            <option value="3 personas">3 personas</option>
            <option value="4 personas">4 personas</option>
            <option value="5 personas">5 personas</option>
            <option value="6 personas">6 personas</option>
            <option value="7 personas">7 personas</option>
            <option value="8 personas">8 personas</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform text-white"
            size={20}
          />
        </div>

        {/* Selector de fecha */}
        <div className="relative">
          <input
            type="date"
            value={fecha}
            min={getMinDate()}
            onChange={e => setFecha(e.target.value)}
            className={`w-full cursor-pointer rounded-2xl border border-white bg-transparent px-4 py-3 text-2xl text-white outline-none md:min-h-[89px] md:rounded-4xl md:text-4xl ${styles.no_calendar_icon}`}
            placeholder="Selecciona una fecha"
          />
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform text-white"
            size={20}
          />
        </div>

        {/* Selector de hora */}
        <div className="relative">
          <select
            value={hora}
            onChange={e => setHora(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-2xl border border-white bg-transparent px-4 py-3 text-2xl text-white outline-none md:min-h-[89px] md:rounded-4xl md:text-4xl"
          >
            <option value="6:00 pm">6:00 pm</option>
            <option value="6:30 pm">6:30 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="7:30 pm">7:30 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="8:30 pm">8:30 pm</option>
            <option value="9:00 pm">9:00 pm</option>
            <option value="9:30 pm">9:30 pm</option>
            <option value="10:00 pm">10:00 pm</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transform text-white"
            size={20}
          />
        </div>

        {/* Botón de reservar */}
        <button
          onClick={handleReservar}
          className="w-full cursor-pointer rounded-2xl border border-white bg-transparent px-4 py-3 text-2xl font-semibold tracking-wider text-white uppercase transition-colors duration-300 outline-none hover:bg-white hover:text-black md:min-h-[89px] md:rounded-4xl md:text-4xl"
        >
          RESERVAR
        </button>
      </div>
    </div>
  )
}
