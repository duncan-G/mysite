import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ArticlesService } from '../../articles.service';
import { Article } from '../../articles.model';
import * as fromStore from '../../store';

@Component({
    selector       : 'app-article-list-item',
    templateUrl    : './article-list-item.component.html',
    styleUrls      : ['./article-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListItemComponent implements OnInit {
    @Input() article: Article;
    @HostBinding('class.selected') selected: boolean;
    @HostBinding('class.unread') unread: boolean;
    tags$: Observable<any>;
    selectedArticleIds$: Observable<any>;

    constructor(
        private articleService: ArticlesService,
        private store:          Store<fromStore.ArticlesAppState>,
        private cd:             ChangeDetectorRef
    ) {
        this.tags$ = this.store.select(fromStore.getTagsArr);
        this.selectedArticleIds$ = this.store.select(fromStore.getSelectedArticlesIds);
        this.selected = false;
    }

    ngOnInit() {
        // Set the initial values
        this.article = new Article(this.article);
        this.unread = !this.article.read;

        this.selectedArticleIds$.subscribe((selectedArticleIds) => {
            this.selected = selectedArticleIds.length > 0 && selectedArticleIds.find(id => id === this.article.id) !== undefined;
            this.refresh();
        });
    }

    refresh() {
        this.cd.markForCheck();
    }
}
