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
        <div className="mt-10 flex flex-col items-center justify-between gap-28">
          <h1 className="font-playfair text-foreground text-center text-8xl tracking-wide select-none sm:text-nowrap lg:text-9xl 2xl:text-[170px]">
            CALLE <span className="font-semibold italic">FLORA</span>
          </h1>

          <div className="font-playfair text-foreground mt-4 max-w-2xl text-center tracking-wide select-none">
            <span className="block text-xl leading-snug font-light text-white/90 sm:text-2xl">
              Un hotel que hace homenaje <br /> a la eterna{' '}
              <i className="font-semibold">Primavera</i>.
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
