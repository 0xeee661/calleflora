import Image from 'next/image'

export default function Rooftop() {
  return (
    <main className="relative h-screen snap-start">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/rooftop.png"
          alt="Rooftop"
          className="mx-auto hidden h-full object-cover md:block"
          width={1300}
          height={1000}
        />
        <Image
          src="/images/rooftop_mobile.png"
          alt="Rooftop"
          className="mx-auto block h-full object-cover md:hidden"
          width={1300}
          height={1000}
        />
      </div>

      <span className="font-playfair text-foreground absolute bottom-20 left-20 text-3xl tracking-wide select-none">
        CALLE <span className="font-semibold italic">FLORA</span>
      </span>
    </main>
  )
}
