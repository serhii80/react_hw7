import { ACTION_TYPES } from './types';

const INITIAL_STATE = {
    boardsData: [],
    isLoadindBoards: false,
    currentBoardId: ''
}

export interface BoardsState {
    boardsData: Record<string, any>[];
    isLoadindBoards: boolean;
    currentBoardId: string;
}

export default (state: BoardsState = INITIAL_STATE, { type, payload }: any) => {
    switch (type) {
        case ACTION_TYPES.GET_BOARDS_PENDING:
            return { ...state, boardsData: payload, isLoadindBoards: true };
        case ACTION_TYPES.GET_BOARDS_FULFILLED:
            return { ...state, boardsData: payload, isLoadindBoards: false };
        case ACTION_TYPES.GET_BOARDS_REJECTED:
            return { ...state, boardsData: payload, isLoadindBoards: false };
        case ACTION_TYPES.GET_BOARDS_ID:
            return { ...state, currentBoardId: payload };
        default:
            return state;
    }
}