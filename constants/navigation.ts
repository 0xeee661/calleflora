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
    label: 'Restaurante',
    href: '/restaurante',
  }
] as const

export type NavigationLink = (typeof navigationLinks)[number]
