import axios from 'axios';

const doRequest = (method, path, body = {}) => {
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

export const getReq = (path) => doRequest('get', path);

export const postReq = (path, body) => doRequest('post', path, body);
