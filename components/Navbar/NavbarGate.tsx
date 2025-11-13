'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function NavbarGate() {
  const pathname = usePathname()
  const hideOnHabitaciones =
    pathname?.startsWith('/habitaciones') ?? false

  if (hideOnHabitaciones) return null
  return <Navbar />
}


