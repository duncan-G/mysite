import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as TagsActions from '../actions/tags.actions';
import { ArticlesService } from '../../articles.service';

@Injectable()
export class TagsEffect {
    constructor(
        private actions: Actions,
        private articlesService: ArticlesService
    ) { }

    /**
     * Get Tags from Server
     * @type {Observable<any>}
     */
    @Effect()
    getTags: Observable<TagsActions.TagsActionsAll> =
        this.actions
            .ofType<TagsActions.GetTags>(TagsActions.GET_TAGS)
            .pipe(
                switchMap((action) => {
                        return this.articlesService.getTags()
                                   .pipe(
                                       map((tags: any) => {
                                           return new TagsActions.GetTagsSuccess(tags);
                                       }),
                                       catchError(err => of(new TagsActions.GetTagsFailed(err)))
                                   );
                    }
                ));
}
