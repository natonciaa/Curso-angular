import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gif-list.component";
import { GifService } from '../../services/gifs.service';

@Component({
    selector: 'app-',
    standalone: true,
    imports: [
        CommonModule,
        GifsListComponent
    ],
    templateUrl: './trending.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class trendingComponent {
    gifService = inject(GifService);
    gifslist = computed(() => this.gifService.trendingGifs());
}
