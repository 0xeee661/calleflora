/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Rooms {\n    roomsCollection(limit: 1) {\n      items {\n        listCollection {\n          items {\n            type\n            description\n            imageLetter {\n              url\n            }\n            imagesCollection {\n              items {\n                url\n                width\n                height\n              }\n            }\n            background {\n              url\n              contentType\n            }\n          }\n        }\n      }\n    }\n  }\n": typeof types.RoomsDocument,
    "\n  query RoomsSlugs {\n    roomCollection {\n      items {\n        slug\n      }\n    }\n  }\n": typeof types.RoomsSlugsDocument,
    "\n  query RoomData($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        type\n        description\n        imageLetter {\n          url\n        }\n        imagesCollection {\n          items {\n            url\n            width\n            height\n          }\n        }\n        background {\n          url\n          contentType\n        }\n        flower1 {\n          url\n        }\n        message\n        flower2 {\n          url\n        }\n        amenities\n        services\n      }\n    }\n  }\n": typeof types.RoomDataDocument,
    "\n  query RoomSeo($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        seo {\n          title\n          description\n          openGraphImage {\n            url\n          }\n        }\n      }\n    }\n  }\n": typeof types.RoomSeoDocument,
};
const documents: Documents = {
    "\n  query Rooms {\n    roomsCollection(limit: 1) {\n      items {\n        listCollection {\n          items {\n            type\n            description\n            imageLetter {\n              url\n            }\n            imagesCollection {\n              items {\n                url\n                width\n                height\n              }\n            }\n            background {\n              url\n              contentType\n            }\n          }\n        }\n      }\n    }\n  }\n": types.RoomsDocument,
    "\n  query RoomsSlugs {\n    roomCollection {\n      items {\n        slug\n      }\n    }\n  }\n": types.RoomsSlugsDocument,
    "\n  query RoomData($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        type\n        description\n        imageLetter {\n          url\n        }\n        imagesCollection {\n          items {\n            url\n            width\n            height\n          }\n        }\n        background {\n          url\n          contentType\n        }\n        flower1 {\n          url\n        }\n        message\n        flower2 {\n          url\n        }\n        amenities\n        services\n      }\n    }\n  }\n": types.RoomDataDocument,
    "\n  query RoomSeo($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        seo {\n          title\n          description\n          openGraphImage {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.RoomSeoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Rooms {\n    roomsCollection(limit: 1) {\n      items {\n        listCollection {\n          items {\n            type\n            description\n            imageLetter {\n              url\n            }\n            imagesCollection {\n              items {\n                url\n                width\n                height\n              }\n            }\n            background {\n              url\n              contentType\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Rooms {\n    roomsCollection(limit: 1) {\n      items {\n        listCollection {\n          items {\n            type\n            description\n            imageLetter {\n              url\n            }\n            imagesCollection {\n              items {\n                url\n                width\n                height\n              }\n            }\n            background {\n              url\n              contentType\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RoomsSlugs {\n    roomCollection {\n      items {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query RoomsSlugs {\n    roomCollection {\n      items {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RoomData($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        type\n        description\n        imageLetter {\n          url\n        }\n        imagesCollection {\n          items {\n            url\n            width\n            height\n          }\n        }\n        background {\n          url\n          contentType\n        }\n        flower1 {\n          url\n        }\n        message\n        flower2 {\n          url\n        }\n        amenities\n        services\n      }\n    }\n  }\n"): (typeof documents)["\n  query RoomData($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        type\n        description\n        imageLetter {\n          url\n        }\n        imagesCollection {\n          items {\n            url\n            width\n            height\n          }\n        }\n        background {\n          url\n          contentType\n        }\n        flower1 {\n          url\n        }\n        message\n        flower2 {\n          url\n        }\n        amenities\n        services\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RoomSeo($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        seo {\n          title\n          description\n          openGraphImage {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query RoomSeo($slug: String!, $locale: String) {\n    roomCollection(limit: 1, where: { slug: $slug }, locale: $locale) {\n      items {\n        seo {\n          title\n          description\n          openGraphImage {\n            url\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;