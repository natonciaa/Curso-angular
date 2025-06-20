import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifts/services/gifs.service';

interface MenuOption {
    icon: string;
    label: string;
    route: string;
    subLabel: string;
}
@Component({
    selector: 'gifs-side-menu-options',
    standalone: true,
    imports: [
        CommonModule, RouterLink, RouterLinkActive
    ],
    templateUrl: './side-menu-options.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {
    menuOptions: MenuOption[] = [
        {
            icon: 'fa-solid fa-chart-line',
            label: 'Trending',
            subLabel: 'Gifs trending',
            route: '/dashboard/trending'
        },
        {
            icon: 'fa-solid fa-magniyfying-glass',
            label: 'Search',
            subLabel: 'Buscar Gifts',
            route: '/dashboard/search'
        }
    ]

    gifService = inject(GifService);
    gifHistory = this.gifService.searchHystoryKeys;

}
