import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static giphyMapperToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url,
        }
    }

    static mapGiphyItemsToArray(item: GiphyItem[]): Gif[] {
        return item.map((gif) => this.giphyMapperToGif(gif));

    }
}