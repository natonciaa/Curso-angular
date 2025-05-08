import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
@Component({
    selector: 'app-gif-history',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './gif-history.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent {

    query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

}

