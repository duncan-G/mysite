import * as ArticlesActions from '../actions/articles.actions';
import { Article } from '../../articles.model';

export interface ArticlesState {
    entities: { [id: number]: Article };
    currentArticle: any;
    selectedArticlesIds: string[];
    searchText: string;
    loading: boolean;
    loaded: any;
}

export const ArticlesInitialState: ArticlesState = {
    entities            : {},
    currentArticle      : null,
    selectedArticlesIds : [],
    searchText          : '',
    loading             : false,
    loaded              : false
};

export function ArticlesReducer(state = ArticlesInitialState, action: ArticlesActions.ArticlesActionsAll): ArticlesState {
    switch (action.type) {
        case ArticlesActions.GET_ARTICLE:
        {
            return {
                ...state,
                loading: true
            };
        }

        case ArticlesActions.GET_ARTICLE_SUCCESS:
        {

            const articles = action.payload.articles;
            const loaded = action.payload.loaded;
            const entities = articles.reduce(
                (_entities: { [id: number]: Article }, article: Article) => {
                    return {
                        ..._entities,
                        [article.id]: article
                    };
                }, {});

            return {
                ...state,
                entities,
                loading: false,
                loaded
            };
        }

        case ArticlesActions.GET_ARTICLE_FAILED:
        {
            return {
                ...state,
                loading: false,
                loaded : false
            };
        }

        case ArticlesActions.GET_ARTICLES:
        {
            return {
                ...state,
                loading: true
            };
        }

        case ArticlesActions.GET_ARTICLES_SUCCESS:
        {

            const articles = action.payload.articles;
            const loaded = action.payload.loaded;
            const entities = articles.reduce(
                (_entities: { [id: number]: Article }, article: Article) => {
                    return {
                        ..._entities,
                        [article.id]: article
                    };
                }, {});

            return {
                ...state,
                entities,
                loading: false,
                loaded
            };
        }

        case ArticlesActions.GET_ARTICLES_FAILED:
        {
            return {
                ...state,
                loading: false,
                loaded : false
            };
        }

        case ArticlesActions.SET_CURRENT_ARTICLE_SUCCESS:
        {
            return {
                ...state,
                currentArticle: action.payload
            };
        }

        case ArticlesActions.SET_SEARCH_TEXT:
        {

            return {
                ...state,
                searchText: action.payload
            };
        }

        case ArticlesActions.SELECT_ARTICLES_BY_TAG:
        {
            const filter = action.payload;
            const arr = Object.keys(state.entities).map(k => state.entities[k]);
            const selectedArticlesIds = arr.filter(article => article[filter.parameter] === filter.value)
                                       .map(article => article.id);
            return {
                ...state,
                selectedArticlesIds
            };
        }

        default:
            return state;
    }
}
