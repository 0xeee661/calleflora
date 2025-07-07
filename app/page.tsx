import Hero from '@/components/home/Hero'
import Rooftop from '@/components/home/Rooftop'
import QuotePage from '@/components/home/QuotePage'
import Map from '@/components/home/Map'
import { Rooms } from '@/components/Rooms'
import { getRooms } from '@/lib/api'

export default async function Home() {
  const data = await getRooms({})

  return (
    <>
      <div className="scrollbar-hide font-istok no-scrollbar overflow-x-hidden scroll-smooth md:h-screen md:snap-y md:snap-mandatory md:overflow-y-scroll">
        <Hero />

        <Rooms rooms={data?.listCollection?.items || []} />

        <QuotePage />

        <Map />

        <Rooftop />
      </div>
    </>
  )
}
