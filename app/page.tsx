import Hero from '@/components/home/Hero'
/*   import Rooftop from '@/components/home/Rooftop'
  import QuotePage from '@/components/home/QuotePage' */
import Map from '@/components/home/Map'
import { Rooms } from '@/components/Rooms'
import { getRooms } from '@/lib/api'
import FloatingMenu from '@/components/FloatingMenu/FloatingMenu'

export default async function Home() {
  const data = await getRooms({})

  return (
    <>
      <div>
        <Hero />

        <Rooms rooms={data?.listCollection?.items || []} />

        {/*         <QuotePage /> */}

        <Map />

        {/*         <Rooftop /> */}
      </div>

      <FloatingMenu />
    </>
  )
}
