import { AppState } from '..';

export const getCards = (state: AppState): Record<string, any>[] => state.boards.boardsData;