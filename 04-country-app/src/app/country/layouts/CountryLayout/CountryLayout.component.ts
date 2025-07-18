import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-country-layout',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
    templateUrl: './CountryLayout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayoutComponent { }
