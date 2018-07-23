import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule,
         MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule,
         MatSidenavModule, MatToolbarModule } from '@angular/material';

import { SharedModule } from 'src/app/shared/modules/shared.module';

import { ArticlesAppStoreModule } from './store/store.module';
import * as fromGuards from './store/guards/index';

import { ArticlesComponent } from './articles.component';
import { ArticleListItemComponent } from './article-list/article-list-item/article-list-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesService } from './articles.service';
import { ArticlesSidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
    {
        path       : 'tag/:tagHandle',
        component  : ArticlesComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : 'tag/:tagHandle/:articleId',
        component  : ArticlesComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path        : ':timePeriodHandle',
        component  : ArticlesComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path        : ':timePeriodHandle/:articleId',
        component  : ArticlesComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path      : '**',
        redirectTo: 'latest'
    }
];

@NgModule({
    declarations   : [
        ArticlesComponent,
        ArticleListItemComponent,
        ArticleListComponent,
        ArticleDetailsComponent,
        ArticlesSidenavComponent,
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,

        SharedModule,

        ArticlesAppStoreModule
    ],
    providers      : [
        ArticlesService,
        fromGuards.ResolveGuard
    ],
})
export class ArticlesModule { }
