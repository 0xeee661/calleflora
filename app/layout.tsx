import type { Metadata } from 'next'
import { Playfair_Display, Quicksand } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/utils'
import FloatingButtons from '@/components/FloatingButtons/FloatingButtons'
import NavbarGate from '@/components/Navbar/NavbarGate'
import { Footer } from '@/components/Footer/Footer'
import { GoogleAnalitics } from '@/components/Google/GoogleAnalitics'
import { BookingWidgetScript } from '@/components/Booking/BookingWidgetScript'


const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Calle Flora Hotel',
  description: 'Un hotel que hace homenaje a la eterna primavera',
  openGraph: {
    images: [
      {
        url: 'https://www.calleflorahotel.com/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Calle Flora Hotel',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          playfairDisplay.variable,
          quicksand.variable,
          'antialiased',
        )}
      >
        <NavbarGate />
        <FloatingButtons />
        {children}
        <GoogleAnalitics />
        {/* Booking widget as bottom bar (provider default) */}
        <BookingWidgetScript rootId="" />
        <Footer />
      </body>
    </html>
  )
}
