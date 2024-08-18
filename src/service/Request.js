import { api_Development } from "./AuthConstants";
import { getAuthToken } from "./AuthMethods";
import axios from "axios";

export const requestMethod = async (url, data, method) => {

    const baseUrl = `${api_Development}/${url}`;
    const headers = { "Content-Type": "application/json", };

    if (getAuthToken()) {
        headers["Authorization"] = getAuthToken();
    }

    const requestOptions = {
        headers: headers,
        method: method,
    };

    return await axios({ ...requestOptions, url: baseUrl, data })
        .then((response) => {
            return {
                status: response.status,
                data: response.data,
            };
        })
        .catch((error) => {
            return {
                status: error.status,
                data: error.response,
            };
        });
};

const instance = axios.create({
    baseURL: api_Development,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Accept": "application/json",
        Authorization: getAuthToken()
    }
});

const cancelTokenSource = axios.CancelToken.source();
instance.defaults.cancelToken = cancelTokenSource.token;

export const cancelRequests = (reason) => {
    cancelTokenSource.cancel(reason);
};

export const isCancel = (error) => {
    return axios.isCancel(error);
};

export default instance;