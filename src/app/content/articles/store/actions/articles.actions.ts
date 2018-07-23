import { Action } from '@ngrx/store';
import { Article } from '../../articles.model';

export const GET_ARTICLE = '[ARTICLES] GET ARTICLE';
export const GET_ARTICLE_SUCCESS = '[ARTICLES] GET ARTICLE SUCCESS';
export const GET_ARTICLE_FAILED = '[ARTICLES] GET ARTICLE FAILED';
export const GET_ARTICLES = '[ARTICLES] GET ARTICLES';
export const GET_ARTICLES_SUCCESS = '[ARTICLES] GET ARTICLES SUCCESS';
export const GET_ARTICLES_FAILED = '[ARTICLES] GET ARTICLES FAILED';
export const SET_CURRENT_ARTICLE = '[ARTICLES] SET CURRENT ARTICLE';
export const SET_CURRENT_ARTICLE_SUCCESS = '[ARTICLES] SET CURRENT ARTICLE SUCCESS';
export const CHECK_CURRENT_ARTICLE = '[ARTICLES] CHECK CURRENT ARTICLE';
export const UPDATE_ARTICLE  = '[ARTICLES] UPDATE ARTICLE';
export const UPDATE_ARTICLE_SUCCESS = '[ARTICLES] UPDATE ARTICLE SUCCESS';
export const UPDATE_ARTICLES = '[ARTICLES] UPDATE ARTICLES';
export const UPDATE_ARTICLES_SUCCESS = '[ARTICLES] UPDATE ARTICLES ARTICLES';
export const SET_SEARCH_TEXT = '[ARTICLES] SET SEARCH TEXT';
export const SELECT_ARTICLES_BY_TAG = '[ARTICLES] SELECT ARTICLES BY TAG';

/**
 * Get Article
 */
export class GetArticle implements Action {
    readonly type = GET_ARTICLE;

    constructor() { }
}

/**
 * Get Article Success
 */
export class GetArticleSuccess implements Action {
    readonly type = GET_ARTICLE_SUCCESS;

    constructor(public payload: any) { }
}

/**
 * Get Articles Failed
 */
export class GetArticleFailed implements Action {
    readonly type = GET_ARTICLE_FAILED;

    constructor(public payload: string) { }
}

/**
 * Get Articles
 */
export class GetArticles implements Action {
    readonly type = GET_ARTICLES;

    constructor() { }
}

/**
 * Get Articles Success
 */
export class GetArticlesSuccess implements Action {
    readonly type = GET_ARTICLES_SUCCESS;

    constructor(public payload: any) { }
}

/**
 * Get Articles Failed
 */
export class GetArticlesFailed implements Action {
    readonly type = GET_ARTICLES_FAILED;

    constructor(public payload: string) { }
}

/**
 * Set Current Article
 */
export class SetCurrentArticle implements Action {
    readonly type = SET_CURRENT_ARTICLE;

    constructor(public payload: string) { }
}

/**
 * Set Current Article Success
 */
export class SetCurrentArticleSuccess implements Action {
    readonly type = SET_CURRENT_ARTICLE_SUCCESS;

    constructor(public payload: any) { }
}

/**
 * Check Current Article
 */
export class CheckCurrentArticle implements Action {
    readonly type = CHECK_CURRENT_ARTICLE;

    constructor() { }
}

/**
 * Update Article
 */
export class UpdateArticle implements Action {
    readonly type = UPDATE_ARTICLE;

    constructor(public payload: any) { }
}


/**
 * Update Article Success
 */
export class UpdateArticleSuccess implements Action {
    readonly type = UPDATE_ARTICLE_SUCCESS;

    constructor(public payload: Article) { }
}

/**
 * Update Articles
 */
export class UpdateArticles implements Action {
    readonly type = UPDATE_ARTICLES;

    constructor(public payload: Article[]) { }
}

/**
 * Update Articles Success
 */
export class UpdateArticlesSuccess implements Action {
    readonly type = UPDATE_ARTICLES_SUCCESS;

    constructor() { }
}

/**
 * Set Search Text
 */
export class SetSearchText implements Action {
    readonly type = SET_SEARCH_TEXT;

    constructor(public payload: string) { }
}


/**
 * Select Articles by Tag
 */
export class SelectArticlesByTag implements Action {
    readonly type = SELECT_ARTICLES_BY_TAG;

    constructor(public payload: any) { }
}

export type ArticlesActionsAll
    = GetArticle
    | GetArticleSuccess
    | GetArticleFailed
    | GetArticles
    | GetArticlesSuccess
    | GetArticlesFailed
    | SetCurrentArticle
    | SetCurrentArticleSuccess
    | CheckCurrentArticle
    | UpdateArticle
    | UpdateArticleSuccess
    | UpdateArticles
    | UpdateArticlesSuccess
    | SetSearchText
    | SelectArticlesByTag;
