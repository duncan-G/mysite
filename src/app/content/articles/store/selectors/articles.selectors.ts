import { Utils } from 'src/app/shared/utils';

import { createSelector } from '@ngrx/store';
import { getArticlesAppState, ArticlesAppState, ArticlesState } from '../reducers';

export const getArticlesState = createSelector(
    getArticlesAppState,
    (state: ArticlesAppState) => state.articles
);

export const getArticles = createSelector(
    getArticlesState,
    (state: ArticlesState) => state.entities
);

export const getArticlesLoaded = createSelector(
    getArticlesState,
    (state: ArticlesState) => state.loaded
);

export const getSearchText = createSelector(
    getArticlesState,
    (state: ArticlesState) => state.searchText
);

export const getArticlesArr = createSelector(
    getArticles,
    getSearchText,
    (entities, searchText) => {
        const arr = Object.keys(entities).map((id) => entities[id]);
        return Utils.filterArrayByString(arr, searchText);
    }
);

export const getCurrentArticle = createSelector(
    getArticlesState,
    (state: ArticlesState) => state.currentArticle
);

export const getSelectedArticlesIds = createSelector(
    getArticlesState,
    (state: ArticlesState) => state.selectedArticlesIds
);
