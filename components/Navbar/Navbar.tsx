'use client'

import { useState } from 'react'
import { EllipsisVertical, X } from 'lucide-react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const modalLinks = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Habitaciones',
      href: '/',
    },
    {
      label: 'Experiencias',
      href: '/',
    },
    {
      label: 'Restaurantes',
      href: '/',
    },
    {
      label: 'Contácto',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/',
    },
  ]

  const socialLinks = [
    {
      label: 'Instagram',
      href: '/',
      icon: '/svgs/social/instagram.svg',
    },
    {
      label: 'Twitter',
      href: '/',
      icon: '/svgs/social/twitter.svg',
    },
    {
      label: 'TikTok',
      href: '/',
      icon: '/svgs/social/tiktok.svg',
    },
    {
      label: 'WhatsApp',
      href: '/',
      icon: '/svgs/social/whatsapp.svg',
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 z-[100] flex h-20 w-full items-center justify-center">
        <EllipsisVertical
          className="text-foreground hover:text-foreground/80 absolute left-8 size-7 cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        />
        <span className="font-playfair text-foreground text-3xl tracking-wide select-none">
          CALLE <span className="font-semibold italic">FLORA</span>
        </span>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-[200] flex">
          {/* Drawer Content */}
          <div
            className={`${styles.animateSlideDown} relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-[#191919] from-70% via-[#191919] to-[#191919]/60`}
          >
            {/* Close Button */}
            <X
              className="absolute top-8 left-8 size-8 cursor-pointer text-white hover:opacity-80"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Logo */}
            <span className="font-playfair absolute top-8 left-1/2 -translate-x-1/2 text-4xl font-light tracking-wide text-white select-none">
              CALLE <span className="font-semibold italic">FLORA</span>
            </span>
            {/* Nav Links */}
            <nav className="flex flex-col gap-6 text-center">
              {modalLinks.map(link => (
                <Link
                  key={link.label}
                  className="font-playfair text-right text-5xl text-white italic transition hover:opacity-80"
                  href="/"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Social Icons */}
            <div className="absolute bottom-14 left-14 flex gap-8">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} aria-label={link.label}>
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={60}
                    height={60}
                  />
                </a>
              ))}
            </div>

            {/* Decorative Image (optional, left side) */}
            <div className="absolute inset-0 -z-10">
              {/* You can add an <img> or background image here for the flower illustration */}
              {/* Example: <img src="/flower.png" className="object-cover h-full w-1/2 opacity-60" alt="Flower" /> */}
            </div>

            <img
              src="/images/bg-modal.png"
              alt="Flower"
              width="100%"
              className="absolute bottom-0 -left-60 z-[-1] h-4/5 w-9/12 object-cover opacity-[0.17]"
            />
          </div>
        </div>
      )}
    </>
  )
}
