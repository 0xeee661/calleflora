/**
 * useVideoAutoplay Hook
 * 
 * Custom hook para manejar reproducción automática de videos en iOS
 * Compatible con Safari y Chrome en iPhone/iPad
 * 
 * @description
 * Implementa múltiples estrategias para iniciar reproducción:
 * 1. Autoplay inmediato cuando el video está listo
 * 2. Intersection Observer para videos visibles en viewport
 * 3. Event listeners para primera interacción del usuario
 * 
 * @example
 * const videoRef = useVideoAutoplay<HTMLVideoElement>()
 * return <video ref={videoRef} muted playsInline loop autoPlay />
 */

import { useEffect, useRef } from 'react'

interface UseVideoAutoplayOptions {
  /**
   * Umbral de visibilidad para Intersection Observer (0-1)
   * @default 0.25
   */
  threshold?: number
  
  /**
   * Callback cuando el video comienza a reproducirse
   */
  onPlayStart?: () => void
  
  /**
   * Callback cuando falla la reproducción automática
   */
  onPlayError?: (error: unknown) => void
}

/**
 * Hook para manejar autoplay de videos en iOS (Safari y Chrome)
 * 
 * @param options Opciones de configuración
 * @returns Ref para asignar al elemento video
 */
export function useVideoAutoplay<T extends HTMLVideoElement>(
  options: UseVideoAutoplayOptions = {}
) {
  const { threshold = 0.25, onPlayStart, onPlayError } = options
  const videoRef = useRef<T | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hasPlayed = false

    /**
     * Intenta reproducir el video con todas las configuraciones necesarias
     * para iOS Chrome y Safari
     */
    const tryPlay = async () => {
      if (hasPlayed || !video) return

      try {
        // Configuración crítica para iOS
        video.muted = true
        video.playsInline = true
        video.defaultMuted = true
        video.setAttribute('playsinline', '')
        video.setAttribute('webkit-playsinline', 'true')

        await video.play()
        hasPlayed = true
        onPlayStart?.()
      } catch (error) {
        // No marcar error inmediatamente, esperar interacción del usuario
        console.warn('[useVideoAutoplay] Autoplay failed, waiting for user interaction:', error)
        onPlayError?.(error)
      }
    }

    // Estrategia 1: Intentar reproducir inmediatamente si el video está listo
    if (video.readyState >= 2) {
      void tryPlay()
    }

    // Estrategia 2: Intentar cuando el video pueda reproducirse
    const onCanPlay = () => void tryPlay()
    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('loadeddata', onCanPlay)
    video.addEventListener('loadedmetadata', onCanPlay)

    // Estrategia 3: Usar Intersection Observer para videos visibles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video && !hasPlayed) {
            void tryPlay()
          }
        })
      },
      { threshold }
    )

    observer.observe(video)

    // Estrategia 4: Intentar en primera interacción del usuario
    // Crítico para Chrome en iOS que bloquea autoplay más agresivamente
    const interactionEvents = ['touchstart', 'touchend', 'click', 'scroll', 'keydown']
    
    const onUserInteract = () => {
      if (!hasPlayed && video) {
        void tryPlay()
      }
      // Limpiar listeners después del primer intento
      interactionEvents.forEach(event => {
        document.removeEventListener(event, onUserInteract)
        window.removeEventListener(event, onUserInteract)
      })
    }

    // Agregar listeners a document y window para mayor cobertura
    interactionEvents.forEach(event => {
      document.addEventListener(event, onUserInteract, { once: true, passive: true })
      window.addEventListener(event, onUserInteract, { once: true, passive: true })
    })

    // Cleanup
    return () => {
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('loadeddata', onCanPlay)
      video.removeEventListener('loadedmetadata', onCanPlay)
      observer.disconnect()
      interactionEvents.forEach(event => {
        document.removeEventListener(event, onUserInteract)
        window.removeEventListener(event, onUserInteract)
      })
    }
  }, [threshold, onPlayStart, onPlayError])

  return videoRef
}

