import Image from 'next/image'
import florB from '@/public/images/newResources/florB.png'
import mapImage from '@/public/images/map.png'
import LocationMapHome from '../GoogleMaps/LocationMap'
import { MOCK_ON_SALE_PROJECTS } from '@/mocks/onSaleProjectsMock'

// ============================
// CONFIGURACIÓN EDITABLE FLOR
// ============================
// Ancho visible del contenedor (en px)
const FLOR_WIDTH = 540
// Altura visible (recorte inferior) del contenedor (en px)
const FLOR_VISIBLE_HEIGHT = 640
// Altura total de la imagen (en px)
const FLOR_FULL_HEIGHT = 1000

const Map = () => {
  return (
    <section className="flex flex-col lg:flex-row items-stretch justify-center md:h-auto">
      <div className='order-1 lg:order-2 w-full lg:w-1/2 h-full flex items-center 
      lg:items-start relative justify-center lg:justify-start'>
        <div
          className='text-white lg:text-right text-center font-playfair font-normal leading-normal
        xl:pl-38 lg:pl-18 lg:mt-16 mt-10 mb-10 lg:mb-0 lg:text-[24px] sm:text-[18px] md:text-[20px] text-[16px]'
        >
          <p>Si vienes a Colombia y pasas por Medellín,</p>
          <p>tu destino imperdible será {"  "}
            <span className='font-bold'>Calle Flora Hotel</span>,</p>
          <p>un refugio natural en medio de la ciudad.</p>
          <p>Te esperamos</p>
        </div>
        <div
          className='hidden lg:block absolute 
          xl:right-[10%] lg:top-[10%] lg:right-[-5%] overflow-hidden 
          pointer-events-none select-none'
          style={{ width: FLOR_WIDTH, height: FLOR_VISIBLE_HEIGHT }}
        >
          <Image
            src={florB}
            alt="Flor decorativa"
            className='object-contain scale-x-[-1]'
            style={{ width: FLOR_WIDTH, height: FLOR_FULL_HEIGHT }}
            priority={false}
          />
        </div>
      </div>
      <div className='order-2 lg:order-1 w-full lg:w-1/2 h-auto'>
        <LocationMapHome onSaleProjects={MOCK_ON_SALE_PROJECTS} height="650px" />
      </div>

    </section>
  )
}

export default Map
