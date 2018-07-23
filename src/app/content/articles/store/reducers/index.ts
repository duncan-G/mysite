import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesReducer, ArticlesState } from './articles.reducer';
import { TagsReducer, TagsState } from './tags.reducer';

export interface ArticlesAppState {
    articles: ArticlesState;
    tags: TagsState;
}

export const getArticlesAppState = createFeatureSelector<ArticlesAppState>(
    'articles-app'
);

export const getAppState = createSelector(
    getArticlesAppState,
    (state: ArticlesAppState) => state
);

export const reducers: ActionReducerMap<ArticlesAppState> = {
    articles    : ArticlesReducer,
    tags        : TagsReducer
};

export * from './articles.reducer';
export * from './tags.reducer';
