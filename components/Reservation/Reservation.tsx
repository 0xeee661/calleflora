import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'

export default function Reservation({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div
      className={cn(
        'grid h-[109px] w-full grid-cols-[1fr_200px] items-center gap-2 border-t border-white/10 bg-black/50 shadow-lg backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex h-full w-full items-center gap-2 px-2">
        <div className="flex flex-col px-2">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Check In
          </span>
          <span className="font-quicksand mt-1 text-sm text-white/90">
            10 Jun 2025
          </span>
        </div>

        <ChevronRight className="text-white/60" size={18} />

        <div className="flex flex-col px-2">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Check Out
          </span>
          <span className="font-quicksand mt-1 text-sm text-white/90">
            10 Jun 2025
          </span>
        </div>

        <div className="h-10 w-px bg-white/15" />

        <div className="flex flex-col px-2">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Huéspedes
          </span>
          <span className="font-quicksand mt-1 text-sm text-white/90">1</span>
        </div>

        <div className="h-10 w-px bg-white/15" />

        <div className="flex flex-col px-2">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Código Promo
          </span>
        </div>
      </div>

      <div className="flex h-full items-center justify-center px-4">
        <button className="font-playfair cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow transition hover:bg-white/90 sm:text-base md:px-6 md:text-lg">
          RESERVAR
        </button>
      </div>
    </div>
  )
}
