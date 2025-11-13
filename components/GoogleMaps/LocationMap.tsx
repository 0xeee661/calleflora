'use client'

import {
  type CarouselApi,
} from '../ui/carousel'
import { APIProvider } from '@vis.gl/react-google-maps'
import {  useEffect, useState } from 'react'
import GoogleMap from './GoogleMaps'
import { Maybe } from '../../types/graphql/graphql'
import { FinalizedProject, OnSaleProject } from '@/types/graphql/graphqlExtra'
type Props = {
  onSaleProjects: Maybe<OnSaleProject>[]
  height?: string
}

export default function LocationMapHome({ onSaleProjects, height }: Props) {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [mapHeight, setMapHeight] = useState<string>(height ?? '650px')
  
  // Ajuste responsivo de altura del mapa
  useEffect(() => {
    const computeHeight = () => {
      const w = window.innerWidth
      if (w <= 325) return '280px'
      if (w <= 375) return '320px'
      if (w <= 425) return '360px'
      if (w <= 768) return '480px'
      return height ?? '650px'
    }
    setMapHeight(computeHeight())
    const onResize = () => setMapHeight(computeHeight())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [height])
  
  // 🎯 Mock del Carousel API (opcional, puede ser undefined)
  const api: CarouselApi = undefined

  // 🎯 Función para manejar la selección de proyecto
  // Note: selectedProject se usa para logging de debug
  const handleSetSelectedProject = (project: OnSaleProject | FinalizedProject) => {
    console.log('📍 Proyecto seleccionado:', project.name)
  }

  // ✅ API Key desde variable de entorno
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || "AIzaSyDAgJ2G7tHzlOG1-fNOaqgRTkv2T_7xgek"

  if (!apiKey) {
    console.error('❌ Google Maps API Key no encontrada. Configure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY en .env')
    return (
      <section className="relative min-h-screen snap-start flex items-center justify-center bg-gray-100" id="location">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">⚠️ Error de Configuración</h2>
          <p className="text-gray-700 mb-2">
            La API Key de Google Maps no está configurada.
          </p>
          <p className="text-sm text-gray-500">
            Por favor, configure <code className="bg-gray-100 px-2 py-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> en su archivo .env
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative snap-start" id="location">
      <APIProvider apiKey={apiKey}>
        <div className="relative w-full max-md:order-first" style={{ height: mapHeight }}>
          <GoogleMap
            data={onSaleProjects}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            setSelectedProject={handleSetSelectedProject}
            mapCustomStyle={{ width: '100%', height: mapHeight }}
            mapProps={{
              scrollwheel: false,
            }}
            carouselApi={api}
            showExtraInfo={true}
          />
        </div>
      </APIProvider>
    </section>
  )
}

