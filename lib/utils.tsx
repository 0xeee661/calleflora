import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import React from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convierte un texto en un array de elementos React con un patrón de palabras en cursiva
 * @param text - El texto a procesar
 * @param pattern - El patrón para aplicar cursiva (por defecto: cada 3ra palabra)
 * @param italicClassName - Clases CSS para las palabras en cursiva (por defecto: "font-semibold italic")
 * @returns Array de elementos React con el patrón aplicado
 */
export function applyItalicPattern(
  text: string,
  pattern: number = 3,
  italicClassName: string = "font-semibold italic"
): React.ReactNode[] {
  if (!text) return []

  const words = text.split(' ')
  return words.map((word, index) => {
    const shouldItalicize = (index + 1) % pattern === 0

    return shouldItalicize ? (
      <em key={index} className={italicClassName}>
        {word}{' '}
      </em>
    ) : (
      <span key={index}>{word} </span>
    )
  })
}
