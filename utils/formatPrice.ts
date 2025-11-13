import { defaultLocale } from './constants'

export const formatPrice = (price = 0) => {
  return (
    '$' +
    price.toLocaleString(defaultLocale, {
      style: 'decimal',
      currency: 'USD',
      minimumFractionDigits: 0,
    })
  )
}
