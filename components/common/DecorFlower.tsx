'use client'

import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

type DecorFlowerProps = {
  src: string | StaticImageData
  alt?: string
  top?: string | number
  right?: string | number
  topLg?: string | number
  rightLg?: string | number
  width: number
  height: number
  className?: string
  flipX?: boolean
  priority?: boolean
  // Configuración de corte inferior (en píxeles)
  visibleHeight?: number
  // Opacidad de la capa sobre la imagen (0 a 1, donde 0 = transparente y 1 = opaco)
  overlayOpacity?: number
}

export function DecorFlower({
  src,
  alt = 'Flor decorativa',
  top = '10%',
  right = '30%',
  topLg,
  rightLg = '20%',
  width,
  height,
  className,
  flipX = false,
  priority = false,
  visibleHeight,
  overlayOpacity = 0,
}: DecorFlowerProps) {
  // Usar visibleHeight si se proporciona, de lo contrario usar height completo
  const containerHeight = visibleHeight || height
  
  const styleVars: React.CSSProperties & {
    ['--df-top-base']?: string | number
    ['--df-right-base']?: string | number
    ['--df-top-lg']?: string | number
    ['--df-right-lg']?: string | number
  } = {
    top: 'var(--df-top-final)',
    right: 'var(--df-right-final)',
    width: width,
    height: containerHeight,
    ['--df-top-base']: top,
    ['--df-right-base']: right,
    ['--df-top-lg']: topLg,
    ['--df-right-lg']: rightLg,
  }
  
  return (
    <div
      className={cn(
        'absolute pointer-events-none select-none hidden lg:block df-pos overflow-hidden',
        className,
      )}
      style={styleVars}
    >
      {/* Imagen de la flor - se corta desde abajo */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn('object-contain', flipX && 'scale-x-[-1]')}
        style={{ width, height }}
        priority={priority}
      />
      
      {/* Capa de opacidad configurable sobre todo el contenedor */}
      {overlayOpacity > 0 && (
        <div 
          className="absolute inset-0 bg-black pointer-events-none z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <style jsx>{`
        .df-pos {
          --df-top-final: var(--df-top-base);
          --df-right-final: var(--df-right-base);
        }
        /* Solo entre 1024px y 1279px usa los valores *Lg */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .df-pos {
            --df-top-final: var(--df-top-lg, var(--df-top-base));
            --df-right-final: var(--df-right-lg, var(--df-right-base));
          }
        }
        /* A partir de 1280px vuelve a los valores base */
        @media (min-width: 1280px) {
          .df-pos {
            --df-top-final: var(--df-top-base);
            --df-right-final: var(--df-right-base);
          }
        }
      `}</style>
    </div>
  )
}


