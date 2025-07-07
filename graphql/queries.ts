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
