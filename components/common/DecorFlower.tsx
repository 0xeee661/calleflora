'use client'

import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

type DecorFlowerProps = {
  src: string | StaticImageData
  alt?: string
  top?: string | number
  right?: string | number
  width: number
  height: number
  className?: string
  flipX?: boolean
  priority?: boolean
}

export function DecorFlower({
  src,
  alt = 'Flor decorativa',
  top = '10%',
  right = '5%',
  width,
  height,
  className,
  flipX = false,
  priority = false,
}: DecorFlowerProps) {
  return (
    <div
      className={cn(
        'absolute pointer-events-none select-none float-animate',
        className,
      )}
      style={{ top, right, width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 60vw, 500px"
        className={cn('object-contain', flipX && 'scale-x-[-1]')}
        priority={priority}
      />
    </div>
  )
}


