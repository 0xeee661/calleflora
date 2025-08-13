import Link from 'next/link'

export const Spaces = () => {
  return (
    <section className="relative h-screen snap-start overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          src="/videos/espacios.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-[0.5]"
        />
      </div>

      <div className="absolute inset-0 z-1 flex flex-col items-center justify-center p-8">
        <h1 className="font-playfair text-[4rem] font-normal md:text-8xl">
          ESPA<span className="italic">CIOS</span>
        </h1>
        <p className="font-playfair max-w-xl text-center text-2xl">
          <span className="font-semibold">Calle Flora</span> no es un solo
          lugar: es un conjunto de atmósferas que florecen a su propio ritmo.
        </p>
        <Link
          href="/espacios"
          className="font-playfair mt-4 inline-flex cursor-pointer rounded-md bg-white px-4 py-2 text-black"
        >
          Ver más
        </Link>
      </div>
    </section>
  )
}
