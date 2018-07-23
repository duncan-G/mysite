import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

@NgModule({
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ],
    providers: [
        SidebarService
    ]
})
export class SidebarModule { }
