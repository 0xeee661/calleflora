import Link from 'next/link'

export const Rooftop = () => {
  return (
    <section className="relative h-screen snap-start overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/r1.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-[0.5]"
        />
      </div>

      <div className="absolute inset-0 z-1 flex flex-col items-center justify-center p-8">
        <h1 className="font-playfair text-center text-[4rem] font-normal md:text-8xl">
          SELVA <br />
          <span className="italic">NEGRA</span>
        </h1>
        <p className="font-playfair max-w-xl text-center text-2xl">ROOF TOP</p>
        <Link
          href="/rooftop"
          className="font-playfair mt-4 inline-flex cursor-pointer rounded-md bg-white px-4 py-2 text-black"
        >
          Ver más
        </Link>
      </div>
    </section>
  )
}
