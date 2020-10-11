import { httpGlobalFetch } from './http/middleware';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import auth, { AuthState, authMiddlewares } from './auth';
import boards, { BoardsState } from './boards';
import user, { UserState } from './userProfile';
import cards, { CardsState } from './cards';
import lists, { ListsState } from './lists';

export interface AppState {
    auth: AuthState;
    boards: BoardsState;
    user: UserState;
    cards: CardsState;
    lists: ListsState;
}

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

export default function configureStore() {
    const rootReducer = combineReducers<AppState>({
        auth,
        boards,
        user,
        cards,
        lists,
    });
    return createStore(
        rootReducer,
        undefined,
        composeEnhancers(applyMiddleware(
            ...authMiddlewares,
            httpGlobalFetch,
            thunk,
            promise,
        )),
    );
}

export * from './auth';
export * from './boards';
// export * from './cards';
// export * from './lists';