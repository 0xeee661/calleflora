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
    href: '/',
  },
  {
    label: 'Política de Privacidad',
    href: '/politicas-de-privacidad',
  },
  {
    label: 'Contáctanos',
    href: '/contacto',
  }
] as const

export const Footer = () => {
  return (
    <footer className="flex snap-start items-center justify-center px-8 py-15 lg:h-[50vh] h-[80vh]">
      <div className="w-full max-w-[1075px] pb-10 lg:pb-0">
        {/* Menú superior del footer */}
        <nav className="mb-10">
          <ul className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16">
            {navigationLinks.map(link => (
              <li key={link.label} className="font-playfair xl:text-2xl lg:text-xl text-base text-white">
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
              href="https://www.instagram.com/calleflorahotel/"
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
        
        <nav className="flex flex-col gap-4 md:text-[2rem] max-w-full">
          <p className="font-playfair flex items-center gap-2">
            <GrLocation className="flex-shrink-0" />
            <span className="break-words">Cl. 9A #37-48, El Poblado</span>
          </p>
          <p className="font-playfair flex items-center gap-2">
            <LuPhone className="flex-shrink-0" /> 
            <span className="break-words">+57 311 7447836</span>
          </p>
          <ul className="flex flex-col gap-6 md:flex-row">
            <li className="font-playfair text-base underline break-words">
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
