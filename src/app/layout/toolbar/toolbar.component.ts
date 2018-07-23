import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.scss']
})

export class ToolbarComponent {

    constructor(
        private sidebarService: SidebarService
    ) {}

    toggleSidebarOpened(key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    }
}
