import { rooms } from '@/graphql/queries'
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
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: getGqlString(query), variables }),
      next,
    },
  ).then(response => response.json())
}

export const getRooms = async ({ preview, locale }: GetData) => {
  const response = await fetchGraphQL({
    query: rooms,
    preview,
    variables: { locale },
  })
  console.log(response)
  return response.data.roomsCollection?.items[0]
}
