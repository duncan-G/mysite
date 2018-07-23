import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { NavbarComponent } from './navbar.component';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        NavigationModule,
        SharedModule
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule {
}
