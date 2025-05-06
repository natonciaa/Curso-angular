import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gif-list.component';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
        CommonModule, GifsListComponent
    ],
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchComponent {

    gifService = inject(GifService);

    gifs = signal<Gif[]>([]);

    onSearch(query: string) {
        this.gifService.searchGifs(query).subscribe((resp) => {
            console.log({ search: resp });
            this.gifs.set(resp);
        })
        console.log({ query });
    }
}
