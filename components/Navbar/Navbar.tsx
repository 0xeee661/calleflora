import Link from 'next/link'
import NavDrawer from './NavDrawer/NavDrawer'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[100] flex h-20 w-full items-center justify-center">
      <NavDrawer />

      <Link
        href="/"
        className="font-playfair text-foreground text-2xl tracking-wide select-none sm:text-3xl"
      >
        CALLE <span className="font-semibold italic">FLORA</span>
      </Link>
    </div>
  )
}
