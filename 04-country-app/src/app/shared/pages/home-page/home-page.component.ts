import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './home-page.component.html',
})
export class HomePageComponent { }
