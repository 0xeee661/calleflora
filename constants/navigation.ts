export const navigationLinks = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Habitaciones',
    href: '/habitaciones',
  },
  {
    label: 'Rooftop',
    href: '/rooftop',
  },
  {
    label: 'Restaurante',
    href: '/restaurante',
  },
  {
    label: 'Espacios',
    href: '/espacios',
  },
  {
    label: 'Aliados',
    href: '/aliados',
  },
] as const

export type NavigationLink = (typeof navigationLinks)[number]
