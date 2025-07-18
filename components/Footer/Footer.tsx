import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { LuPhone } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'

export const Footer = () => {
  return (
    <footer className="flex snap-start items-center justify-center px-8 py-15">
      <div className="flex w-full max-w-[1075px] flex-col items-center justify-around gap-10 md:flex-row">
        <Link href="/">
          <Image src={logo} alt="Calle Flora Logo" />
        </Link>
        <div className="h-[1px] w-full bg-white text-right md:h-[168px] md:w-[1px]" />
        <nav className="flex flex-col gap-4 md:text-[2rem]">
          <p className="font-playfair flex items-center gap-2">
            <GrLocation />
            Cl. 9A #37-48, El Poblado
          </p>
          <p className="font-playfair flex items-center gap-2">
            <LuPhone /> +57 604 322 8907
          </p>
          <ul className="flex flex-col gap-6 md:flex-row">
            <li className="font-playfair text-base underline">
              <Link href="/politica-de-privacidad">
                Política de privacidad y Tratamiento de datos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
