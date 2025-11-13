'use client'

import { useState } from 'react'
import { EllipsisVertical, X } from 'lucide-react'
import styles from './NavDrawer.module.css'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/constants/app'
import Link from 'next/link'
import { navigationLinks } from '@/constants/navigation'

export default function NavDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/calleflorahotel/',
      icon: '/svgs/social/instagram.svg',
    },
    {
      label: 'WhatsApp',
      href: `${whatsappLink}&text=%C2%A1Hola!%20Quiero%20reservar%20a%20la%20mejor%20tarifa`,
      icon: '/svgs/social/whatsapp.svg',
    },
  ]

  return (
    <>
      <EllipsisVertical
        className="text-foreground hover:text-foreground/80 size-7 cursor-pointer"
        onClick={() => setDrawerOpen(true)}
      />

      {drawerOpen && (
        <div className="fixed inset-0 z-[200] flex">
          <div
            className={cn(
              styles.animateSlideDown,
              'relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-[#191919] from-70% via-[#191919] to-[#191919]/60',
            )}
          >
            <X
              className="absolute top-8 right-8 size-8 cursor-pointer text-white hover:opacity-80"
              onClick={() => setDrawerOpen(false)}
            />

            <span className="font-playfair absolute top-8 left-1/2 -translate-x-1/2 text-4xl font-light tracking-wide text-white select-none">
              CALLE <span className="font-semibold italic">FLORA</span>
            </span>

            <nav className="flex flex-col gap-10 text-left w-full px-10 mt-20">
              {navigationLinks.map(link => (
                <Link
                  key={link.label}
                  className="font-quicksand text-[34px] leading-none text-[#FFF4B1] transition hover:opacity-90"
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

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

            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/navbar-bg.png"
                alt="Flower"
                className="h-full w-full object-cover"
                fill
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
