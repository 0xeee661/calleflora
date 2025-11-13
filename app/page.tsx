import Hero from '@/components/home/Hero'
/*   import Rooftop from '@/components/home/Rooftop'
  import QuotePage from '@/components/home/QuotePage' */
import Map from '@/components/home/Map'
import FloatingMenu from '@/components/FloatingMenu/FloatingMenu'
import { Rooftop } from '@/components/home/Rooftop'
import Habitacion from '@/components/Habitacion/Habitacion'
import HotelSpaces from '@/components/Spaces/HotelSpaces'

export default async function Home() {
  return (
    <>
      <Hero />

      {/* <Building /> */}

      <Habitacion />

      {/* <Rooms rooms={data?.listCollection?.items || []} /> */}

      {/* <QuotePage /> */}

      <div className="hidden md:block">
        <HotelSpaces />
      </div>

      <Map />

      {/* <Rooftop /> */}

      <FloatingMenu hideOnBuilding={true} />
    </>
  )
}
