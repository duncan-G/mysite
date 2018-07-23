import { Action } from '@ngrx/store';

export const GET_TAGS = '[TAGS] GET TAGS';
export const GET_TAGS_SUCCESS = '[TAGS] GET TAGS SUCCESS';
export const GET_TAGS_FAILED = '[TAGS] GET TAGS FAILED';

/**
 * Get Tags
 */
export class GetTags implements Action {
    readonly type = GET_TAGS;

    constructor(public payload: any) { }
}

/**
 * Get Labels Tags
 */
export class GetTagsSuccess implements Action {
    readonly type = GET_TAGS_SUCCESS;

    constructor(public payload: any) { }
}

/**
 * Get Tags Failed
 */
export class GetTagsFailed implements Action {
    readonly type = GET_TAGS_FAILED;

    constructor(public payload: string) { }
}

export type TagsActionsAll
    = GetTags
    | GetTagsSuccess
    | GetTagsFailed;
