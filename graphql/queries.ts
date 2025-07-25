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
            poster {
              url
            }
          }
        }
      }
    }
  }
`

export const legalData = gql`
  query LegalData($id: String!, $locale: String) {
    legal(id: $id, locale: $locale) {
      title
      content {
        json
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

export const allies = gql`
  query Allies($locale: String) {
    alliesCollection(locale: $locale, limit: 1) {
      items {
        listCollection(limit: 1) {
          items {
            name
            description
            benefit
            category
            image {
              url
            }
          }
        }
      }
    }
  }
`
