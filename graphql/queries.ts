import { gql } from 'graphql-tag'

export const rooms = gql`
  query Rooms {
    roomsCollection(limit: 1) {
      items {
        listCollection {
          items {
            type
            description
            imageLetter {
              url
            }
            imagesCollection {
              items {
                url
                width
                height
              }
            }
            background {
              url
              contentType
            }
          }
        }
      }
    }
  }
`

export const roomsSlugs = gql`
  query RoomsSlugs {
    roomCollection {
      items {
        slug
      }
    }
  }
`

export const roomData = gql`
  query RoomData($slug: String!, $locale: String) {
    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {
      items {
        type
        description
        imageLetter {
          url
        }
        imagesCollection {
          items {
            url
            width
            height
          }
        }
        background {
          url
          contentType
        }
        flower1 {
          url
        }
        message
        flower2 {
          url
        }
        amenities
        services
      }
    }
  }
`

export const roomSeo = gql`
  query RoomSeo($slug: String!, $locale: String) {
    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {
      items {
        seo {
          title
          description
          openGraphImage {
            url
          }
        }
      }
    }
  }
`
