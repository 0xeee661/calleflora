import { MAP_ID } from '@/utils/constants'
import {
  AdvancedMarker,
  AdvancedMarkerProps,
  InfoWindow,
  Map,
  useMap,
} from '@vis.gl/react-google-maps'
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import type { Marker as MarkerType } from '@googlemaps/markerclusterer'
import { MapProps } from '@vis.gl/react-google-maps'
import { CarouselApi } from '../ui/carousel'
import { Maybe} from '@/types/graphql/graphql'
import { formatPrice } from '../../utils/formatPrice'
import Link from 'next/link'
import { FinalizedProject, OnSaleProject } from '@/types/graphql/graphqlExtra'

export default function GoogleMap({
  data,
  selectedKey,
  setSelectedKey,
  mapCustomStyle,
  mapProps,
  showExtraInfo = true,
  setSelectedProject,
  carouselApi,
}: {
  data: Maybe<OnSaleProject | FinalizedProject>[]
  selectedKey: string | null
  setSelectedKey: (key: string | null) => void
  mapCustomStyle?: React.CSSProperties
  mapProps?: MapProps
  showExtraInfo?: boolean
  setSelectedProject?: (project: OnSaleProject | FinalizedProject) => void
  carouselApi?: CarouselApi
}) {
  const [markers, setMarkers] = useState<{ [key: string]: MarkerType }>({})

  const selectedProject = useMemo(
    () =>
      data && selectedKey ? data.find(t => t?.name === selectedKey)! : null,
    [data, selectedKey],
  )

  const handleMarkerClick = useCallback(
    (project: OnSaleProject | FinalizedProject) => {
      if (project?.name) {
        setSelectedKey(project?.name)
      }
      setSelectedProject?.(project)
      carouselApi?.scrollTo(data.findIndex(t => t?.name === project.name))
    },
    [setSelectedKey, setSelectedProject, carouselApi, data],
  )

  const handleInfoWindowClose = useCallback(() => {
    setSelectedKey(null)
  }, [setSelectedKey])

  const setMarkerRef = useCallback((marker: MarkerType | null, key: string) => {
    setMarkers(markers => {
      if ((marker && markers[key]) || (!marker && !markers[key])) return markers

      if (marker) {
        return { ...markers, [key]: marker }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [key]: _, ...newMarkers } = markers

        return newMarkers
      }
    })
  }, [])

  // Calcular el centro basado en los proyectos disponibles
  const calculateCenter = (): { lat: number; lng: number } => {
    const validProjects = data.filter(
      (item): item is OnSaleProject | FinalizedProject => 
        item !== null && 
        item?.location !== null &&
        typeof item?.location?.lat === 'number' && 
        typeof item?.location?.lon === 'number'
    )
    
    if (validProjects.length === 0) {
      return { lat: 6.25184, lng: -75.56359 } // Centro por defecto
    }
    
    // Si hay solo un proyecto, centrarlo
    if (validProjects.length === 1) {
      const project = validProjects[0]
      return {
        lat: project.location!.lat as number,
        lng: project.location!.lon as number
      }
    }
    
    // Si hay múltiples, calcular el centro promedio
    const sumLat = validProjects.reduce((sum, item) => {
      return sum + (item.location!.lat as number)
    }, 0)
    const sumLng = validProjects.reduce((sum, item) => {
      return sum + (item.location!.lon as number)
    }, 0)
    
    return {
      lat: sumLat / validProjects.length,
      lng: sumLng / validProjects.length
    }
  }

  const mapCenter = calculateCenter()

  return (
    <Map
      id={MAP_ID}
      mapId={MAP_ID}
      center={mapCenter}
      defaultZoom={13}
      mapTypeControl={false}
      fullscreenControl={false}
      streetViewControl={false}
      clickableIcons={false}
      minZoom={3}
      maxZoom={21}
      style={mapCustomStyle || { width: '100%', height: '100%', minHeight: '600px' }}
      {...mapProps}
    >
      {data.map(
        item =>
          item?.location?.lat &&
          item?.location.lon && (
            <MarkerWithInfoWindow
              key={item.name}
              position={{
                lat: item.location.lat,
                lng: item.location.lon,
              }}
              project={item}
              onClickFN={handleMarkerClick}
              setMarkerRef={setMarkerRef}
              setSelectedKey={setSelectedKey}
              closeInfoWindow={handleInfoWindowClose}
            />
          ),
      )}
      {selectedKey && (
        <InfoWindow
          anchor={markers[selectedKey]}
          onCloseClick={handleInfoWindowClose}
          headerDisabled
          className="overflow-hidden pr-0"
        >
          <Link
            href={
              showExtraInfo
                ? `/proyecto/${selectedProject?.slug}`
                : `/proyectos-terminados/${selectedProject?.slug}`
            }
            className="flex flex-col w-[280px] bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Imagen del proyecto */}
            <div className="h-[160px] w-full overflow-hidden">
              {selectedProject?.mainImage?.url && (
                <Image
                  src={selectedProject?.mainImage?.url}
                  alt={selectedProject?.name || ''}
                  className="h-full w-full object-cover"
                  width={280}
                  height={160}
                />
              )}
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-4 flex flex-col gap-3">
              {/* Nombre del proyecto en rojo */}
              <h1 className="text-[#E63946] font-bold text-2xl leading-tight">
                {selectedProject?.name}
              </h1>

              {/* Ubicación y badge de tipo */}
              <div className="flex items-center justify-between gap-2">
                <p className="text-gray-600 text-sm font-normal">
                  {selectedProject?.city?.name}, Antioquia
                </p>

                {showExtraInfo && (
                  <span className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 text-xs font-normal whitespace-nowrap">
                    {
                      (selectedProject as OnSaleProject)?.pricesCollection
                        ?.items[0]?.type || 'Inversión'
                    }
                  </span>
                )}
              </div>

              {/* Precio con fondo rojo */}
              {showExtraInfo && (
                <div className="bg-[#E63946] rounded-full px-4 w-fit">
                  <p className="text-white font-bold text-xl">
                    {formatPrice(
                      (selectedProject as OnSaleProject)?.pricesCollection
                        ?.items[0]?.price ?? 0,
                    )}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </InfoWindow>
      )}
    </Map>
  )
}

type Props = AdvancedMarkerProps & {
  project: OnSaleProject | FinalizedProject
  position: { lat: number; lng: number }
  setMarkerRef: (marker: MarkerType | null, key: string) => void
  onClickFN: (project: OnSaleProject | FinalizedProject) => void
  setSelectedKey: (key: string) => void
  closeInfoWindow: () => void
}

const MarkerWithInfoWindow = ({
  project,
  position,
  setMarkerRef,
  onClickFN,
  setSelectedKey,
  closeInfoWindow,
}: Props) => {
  const map = useMap(MAP_ID)
  const handleClick = useCallback(() => {
    onClickFN(project)
    map?.panTo(position)
    map?.setZoom(17)
    closeInfoWindow()

    setTimeout(() => {
      if (project.name) {
        setSelectedKey(project.name)
      }
    }, 250)
  }, [onClickFN, project, map, position, setSelectedKey, closeInfoWindow])

  const ref = useCallback(
    (marker: google.maps.marker.AdvancedMarkerElement) => {
      if (project.name) {
        setMarkerRef(marker, project.name)
      }
    },
    [setMarkerRef, project.name],
  )

  return (
    <AdvancedMarker 
      position={position} 
      ref={ref} 
      onClick={handleClick}
      title={project.name || 'Proyecto'}
    >
      <Image
        src="/svgs/pin-marker.svg"
        alt="pin-marker"
        width={32}
        height={32}
        className="size-8"
      />
    </AdvancedMarker>
  )
}
