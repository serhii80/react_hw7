import { ACTION_TYPES } from './types';

const INITIAL_STATE = {
    listOfLists: [],
    isLoadingLists: false,
}

export interface ListsState {
    listOfLists: Record<string, any>[];
    isLoadingLists: boolean;
}

export default (state: ListsState = INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
        case ACTION_TYPES.GET_LISTS_PENDING:
            return { ...state, listOfLists: payload, isLoadingLists: true };
        case ACTION_TYPES.GET_LISTS_FULFILLED:
            return { ...state, listOfLists: payload, isLoadingLists: false };
        default:
            return state;
    }
}