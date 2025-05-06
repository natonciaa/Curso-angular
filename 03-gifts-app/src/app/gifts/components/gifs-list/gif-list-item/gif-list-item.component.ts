import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'gif-list-item',
    standalone: true,
    imports: [
        CommonModule, GifListItemComponent
    ],
    templateUrl: './gif-list-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListItemComponent {
    imageUrl = input.required<string>();
}
