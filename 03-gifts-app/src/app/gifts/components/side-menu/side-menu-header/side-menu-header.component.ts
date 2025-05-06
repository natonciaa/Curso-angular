import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
    selector: 'gifs-side-menu-header',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './side-menu-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuHeaderComponent {

    envs = environment;
}
