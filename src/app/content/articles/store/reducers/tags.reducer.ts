import * as TagsActions from '../actions/tags.actions';

export interface TagsState {
    entities: { [id: number]: any };
    loading: boolean;
    loaded: boolean;
}

export const TagsInitialState: TagsState = {
    entities: {},
    loading : false,
    loaded  : false
};

export function TagsReducer(state = TagsInitialState, action: TagsActions.TagsActionsAll): TagsState {
    switch (action.type) {
        case TagsActions.GET_TAGS:
            return {
                ...state,
                loading: true,
                loaded : false
            };
        case TagsActions.GET_TAGS_SUCCESS:

            const tags = action.payload;
            const entities = tags.reduce(
                (_entities: { [id: number]: any }, tag: any) => {
                    return {
                        ..._entities,
                        [tag.id]: tag
                    };
                }, {});

            return {
                ...state,
                loading: false,
                loaded : true,
                entities
            };

        case TagsActions.GET_TAGS_FAILED:
            return {
                ...state,
                loading: false,
                loaded : false
            };
        default:
            return state;
    }
}
