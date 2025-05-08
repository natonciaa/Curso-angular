import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { environment } from "@environments/environment";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
import { Gif } from "../interfaces/gif.interface";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifService {

    private http = inject(HttpClient);
    trendingGifs = signal<Gif[]>([]);

    searchHistory = signal<Record<string, Gif[]>>({});
    searchHystoryKeys = computed(() => Object.keys(this.searchHistory()));
    constructor() {
        this.loadTrendingGifs();
    }
    loadTrendingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
            },
        }).subscribe((resp) => {

            const gifs = GifMapper.mapGiphyItemsToArray(resp.data);
            this.trendingGifs = signal(gifs);
            console.log(gifs)
        });

    }

    searchGifs(query: string) {

        //  https://api.giphy.com/v1/gifs/search?api_key=BWfnBruewyxz8vh7OmCBzmzSlPSRT2om&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                q: query,
                limit: 20,
            },
        }).pipe(
            map(({ data }) => data),
            map((items) => GifMapper.mapGiphyItemsToArray(items)),

            //history
            tap((items) => {
                this.searchHistory.update((history) => ({
                    ...history,
                    [query.toLowerCase()]: items,
                }));
            })
        );
    }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? [];
    }
}