import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/modules/shared.module';

import { ContentComponent } from './content.component';

import { SampleModule } from './sample/sample.module';
import { AboutModule } from './about/about.module';
 import { ArticlesModule } from './articles/articles.module';

const routes = [
    {
        path        : 'articles',
        loadChildren: './articles/articles.module#ArticlesModule'
    }
];

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        RouterModule.forChild(routes),
        SharedModule,

        SampleModule,
        AboutModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
