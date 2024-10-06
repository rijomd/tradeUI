
import { ACCESS_TOKEN, api_Development, AUTH_USER } from './AuthConstants';

export const getAuthToken = () => {
    return localStorage.getItem(ACCESS_TOKEN) ? "Bearer " + localStorage.getItem(ACCESS_TOKEN) : "";
};

export const getAuthUser = () => {
    return localStorage.getItem(AUTH_USER) ? JSON.parse(localStorage?.getItem(AUTH_USER)) : "";
};

export const getMyAPiUrl = () => {
    return api_Development;
};