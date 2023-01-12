import { Thumbnail } from "./thumbnail"

export interface Books {
    isbn: string
    title: string
    authors: string[]
    subtitle: string
    rating: number
    published: string
    description: string
    thumbnails: Thumbnail[]
    price: number
    firstThumbnailUrl: string
}
