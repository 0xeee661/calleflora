/**
 * 📦 Mock Data para OnSaleProjects
 * @description Datos de prueba con estructura completa para desarrollo y testing
 * @version 1.0.0
 */

import { Maybe } from '@/types/graphql/graphql'
import { OnSaleProject } from '@/types/graphql/graphqlExtra'
/**
 * ✅ SOLID Principle: Single Responsibility
 * Este archivo solo contiene datos mock, separado de la lógica de negocio
 */

export const MOCK_ON_SALE_PROJECTS: Maybe<OnSaleProject>[] = [
  {
    __typename: 'OnSaleProject',
    _id: 'project-1',
    name: 'Calle flora',
    slug: 'calle-flora',
    description: 'Hotel en homenaje a las flores de Medellín',
    city: {
      __typename: 'City',
      _id: 'city-medellin',
      name: 'Medellín',
      sys: {
        id: 'city-medellin',
        publishedAt: '2025-01-01T00:00:00.000Z',
        firstPublishedAt: '2025-01-01T00:00:00.000Z',
        publishedVersion: 1,
        environmentId: 'master',
        spaceId: 's6qkfao1qv1i',
      },
      contentfulMetadata: {
        tags: [],
        concepts: [],
      },
    },
    location: {
      __typename: 'Location',
      lat: 6.209140153239753,
      lon: -75.56729253068396,
    },

    pricesCollection: {
      __typename: 'OnSaleProjectPricesCollection',
      items: [
        {
          __typename: 'OnSaleProjectPrice',
          _id: 'price-1',
          type: '',
          price: 0,
          priceFrom: true,
          description: 'Hotel en homenaje a las flores de Medellín',
          sys: {
            id: 'price-1',
            publishedAt: '2024-01-01T00:00:00.000Z',
            firstPublishedAt: '2024-01-01T00:00:00.000Z',
            publishedVersion: 1,
            environmentId: 'master',
            spaceId: 's6qkfao1qv1i',
          },
          contentfulMetadata: {
            tags: [],
            concepts: [],
          },
        },
      ],
      limit: 10,
      skip: 0,
      total: 1,
    },
    mainImage: {
      __typename: 'Asset',
      url: '/images/outside.png',
      title: 'Edificio Central Park',
      description: 'Vista exterior',
      width: 800,
      height: 600,
      size: 125000,
      contentType: 'image/jpeg',
      fileName: 'central-park.jpg',
      sys: {
        id: 'asset-1',
        publishedAt: '2024-01-01T00:00:00.000Z',
        firstPublishedAt: '2024-01-01T00:00:00.000Z',
        publishedVersion: 1,
        environmentId: 'master',
        spaceId: 's6qkfao1qv1i',
      },
      contentfulMetadata: {
        tags: [],
        concepts: [],
      },
    },
    yearlyRentability: 8.5,
    monthlyRentability: 0.71,
    sys: {
      id: 'project-1',
      publishedAt: '2024-01-01T00:00:00.000Z',
      firstPublishedAt: '2024-01-01T00:00:00.000Z',
      publishedVersion: 1,
      environmentId: 'master',
      spaceId: 's6qkfao1qv1i',
    },
    contentfulMetadata: {
      tags: [],
      concepts: [],
    },
  },
]

/**
 * 🎯 Utilidades de Ayuda para Mock Data
 */

export const getMockProjectsByCity = (cityName: string): Maybe<OnSaleProject>[] => {
  return MOCK_ON_SALE_PROJECTS.filter(
    project => project?.city?.name?.toLowerCase() === cityName.toLowerCase(),
  )
}

export const getMockProjectsByType = (type: string): Maybe<OnSaleProject>[] => {
  return MOCK_ON_SALE_PROJECTS.filter(
    project => project?.pricesCollection?.items[0]?.type?.toLowerCase() === type.toLowerCase(),
  )
}

export const getMockProjectsByPriceRange = (
  minPrice: number,
  maxPrice: number,
): Maybe<OnSaleProject>[] => {
  return MOCK_ON_SALE_PROJECTS.filter(project => {
    const price = project?.pricesCollection?.items[0]?.price || 0
    return price >= minPrice && price <= maxPrice
  })
}

/**
 * 📊 Constantes útiles para filtros
 */
export const MOCK_CITIES = ['Medellín', 'Envigado', 'Sabaneta']
export const MOCK_PROPERTY_TYPES = ['Apartamento', 'Casa', 'Loft']
export const MOCK_PRICE_RANGES = [
  { label: 'Menos de 300M', min: 0, max: 300000000 },
  { label: '300M - 500M', min: 300000000, max: 500000000 },
  { label: '500M - 700M', min: 500000000, max: 700000000 },
  { label: 'Más de 700M', min: 700000000, max: Infinity },
]
