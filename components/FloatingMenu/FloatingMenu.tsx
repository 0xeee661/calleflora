'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { navigationLinks } from '@/constants/navigation'
import { useEffect, useState } from 'react'

interface FloatingMenuProps {
  hideOnBuilding?: boolean
}

export default function FloatingMenu({
  hideOnBuilding = true,
}: FloatingMenuProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!hideOnBuilding) return

    const buildingSection = document.querySelector('[data-section="building"]')
    if (!buildingSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      {
        threshold: 0.1, // Trigger when 10% of the building section is visible
        // rootMargin: '-50px 0px', // Add some margin to make it feel more natural
      },
    )

    observer.observe(buildingSection)

    return () => {
      observer.disconnect()
    }
  }, [hideOnBuilding])

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 1, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 100 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-1/2 right-8 z-50 hidden -translate-y-1/2 lg:block"
    >
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 -z-10 rounded-2xl" />

        <nav className="flex flex-col gap-6 p-6">
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <Link
                href={link.href}
                className="group relative flex items-center gap-3 text-white transition-all duration-300 hover:text-white/90"
              >
                <motion.span
                  className="font-quicksand text-2xl tracking-wide"
                  whileHover={{ x: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>

                <motion.div
                  className="h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-12"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute -right-3 h-[2px] w-4 bg-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
