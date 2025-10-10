import { allies, legalData, roomData, rooms, roomSeo } from '@/graphql/queries'
import { Query } from '@/types/graphql/graphql'
import { getGqlString } from '@/utils/helpers/getGqlString'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

type GetData = {
  preview?: boolean
  locale?: string
}

async function fetchGraphQL({
  query,
  next,
  variables,
}: {
  query: TypedDocumentNode
  variables?: { [key: string]: string | number | boolean | null | undefined }
  preview?: boolean
  next?: NextFetchRequestConfig
}): Promise<{
  data: Query
}> {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.error('Contentful environment variables are not set')
    return { data: {} as Query }
  }

  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query: getGqlString(query), variables }),
        next: next || { revalidate: 3600 },
      },
    )
    
    if (!response.ok) {
      console.error(`GraphQL request failed: ${response.status} ${response.statusText}`)
      return { data: {} as Query }
    }
    
    return response.json()
  } catch (error) {
    console.error('Error fetching from Contentful:', error)
    return { data: {} as Query }
  }
}

export const getRooms = async ({ preview, locale }: GetData) => {
  const response = await fetchGraphQL({
    query: rooms,
    preview,
    variables: { locale },
  })
  return response.data.roomsCollection?.items[0]
}

export const getRoomData = async ({
  preview,
  locale,
  slug,
}: GetData & { slug: string }) => {
  const response = await fetchGraphQL({
    query: roomData,
    preview,
    variables: { locale, slug },
  })
  return response.data.roomCollection?.items[0]
}

export const getRoomSeo = async ({
  preview,
  locale,
  slug,
}: GetData & { slug: string }) => {
  const response = await fetchGraphQL({
    query: roomSeo,
    preview,
    variables: { locale, slug },
  })
  return response.data.roomCollection?.items[0]?.seo
}

export const getAllies = async ({ preview, locale }: GetData) => {
  const response = await fetchGraphQL({
    query: allies,
    preview,
    variables: { locale },
  })
  return response.data.alliesCollection?.items[0]?.listCollection?.items
}

export const getLegalData = async ({
  preview,
  id,
  locale,
}: GetData & { id: string }) => {
  try {
    const response = await fetchGraphQL({
      query: legalData,
      preview,
      variables: { id, locale },
    })
    return response?.data?.legal || null
  } catch (error) {
    console.error('Error fetching legal data:', error)
    return null
  }
}
