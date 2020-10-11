import { ACTION_TYPES } from './types';

export const setBoards = () => {
    return {
        type: ACTION_TYPES.GET_BOARDS,
        payload: {}
    }
}

export const setCurrentBoardId = (id: string) => {
    return {
        type: ACTION_TYPES.GET_BOARDS_ID,
        payload: id
    }
}