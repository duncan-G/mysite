import { NgModule } from '@angular/core';

import { MatSidenavHelperDirective, MatSidenavTogglerDirective } from './mat-sidenav-helper.directive';
import { AppPerfectScrollbarDirective } from './app-perfect-scrollbar-directive';

@NgModule({
    declarations: [
        MatSidenavHelperDirective,
        MatSidenavTogglerDirective,
        AppPerfectScrollbarDirective,
    ],
    imports     : [],
    exports     : [
        MatSidenavHelperDirective,
        MatSidenavTogglerDirective,
        AppPerfectScrollbarDirective,
    ]
})
export class DirectivesModule {
}
