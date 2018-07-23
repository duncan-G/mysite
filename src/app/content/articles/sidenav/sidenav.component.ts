import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ArticlesService } from '../articles.service';
import * as fromStore from '../store';

@Component({
    selector       : 'app-articles-sidenav',
    templateUrl    : './sidenav.component.html',
    styleUrls      : ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesSidenavComponent {
    tags: any[];
    tags$: Observable<any>;

    constructor(
        private articlesService: ArticlesService,
        private store:           Store<fromStore.ArticlesAppState>
    ) {
        this.tags$ = this.store.select(fromStore.getTagsArr);
    }

}
