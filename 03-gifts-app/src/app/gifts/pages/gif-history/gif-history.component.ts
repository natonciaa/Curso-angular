import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifsListComponent } from "../../components/gifs-list/gif-list.component";
@Component({
    selector: 'app-gif-history',
    standalone: true,
    imports: [
        CommonModule,
        GifsListComponent
    ],
    templateUrl: './gif-history.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent {

    gifService = inject(GifService);
    query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

    gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}

