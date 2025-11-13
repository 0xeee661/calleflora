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
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!spaceId || !accessToken) {
    console.error('[Contentful] Environment variables not set:', {
      hasSpaceId: !!spaceId,
      hasAccessToken: !!accessToken,
    })
    return { data: {} as Query }
  }

  try {
    const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`
    const body = JSON.stringify({ 
      query: getGqlString(query), 
      variables: variables || {} 
    })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body,
      next: next || { revalidate: 3600 },
    })
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unable to read error')
      console.error('[Contentful] GraphQL request failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText.substring(0, 200),
      })
      return { data: {} as Query }
    }

    // Parse JSON defensively
    try {
      const json = await response.json()
      
      // Check for GraphQL errors
      if (json.errors && Array.isArray(json.errors)) {
        console.error('[Contentful] GraphQL errors:', json.errors)
      }
      
      // Ensure structure is as expected
      if (!json || typeof json !== 'object' || !('data' in json)) {
        console.error('[Contentful] Invalid response shape:', json)
        return { data: {} as Query }
      }
      
      return json as { data: Query }
    } catch (parseError) {
      console.error('[Contentful] Failed to parse JSON:', parseError)
      return { data: {} as Query }
    }
  } catch (error) {
    console.error('[Contentful] Fetch error:', error instanceof Error ? error.message : error)
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
