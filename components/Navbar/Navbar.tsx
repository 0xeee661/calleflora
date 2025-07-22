'use client'
import Link from 'next/link'
import NavDrawer from './NavDrawer/NavDrawer'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { useEffect, useState } from 'react'
import { bookingLink } from '@/constants/app'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 z-[100] grid w-full grid-cols-[1fr_2fr_1fr] items-center px-8 transition-all duration-300 ${isScrolled ? 'bg-black/80 py-6' : 'py-11'}`}
    >
      <NavDrawer />

      <Link href="/" className="justify-self-center">
        <Image
          src={logo}
          alt="Calle Flora Logo"
          className="h-8 w-auto md:h-14 md:justify-self-center"
        />
      </Link>
      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-playfair inline-flex w-max cursor-pointer justify-self-end rounded-md bg-white px-4 py-2 text-black"
      >
        RESERVAR
      </a>
    </header>
  )
}
