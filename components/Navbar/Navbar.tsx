import Link from 'next/link'
import NavDrawer from './NavDrawer/NavDrawer'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[100] flex h-20 w-full items-center justify-center pt-11">
      <NavDrawer />

      <Link
        href="/"
        className="font-playfair text-foreground text-2xl tracking-wide select-none sm:text-3xl"
      >
        <Image src={logo} alt="Calle Flora Logo" />
      </Link>
    </div>
  )
}
