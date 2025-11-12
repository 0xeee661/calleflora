'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import { navigationLinks } from '@/constants/navigation'
import { bookingLink } from '@/constants/app'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'

const hotelAddress = "https://www.google.com/maps/place/Calle+Flora+Hotel+by+Jalo/data=!4m2!3m1!1s0x0:0xdf15f8069e711c39?sa=X&ved=1t:2428&ictx=111"

export default function Navbar() {
  
  const pathname = usePathname()
  return (
    <header
      className="fixed top-0 left-0 z-[100] grid w-full grid-cols-[1fr_auto_1fr] items-center bg-black px-8 py-6"
    >
      <a href={hotelAddress}>
          <span className="flex items-center gap-1.5 text-white text-sm 
          font-normal leading-none md:text-base">
            <MdOutlineLocationOn size={25} className="text-pink-300" />
            Medellín, El Poblado, Calle 10
          </span>
        </a>

      <Link href="/" className="justify-self-start">
        <Image
          src={logo}
          alt="Calle Flora Logo"
          className="h-8 w-auto md:h-14 md:justify-self-center"
        />
      </Link> 

      <div className="flex justify-end">
      <nav className="hidden items-center justify-center gap-10 md:flex pr-6">
        {navigationLinks.map(link => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.label}
              href={link.href}
              className={` text-lg transition hover:opacity-80 ${link.href === '/' ? 'text-pink-300' : 'text-white'} ${isActive ? 'text-pink-300' : ''}`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

        <a
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-pink-300 px-6 
          font-playfair text-lg font-semibold text-white transition hover:bg-white/10"
        >
          RESERVAR
        </a>
      </div>
    </header>
  )
}
