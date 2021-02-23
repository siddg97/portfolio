import axios from 'axios';

const makeRequest = (method, path, body = {}) => {
    const url = path;
    const config = {
        method,
        url,
    };
    if (Object.keys(body).length) {
        config.data = body;
    }
    return axios(config);
};

export const getReq = (path) => makeRequest('get', path);

export const postReq = (path, body) => makeRequest('post', path, body);
