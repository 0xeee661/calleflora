import Image from 'next/image'
import florB from '@/public/images/newResources/florB.png'
import LocationMapHome from '../GoogleMaps/LocationMap'
import { MOCK_ON_SALE_PROJECTS } from '@/mocks/onSaleProjectsMock'

const FLOR_VISIBLE_HEIGHT = 550

const Map = () => {
  return (
    <section className="flex items-stretch justify-center md:h-auto">
      <div className='w-1/2 h-auto'>
        <LocationMapHome onSaleProjects={MOCK_ON_SALE_PROJECTS} height="360px" />
      </div>
      <div className='w-1/2 h-full flex items-start relative'>
        <div className='text-white text-right pl-38 mt-16 text-2xl'>
          <p>Si vienes a Colombia y pasas por Medellín,</p>
          <p>tu destino imperdible será {"  "}
            <span className='font-bold'>Calle Flora Hotel</span>,</p>
          <p>un refugio natural en medio de la ciudad.</p>
          <p>Te esperamos</p>
        </div>
        <div
          className='absolute right-[10%] top-[52%] overflow-hidden pointer-events-none select-none'
          style={{ width: 500, height: FLOR_VISIBLE_HEIGHT }}
        >
          <Image
            src={florB}
            alt="Flor decorativa"
            className='object-contain scale-x-[-1]'
            style={{ width: 800, height: 1000 }}
            priority={false}
          />
        </div>
      </div>

    </section>
  )
}

export default Map
