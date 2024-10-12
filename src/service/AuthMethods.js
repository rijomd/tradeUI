
import { ACCESS_ROUTES, ACCESS_SIDEBAR, ACCESS_TOKEN, api_Development, AUTH_USER } from './AuthConstants';

export const getAuthToken = () => {
    return localStorage.getItem(ACCESS_TOKEN) ? "Bearer " + localStorage.getItem(ACCESS_TOKEN) : "";
};

export const getAuthUser = () => {
    return localStorage.getItem(AUTH_USER) ? JSON.parse(localStorage?.getItem(AUTH_USER)) : "";
};

export const getMyAPiUrl = () => {
    return api_Development;
};

export const getAuthRouters = () => {
    return localStorage.getItem(ACCESS_ROUTES) ? JSON.parse(localStorage?.getItem(ACCESS_ROUTES)) : [];
};

export const getAuthSideBars = () => {
    return localStorage.getItem(ACCESS_SIDEBAR) ? JSON.parse(localStorage?.getItem(ACCESS_SIDEBAR)) : [];
};