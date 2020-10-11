import * as React from 'react';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import { Redirect, RouteChildrenProps } from 'react-router-dom';
import { NotFound } from '../NotFound';
import { Profile } from '../Profile';
import { CurrentBoard } from '../CurrentBoars';

export interface AppRoute {
    path: string,
    render: (props: any) => any,
    exact?: boolean,
    title?: string,
    isHidden?: boolean,
    isProtected?: boolean,
}

export enum ROUTES_URLS {
    HOME = '/',
    LOGIN = '/login',
    DASHBOARD = '/dashboard',
    OAUTH = '/oauth',
    NONE = '/404',
    PROFILE = '/profile',
    CURRENT_BOARD = '/current_board'
}

export const routes: Array<AppRoute> = [
    {
        path: ROUTES_URLS.LOGIN,
        render: (props: any) => <Login {...props} />,
        exact: true,
        title: 'Login'
    },
    {
        path: ROUTES_URLS.DASHBOARD,
        render: (props: any) => <Dashboard {...props} />,
        title: 'Dashboard',
        isProtected: true
    },
    {
        path: ROUTES_URLS.PROFILE,
        render: (props: any) => <Profile {...props} />,
        title: 'User profile',
        isProtected: true
    },
    {
        path: ROUTES_URLS.HOME,
        render: () => < Redirect to={ROUTES_URLS.LOGIN} />,
        exact: true,
        isHidden: true
    },
    {
        path: ROUTES_URLS.NONE,
        render: (props: RouteChildrenProps) => <NotFound {...props} />,
        isHidden: true
    },
    {
        path: ROUTES_URLS.CURRENT_BOARD,
        render: (props: any) => <CurrentBoard {...props} />,
        title: 'Current Board',
        isProtected: true,
        isHidden: true
    },
]