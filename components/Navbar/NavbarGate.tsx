 'use client'
 
 import Navbar from './Navbar'
 import { usePathname } from 'next/navigation'
 
 /**
  * NavbarGate
  * Renderiza el navbar global, excepto en ciertas rutas donde se desea ocultar.
  * Actualmente se oculta en todas las páginas bajo `/habitaciones`.
  */
 export default function NavbarGate() {
   const pathname = usePathname()
 
   const hideOnPaths: string[] = ['/habitaciones']
   const shouldHideNavbar =
     pathname !== null &&
     hideOnPaths.some(prefix => pathname.startsWith(prefix))
 
   if (shouldHideNavbar) {
     return null
   }
 
   return <Navbar />
 }


