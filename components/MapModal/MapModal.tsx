'use client'
import { useState, useEffect } from 'react'
import { MapPin, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

type Props = {
  mapImage: string
  recommendations: string[]
}

export default function MapModal({
  mapImage = '/images/experiencias/mapImage.png',
  recommendations,
}: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        className="font-quicksand flex cursor-pointer items-center gap-2 text-lg font-semibold underline md:text-xl"
        onClick={() => setOpen(true)}
      >
        <MapPin className="size-6" />
        Ver mapa
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            <motion.div
              className="relative grid min-h-[400px] w-[90vw] max-w-4xl rounded-3xl bg-[#181818] p-6 max-md:space-y-4 md:grid-cols-2 md:p-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 cursor-pointer text-white hover:opacity-70 focus:outline-none"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                <X size={32} />
              </button>

              <div className="h-64 w-full flex-shrink-0 overflow-hidden rounded-2xl md:h-auto">
                <img
                  src={mapImage}
                  alt="Mapa Museo Botero"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center justify-between max-md:space-y-4 md:pl-8">
                <div></div>

                <div className="font-quicksand flex flex-col justify-center gap-4 border-l border-white/30 pl-8 text-xl text-white md:h-3/5">
                  <div className="space-y-3">
                    {recommendations.map((recommendation, index) => (
                      <p key={index}>• {recommendation}</p>
                    ))}
                  </div>
                </div>

                <div className="flex w-fit items-center gap-3">
                  <div className="size-10 cursor-pointer rounded-full bg-white p-2 text-3xl text-black transition hover:bg-white/80">
                    <ArrowUpRight className="size-6" />
                  </div>
                  <p className="font-quicksand text-lg font-semibold md:pr-6 md:text-xl">
                    Saber más información
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
