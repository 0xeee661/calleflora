import Image from 'next/image'
import temporal_map from '@/public/images/temporal_map.png'
import temporal_map_mobile from '@/public/images/temporal_map_mobile.png'

const Map = () => {
  return (
    <section className="flex snap-start items-end justify-center md:h-screen">
      <Image
        src={temporal_map}
        alt="Mapa de Calle Flora Hotel, En el corazón de Colombia,existe un rincón donde la naturaleza susurra,y la literatura florece entre muros y jardines. CALLE FLORA es un hotel botánico"
        className="hidden w-auto max-w-full md:block md:h-[85%]"
      />
      <Image
        src={temporal_map_mobile}
        alt="Mapa de Calle Flora Hotel, En el corazón de Colombia,existe un rincón donde la naturaleza susurra,y la literatura florece entre muros y jardines. CALLE FLORA es un hotel botánico"
        className="h-auto w-full md:hidden"
      />
    </section>
  )
}

export default Map
