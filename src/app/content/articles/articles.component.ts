import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { AppLayoutConfigService } from 'src/app/layout/layout.service';

import { ArticlesService } from './articles.service';
import { Article } from './articles.model';
import * as fromStore from './store';

@Component({
    selector       : 'app-articles',
    templateUrl    : './articles.component.new.html',
    styleUrls      : ['./articles.component.new.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent implements OnInit, OnDestroy {
    hasSelectedArticles: boolean;
    isIndeterminate: boolean;
    searchInput: FormControl;
    articles$: Observable<any>;
    tags$: Observable<any>;
    currentArticle$: Observable<Article>;
    selectedArticleIds$: Observable<string[]>;
    searchText$: Observable<string>;
    articles: Article[];
    selectedArticleIds: string[];

    constructor(
        private configService:      AppLayoutConfigService,
        private articlesService:    ArticlesService,
        private store:              Store<fromStore.ArticlesAppState>,
        private cd:                 ChangeDetectorRef
    ) {
        this.searchInput = new FormControl('');
        // this.translationLoader.loadTranslations(english, turkish);
        this.currentArticle$ = this.store.select(fromStore.getCurrentArticle);
        this.articles$ = this.store.select(fromStore.getArticlesArr);
        this.tags$ = this.store.select(fromStore.getTagsArr);
        this.selectedArticleIds$ = this.store.select(fromStore.getSelectedArticlesIds);
        this.searchText$ = this.store.select(fromStore.getSearchText);
        this.articles = [];
        this.selectedArticleIds = [];

        this.configService.setConfig({
            routerAnimation: 'none'
        });
    }

    ngOnInit() {
        this.articles$.subscribe(articles => {
            this.articles = articles;
        });

        this.selectedArticleIds$
            .subscribe(selectedArticlesIds => {
                this.selectedArticleIds = selectedArticlesIds;
                this.hasSelectedArticles = selectedArticlesIds.length > 0;
                this.isIndeterminate = (selectedArticlesIds.length !== this.articles.length && selectedArticlesIds.length > 0);
                this.refresh();
            });

        this.searchText$.subscribe(searchText => {
            this.searchInput.setValue(searchText);
        });

        this.searchInput.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged()
        ).subscribe(searchText => {
            this.store.dispatch(new fromStore.SetSearchText(searchText));
        });
    }

    ngOnDestroy() {
        this.cd.detach();
    }

    selectArticlesByTag(tag, value) {
        this.store.dispatch(new fromStore.SelectArticlesByTag({
            tag,
            value
        }));
    }

    deSelectCurrentArticle() {
        this.store.dispatch(new fromStore.SetCurrentArticle(''));
    }

    refresh() {
        this.cd.markForCheck();
    }

    viewArticlesList() {
        this.store.dispatch(new fromStore.SetCurrentArticle(''));
    }
}
