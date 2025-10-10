import Hero from '@/components/home/Hero'
/*   import Rooftop from '@/components/home/Rooftop'
  import QuotePage from '@/components/home/QuotePage' */
import Map from '@/components/home/Map'
import { Rooms } from '@/components/Rooms'
import { getRooms } from '@/lib/api'
import FloatingMenu from '@/components/FloatingMenu/FloatingMenu'
import { Spaces } from '@/components/home/Spaces'
import { Rooftop } from '@/components/home/Rooftop'
import Building from '@/components/Building/Building'

export default async function Home() {
  const data = await getRooms({})

  return (
    <>
      <Hero />

      <Building />

      <Rooms rooms={data?.listCollection?.items || []} />

      {/*         <QuotePage /> */}

      <Map />

      <Spaces />

      <Rooftop />

      <FloatingMenu hideOnBuilding={true} />
    </>
  )
}
