import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { AboutService } from './about.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    ],
    providers: [
        AboutService
    ]
})
export class AboutModule {

}
