import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { AboutService } from './about.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatButtonModule, MatDividerModule, MatListModule, MatToolbarModule } from '@angular/material';

const routes = [
    {
        path     : 'about',
        component: AboutComponent
    }
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    exports: [
        AboutComponent
    ],
    imports: [
        SharedModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule
    ],
    providers: [
        AboutService
    ]
})
export class AboutModule {

}
