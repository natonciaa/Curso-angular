import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
    selector: 'gif-list',
    standalone: true,
    imports: [
        CommonModule,
        GifListItemComponent
    ],
    templateUrl: './gif-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsListComponent {

    gifs = input.required<Gif[]>();

}
