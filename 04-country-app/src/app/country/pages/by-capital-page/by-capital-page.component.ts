import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-by-capital-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './by-capital-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent { }
