import { ACTION_TYPES as Lists } from './../lists/types';
import { ACTION_TYPES as Cards } from './../cards/types';
import { ACTION_TYPES as Profile } from './../userProfile';
import { ACTION_TYPES as Boards } from './../boards'

const { REACT_APP_API_KEY } = process.env;

export const httpGlobalFetch = store => next => action => {
    const params = {
        key: REACT_APP_API_KEY,
        token: store.getState().auth.token,
    }
    const searchUrl = new URLSearchParams(params).toString();
    const currentBoardId = store.getState().boards.currentBoardId;

    switch (action.type) {
        case Lists.GET_LISTS: {
            const baseUrl = `https://api.trello.com/1/boards/${currentBoardId}/lists?`;
            return next({
                type: Lists.GET_LISTS,
                payload: fetch(baseUrl + searchUrl).then(response => response.json())
            })
        }
        case Cards.GET_CARDS: {
            const baseUrl = `https://api.trello.com/1/boards/${currentBoardId}/cards?`;
            return next({
                type: Cards.GET_CARDS,
                payload: fetch(baseUrl + searchUrl).then(response => response.json())
            })
        }
        case Profile.GET_PROFILE: {
            const baseUrl = `https://api.trello.com/1/members/me?`;
            return next({
                type: Profile.GET_PROFILE,
                payload: fetch(baseUrl + searchUrl).then(response => response.json())
            })
        }
        case Boards.GET_BOARDS: {
            const baseUrl = `https://api.trello.com/1/members/me/boards?`;
            return next({
                type: Boards.GET_BOARDS,
                payload: fetch(baseUrl + searchUrl).then(response => response.json())
            })
        }
        default:
            return next(action);
    }

    // if (action.type === Lists.GET_LISTS) {
    //     const baseUrl = `https://api.trello.com/1/boards/${currentBoardId}/lists?`;
    //     return next({
    //         type: Lists.GET_LISTS,
    //         payload: fetch(baseUrl + searchUrl).then(response => response.json())
    //     })
    // }

    // if (action.type === Cards.GET_CARDS) {
    //     const baseUrl = `https://api.trello.com/1/boards/${currentBoardId}/cards?`;
    //     return next({
    //         type: Cards.GET_CARDS,
    //         payload: fetch(baseUrl + searchUrl).then(response => response.json())
    //     })
    // }

    // if (action.type === Profile.GET_PROFILE) {
    //     const baseUrl = `https://api.trello.com/1/members/me?`;
    //     return next({
    //         type: Profile.GET_PROFILE,
    //         payload: fetch(baseUrl + searchUrl).then(response => response.json())
    //     })
    // }

    // if (action.type === Boards.GET_BOARDS) {
    //     const baseUrl = `https://api.trello.com/1/members/me/boards?`;
    //     return next({
    //         type: Boards.GET_BOARDS,
    //         payload: fetch(baseUrl + searchUrl).then(response => response.json())
    //     })
    // }

    // return next(action);
}