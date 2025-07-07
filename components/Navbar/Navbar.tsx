import Link from 'next/link'
import NavDrawer from './NavDrawer/NavDrawer'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[100] flex h-20 w-full items-center justify-between px-8 pt-11">
      <NavDrawer />

      <Link href="/">
        <Image
          src={logo}
          alt="Calle Flora Logo"
          className="h-8 w-auto md:h-14"
        />
      </Link>
      <a
        href="https://direct-book.com/properties/HotelCalleFloradirect"
        target="_blank"
        rel="noopener noreferrer"
        className="font-playfair inline-flex cursor-pointer rounded-md bg-white px-4 py-2 text-black"
      >
        RESERVAR
      </a>
    </div>
  )
}
