
import { ACCESS_TOKEN, api_Development } from './AuthConstants';

export const getAuthToken = () => {
    return localStorage.getItem(ACCESS_TOKEN) ? "Bearer " + localStorage.getItem(ACCESS_TOKEN) : "";
};

export const getMyAPiUrl = () => {
    return api_Development;
};