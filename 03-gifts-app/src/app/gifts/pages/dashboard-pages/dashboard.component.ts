import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from "../../components/side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "../../components/side-menu/side-menu-options/side-menu-options.component";
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
    selector: 'app-',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        SideMenuComponent
    ],
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
