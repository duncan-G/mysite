import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap, catchError, tap, take, filter } from 'rxjs/operators';

import { ArticlesAppState } from '../reducers';
import * as fromStore from '../index';
import { getTagsLoaded, getArticlesLoaded } from '../selectors';
import { RouterStateSnapshot } from '@angular/router/src/router_state';
import { getRouterState } from 'src/app/store/reducers';

@Injectable()
export class ResolveGuard implements CanActivate {
    routerState: any;

    constructor(
        private store: Store<ArticlesAppState>
    ) {
        this.store.select(getRouterState).subscribe(routerState => {
            if (routerState) {
                this.routerState = routerState.state;
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<any> {
        return forkJoin(
                this.getTags()
            )
            .pipe(
                filter(([tagsLoaded]) => tagsLoaded),
                take(1),
                switchMap(() =>
                    this.getArticles()
                ),
                take(1),
                map(() => this.store.dispatch(new fromStore.SetCurrentArticle(this.routerState.params.articleId)))
            );
    }


    /**
     * Get Tags
     * @returns {Observable<any>}
     */
    getTags() {
        return this.store.select(getTagsLoaded)
                   .pipe(
                       tap(loaded => {
                           if (!loaded) {
                               this.store.dispatch(new fromStore.GetTags([]));
                           }
                       }),
                       filter(loaded => loaded),
                       take(1)
                   );
    }

    /**
     * Get Articles
     * @returns {Observable<any>}
     */
    getArticles() {
        return this.store.select(getArticlesLoaded)
                   .pipe(
                       tap((loaded: any) => {
                           if ( !this.routerState.params[loaded.id] || this.routerState.params[loaded.id] !== loaded.value ) {
                               this.store.dispatch(new fromStore.GetArticles());
                               this.store.dispatch(new fromStore.SetSearchText(''));
                           }
                       }),
                       filter((loaded: any) => {
                           return true;
                           // return this.routerState.params[loaded.id] && this.routerState.params[loaded.id] === loaded.value;
                       }),
                       take(1)
                   );
    }
}
