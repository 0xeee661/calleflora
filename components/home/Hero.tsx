/* import Reservation from '../Reservation/Reservation' */

export default function Hero() {
  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/home.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-[0.47]"
        />
      </div>

      <div className="relative flex min-h-[calc(100vh-109px)] flex-col items-center justify-center">
        <div className="mt-10 flex flex-col items-center justify-between gap-0">
          <h1 className="font-playfair text-foreground text-center text-[4rem] tracking-wide select-none sm:text-nowrap md:text-[6.5625rem]">
            <span className="font-semibold italic">UN HOTEL</span>
          </h1>

          <div className="font-playfair text-foreground max-w-2xl text-center tracking-wide select-none">
            <span className="block text-[2rem] leading-snug font-light text-white/90 sm:text-2xl">
              que hace homenaje a la{' '}
              <i className="font-black">eterna primavera</i>.
            </span>

            {/* <span className="font-quicksand mt-2 block text-sm sm:text-base">
              — Diario de Lecumberri, Álvaro Mutis
            </span> */}
          </div>
        </div>
      </div>

      {/* <Reservation /> */}
    </main>
  )
}
