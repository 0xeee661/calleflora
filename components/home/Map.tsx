import Image from 'next/image'
import florB from '@/public/images/newResources/florB.png'
import LocationMapHome from '../GoogleMaps/LocationMap'
import { MOCK_ON_SALE_PROJECTS } from '@/mocks/onSaleProjectsMock'

const FLOR_VISIBLE_HEIGHT = 550

const Map = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center md:h-auto">
      <div className='order-1 md:order-2 w-full md:w-1/2 h-full flex items-center 
      lg:items-start relative justify-center lg:justify-start'>
        <div className='text-white text-center lg:text-right 
        xl:pl-38 lg:pl-18  lg:mt-16 mt-10 mb-10 lg:mb-0 
        text-base md:text-xl md:text-2xl'>
          <p>Si vienes a Colombia y pasas por Medellín,</p>
          <p>tu destino imperdible será {"  "}
            <span className='font-bold'>Calle Flora Hotel</span>,</p>
          <p>un refugio natural en medio de la ciudad.</p>
          <p>Te esperamos</p>
        </div>
        <div
          className='hidden lg:block absolute 
          xl:right-[10%] lg:top-[57%] lg:right-[-5%] overflow-hidden 
          pointer-events-none select-none'
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
      <div className='order-2 md:order-1 w-full md:w-1/2 h-auto'>
        <LocationMapHome onSaleProjects={MOCK_ON_SALE_PROJECTS} height="650px" />
      </div>

    </section>
  )
}

export default Map
