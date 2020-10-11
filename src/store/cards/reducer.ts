import { ACTION_TYPES } from './types';

const INITIAL_STATE = {
    cardsData: [],
    isLoadingCards: false,
}

export interface CardsState {
    cardsData: Record<string, any>[];
    isLoadingCards: boolean;
}

export default (state: CardsState = INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
        case ACTION_TYPES.GET_CARDS_PENDING:
            return { ...state, cardsData: payload, isLoadingCards: true };
        case ACTION_TYPES.GET_CARDS_FULFILLED:
            return { ...state, cardsData: payload, isLoadingCards: false };
        case ACTION_TYPES.GET_CARDS_REJECTED:
            return { ...state, cardsData: payload, isLoadingCards: false };
        default:
            return state;
    }
}