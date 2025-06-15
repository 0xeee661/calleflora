import { ChevronRight } from 'lucide-react'

export default function Reservation() {
  return (
    // <div className="fixed right-0 bottom-0 left-0 z-50">
    <div className="grid h-[109px] w-full grid-cols-[1fr_200px] items-center gap-2 border-t border-white/10 bg-black/50 shadow-lg backdrop-blur-sm">
      {/* Left Column - Flexible */}
      <div className="flex h-full w-full items-center gap-2 px-4">
        {/* Check In */}
        <div className="flex flex-col px-4">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Check In
          </span>
          <span className="font-quicksand mt-1 text-sm text-white/90">
            10 Jun 2025
          </span>
        </div>

        {/* Arrow */}
        <ChevronRight className="mx-2 text-white/60" size={18} />

        {/* Check Out */}
        <div className="flex flex-col px-4">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Check Out
          </span>
          <span className="font-quicksand mt-1 text-sm text-white/90">
            10 Jun 2025
          </span>
        </div>

        {/* Divider */}
        <div className="mx-4 h-10 w-px bg-white/15" />

        {/* Guests */}
        <div className="flex flex-col px-4">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Huéspedes
          </span>
          <span className="font-quicksand mt-1 text-sm text-white/90">1</span>
        </div>

        {/* Divider */}
        <div className="mx-4 h-10 w-px bg-white/15" />

        {/* Promo Code */}
        <div className="flex flex-col px-4">
          <span className="font-quicksand text-xs tracking-widest text-white/70 uppercase">
            Código Promo
          </span>
        </div>
      </div>

      {/* Right Column - Fixed 200px */}
      <div className="flex h-full items-center justify-center px-4">
        {/* Reserve Button */}
        <button className="font-playfair cursor-pointer rounded-full bg-white px-6 py-2 text-lg font-semibold text-black shadow transition hover:bg-white/90">
          RESERVAR
        </button>
      </div>
    </div>
    // </div>
  )
}
