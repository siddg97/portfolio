const { GH_PAT, GH_API } = process.env;

export const ghApiUrl = GH_API;
export const authHeader = (): string => `token ${GH_PAT}`;

export interface GHUser {
    login: string;
    created_at: string;
    avatar_url: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
    name: string;
    html_url: string;
}

export interface GHRepo {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    size: number;
    forks_count: number;
    language: string;
    color: string;
    fork?: boolean;
}

export interface GHLangStat {
    label: string;
    value: number;
    color: string;
}

export type sortBy = 'stargazers_count' | 'size';
