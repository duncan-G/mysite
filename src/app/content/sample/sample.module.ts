import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/modules/shared.module';
import { SampleComponent } from './sample.component';
import { MatSidenavModule } from '@angular/material';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        MatSidenavModule
    ],
    exports: [
        SampleComponent
    ]
})
export class SampleModule {
}
