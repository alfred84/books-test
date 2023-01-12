import { Thumbnail } from "../interfaces/thumbnail";

export class Book {

    constructor (
        public isbn: string,
        public title: string,
        public authors: string[],        
        public rating: number,
        public published: string,        
        public price: number,
        public firstThumbnailUrl: string,
        public subtitle?: string,
        public description?: string,
        public thumbnails?: Thumbnail[],
    ) {}

}