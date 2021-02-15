import { BASE_URL } from 'constants/index';
import { useQuery } from 'react-query';
import { getReq, postReq } from 'utils/api_utils';

// Get github user stats
const getGhUserData = async () => {
    const {
        data: { user },
    } = await getReq(`${BASE_URL}/github/user`);
    return user;
};
export const useGhUserData = (options = {}) => {
    return useQuery('user-data', () => getGhUserData(), options);
};

// Get github top repos
const getGhTopRepos = async () => {
    const { data } = await getReq(`${BASE_URL}/github/top-repos`);
    return data.topRepos;
};
export const useGhTopRepos = (options = {}) => {
    return useQuery('top-repos', () => getGhTopRepos(), options);
};

// Get github language stats
const getGhLangStats = async () => {
    const { data } = await getReq(`${BASE_URL}/github/lang-stats`);
    return data.langStats;
};
export const useGhLangStats = (options = {}) => {
    return useQuery('lang-stats', () => getGhLangStats(), options);
};

// Get github language stats
const getGhLangStars = async () => {
    const { data } = await getReq(`${BASE_URL}/github/lang-stars`);
    return data.langStars;
};
export const useGhLangStars = (options = {}) => {
    return useQuery('lang-stars', () => getGhLangStars(), options);
};

// Send email
const sendEmail = async (body) => {
    const { data } = await postReq(`${BASE_URL}/mail`, body);
    return data;
};
export const useSendMail = (body, options = {}) => {
    return useQuery('send-mail', () => sendEmail(body), {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: false,
        ...options,
    });
};
