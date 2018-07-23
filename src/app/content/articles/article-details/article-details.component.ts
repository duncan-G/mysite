import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Article } from '../articles.model';
import * as fromStore from '../store';
import { ArticlesService } from '../articles.service';

@Component({
    selector       : 'app-article-details',
    templateUrl    : './article-details.component.html',
    styleUrls      : ['./article-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleDetailsComponent implements OnChanges {
    tags$: Observable<any>;
    @Input('article') articleInput: Article;
    article: Article;

    constructor(
        private articlesService: ArticlesService,
        private store: Store<fromStore.ArticlesAppState>
    ) {
        this.tags$ = this.store.select(fromStore.getTagsArr);
    }

    ngOnChanges() {
        this.updateModel(this.articleInput);
        this.markAsRead();
    }

    markAsRead() {
        if (this.article && !this.article.read) {
            this.article.markRead();
            this.updateArticle();
        }
    }

    updateModel(data) {
        this.article = !data ? null : new Article({...data});
    }

    updateArticle() {
        this.store.dispatch(new fromStore.UpdateArticle(this.article));
        this.updateModel(this.article);
    }
}
