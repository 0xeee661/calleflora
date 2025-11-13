import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { LuPhone } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import { RiInstagramFill, RiFacebookFill, RiTiktokFill } from 'react-icons/ri'

export const navigationLinks = [
  {
    label: 'Ventas Corporativas ',
    href: '/',
  },
  {
    label: 'Política de Uso',
    href: '/s',
  },
  {
    label: 'Política de Privacidad',
    href: '/politicas-de-privacidad',
  },
  {
    label: 'Contáctanos',
    href: '/',
  }
] as const

export const Footer = () => {
  return (
    <footer className="flex snap-start items-center justify-center px-8 py-15 h-[50vh]">
      <div className="w-full max-w-[1075px]">
        {/* Menú superior del footer */}
        <nav className="mb-10">
          <ul className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16">
            {navigationLinks.map(link => (
              <li key={link.label} className="font-playfair text-2xl text-white">
                <Link href={link.href} className="hover:opacity-80 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Línea divisoria rosada debajo del menú */}
        <div className="h-px w-full bg-pink-300/80 mb-10" />

        <div className="flex w-full flex-col items-center justify-around gap-10 md:flex-row">
        <div className="flex flex-col items-center gap-3">
          <Link href="/">
            <Image src={logo} alt="Calle Flora Logo" />
          </Link>
          <div className="flex items-center gap-4 text-white mt-2">
            <Link
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <RiInstagramFill size={22} />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <RiFacebookFill size={22} />
            </Link>
            <Link
              href="#"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <RiTiktokFill size={22} />
            </Link>
          </div>
        </div>
        
        <nav className="flex flex-col gap-4 md:text-[2rem]">
          <p className="font-playfair flex items-center gap-2">
            <GrLocation />
            Cl. 9A #37-48, El Poblado
          </p>
          <p className="font-playfair flex items-center gap-2">
            <LuPhone /> +57 311 7447836
          </p>
          <ul className="flex flex-col gap-6 md:flex-row">
            <li className="font-playfair text-base underline">
              <Link href="/politicas-de-privacidad">
                Política de privacidad y Tratamiento de datos
              </Link>
            </li>
          </ul>
        
        </nav>
        </div>
      </div>
    </footer>
  )
}
