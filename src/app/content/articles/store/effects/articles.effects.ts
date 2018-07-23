import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable, of, forkJoin } from 'rxjs';
import { catchError, debounceTime, map, mergeMap, exhaustMap, withLatestFrom } from 'rxjs/operators';

import { getRouterState, State } from 'src/app/store/reducers';
import { getArticlesState } from '../selectors';
import * as ArticlesActions from '../actions/articles.actions';
import * as fromRoot from 'src/app/store';

import { ArticlesService } from '../../articles.service';
import { Article } from '../../articles.model';

@Injectable()
export class ArticlesEffect {
    routerState: any;

    constructor(
        private actions:            Actions,
        private articlesService:    ArticlesService,
        private store:              Store<State>
    ) {
        this.store.select(getRouterState).subscribe(routerState => {
            if (routerState) {
                this.routerState = routerState.state;
            }
        });
    }

    /**
     * Update Article
     * @type {Observable<any>}
     */
    @Effect()
    updateArticle: Observable<ArticlesActions.ArticlesActionsAll> =
        this.actions
            .ofType<ArticlesActions.UpdateArticle>(ArticlesActions.UPDATE_ARTICLE)
            .pipe(
                exhaustMap((action) => {
                    return this.articlesService.updateArticle(action.payload).pipe(
                        map(() => {
                            return new ArticlesActions.UpdateArticleSuccess(action.payload);
                        })
                    );
                })
            );

    /**
     * Update Articles
     * @type {Observable<any>}
     */
    @Effect()
    UpdateArticles: Observable<ArticlesActions.ArticlesActionsAll> =
        this.actions
            .ofType<ArticlesActions.UpdateArticles>(ArticlesActions.UPDATE_ARTICLES)
            .pipe(
                exhaustMap((action) => {
                    return forkJoin(
                        action.payload.map(article => this.articlesService.updateArticle(article)),
                        () => {
                            return new ArticlesActions.UpdateArticlesSuccess();
                        });
                })
            );

    /**
     * Set Current Article
     * @type {Observable<SetCurrentArticleSuccess>}
     */
    @Effect()
    setCurrentArticle: Observable<Action> =
        this.actions
            .ofType<ArticlesActions.SetCurrentArticle>(ArticlesActions.SET_CURRENT_ARTICLE)
            .pipe(
                withLatestFrom(this.store.select(getArticlesState)),
                map(([action, state]) => {
                    return new ArticlesActions.SetCurrentArticleSuccess(state.entities[action.payload]);
                })
            );

    /**
     * Check Current Article
     * Navigate to parent directory if not exist in article list
     * Update Current Article if exist in article list
     * @type {Observable<any>}
     */
    @Effect()
    checkCurrentArticle: Observable<Action> =
        this.actions
            .ofType<ArticlesActions.CheckCurrentArticle>(ArticlesActions.CHECK_CURRENT_ARTICLE)
            .pipe(
                withLatestFrom(this.store.select(getArticlesState)),
                map(([action, state]) => {
                    if (!state.entities[this.routerState.params.articleId]) {
                        const latest = Object.keys(state.entities)[0];
                        return new ArticlesActions.SetCurrentArticleSuccess(state.entities[latest]);
                    }
                    return new ArticlesActions.SetCurrentArticleSuccess(state.entities[this.routerState.params.articleId]);
                })
            );

    /**
     * On Get Articles Success
     * @type {Observable<CheckCurrentArticle>}
     */
    @Effect()
    getArticlesSuccess: Observable<ArticlesActions.ArticlesActionsAll> =
        this.actions
            .ofType<ArticlesActions.GetArticlesSuccess>(ArticlesActions.GET_ARTICLES_SUCCESS)
            .pipe(
                mergeMap(() =>
                    [
                        new ArticlesActions.CheckCurrentArticle()
                    ])
            );


    /**
     * Get Articles with router parameters
     * @type {Observable<any>}
     */
    @Effect()
    getArticles: Observable<ArticlesActions.ArticlesActionsAll> =
        this.actions
            .ofType<ArticlesActions.GetArticles>(ArticlesActions.GET_ARTICLES)
            .pipe(
                exhaustMap((action) => {
                    let handle = {
                        id   : '',
                        value: ''
                    };

                    const routeParams = of('tagHandle', 'timePeriodHandle');
                    routeParams.subscribe(param => {
                        if ( this.routerState.params[param] ) {
                            handle = {
                                id   : param,
                                value: this.routerState.params[param]
                            };
                        }
                    });
                    return this.articlesService.getArticles(handle)
                               .pipe(
                                   map((articles: Article[]) => {
                                       return new ArticlesActions.GetArticlesSuccess({
                                           loaded:   handle,
                                           articles: articles
                                       });
                                   }),
                                   catchError(err => of(new ArticlesActions.GetArticlesFailed(err)))
                               );
                })
            );

    /**
     * On Update Articles Success
     * @type {Observable<GetArticles>}
     */
    @Effect()
    updateArticlesSuccess: Observable<ArticlesActions.ArticlesActionsAll> =
        this.actions
            .ofType<ArticlesActions.UpdateArticlesSuccess>(ArticlesActions.UPDATE_ARTICLES_SUCCESS)
            .pipe(
                mergeMap(() =>
                    [
                        new ArticlesActions.GetArticles()
                    ])
            );
    /**
     * On Update Article Success
     * @type {Observable<GetArticles>}
     */
    @Effect()
    updateArticleSuccess: Observable<ArticlesActions.ArticlesActionsAll> =
        this.actions
            .ofType<ArticlesActions.UpdateArticleSuccess>(ArticlesActions.UPDATE_ARTICLE_SUCCESS)
            .pipe(
                debounceTime(500),
                map(() => {
                    return new ArticlesActions.GetArticles();
                })
            );
}
