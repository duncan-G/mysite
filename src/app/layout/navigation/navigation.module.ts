import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';


import { NavigationComponent } from './navigation.component';
import { NavVerticalItemComponent } from './vertical/nav-vertical-item/nav-vertical-item.component';
import { NavVerticalCollapseComponent } from './vertical/nav-vertical-collapse/nav-vertical-collapse.component';
import { NavVerticalGroupComponent } from './vertical/nav-vertical-group/nav-vertical-group.component';
import { NavHorizontalItemComponent } from './horizontal/nav-horizontal-item/nav-horizontal-item.component';
import { NavHorizontalCollapseComponent } from './horizontal/nav-horizontal-collapse/nav-horizontal-collapse.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,
    ],
    exports     : [
        NavigationComponent
    ],
    declarations: [
        NavigationComponent,
        NavVerticalGroupComponent,
        NavVerticalItemComponent,
        NavVerticalCollapseComponent,
        NavHorizontalItemComponent,
        NavHorizontalCollapseComponent
    ]
})
export class NavigationModule {
}
