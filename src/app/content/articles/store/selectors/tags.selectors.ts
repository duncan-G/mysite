import { createSelector } from '@ngrx/store';
import { TagsState, getArticlesAppState, ArticlesAppState } from '../reducers';

export const getTagsState = createSelector(
    getArticlesAppState,
    (state: ArticlesAppState) => state.tags
);

export const getTags = createSelector(
    getTagsState,
    (state: TagsState) => state.entities
);

export const getTagsLoaded = createSelector(
    getTagsState,
    (state: TagsState) => state.loaded
);

export const getTagsArr = createSelector(
    getTags,
    (entities) => Object.keys(entities).map((id) => entities[id])
);
