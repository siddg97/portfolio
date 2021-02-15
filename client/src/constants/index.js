import React from 'react';
import Link from '@material-ui/core/Link';

// URLS for various topics
const VAN_URL = 'https://en.wikipedia.org/wiki/Vancouver';
const SFU_URL = 'https://www.sfu.ca/';
const WEB_DEV_URL = 'https://en.wikipedia.org/wiki/Web_development';
const APP_DEV_URL = 'https://en.wikipedia.org/wiki/Application_development';
const CLOUD_URL = 'https://en.wikipedia.org/wiki/Cloud_computing';
const DEVOPS_URL = 'https://en.wikipedia.org/wiki/DevOps';
const CYBER_SEC_URL = 'https://searchsecurity.techtarget.com/definition/cybersecurity';
const BB_URL = 'https://www.blackberry.com/us/en';
const TERADICI_URL = 'https://teradici.com/';
// API constants
export const BASE_URL = '/api';

// Chart constants
export const chartSize = 100;

const renderLink = (url, content) => (
    <Link href={url} target='_blank' rel='noopener noreferrer'>
        <b>{content}</b>
    </Link>
);

export const linkToSFU = renderLink(SFU_URL, 'Simon Fraser University');
export const linkToVancouver = renderLink(VAN_URL, 'Vancouver, BC');
export const linkToWebDev = renderLink(WEB_DEV_URL, 'Web Development');
export const linkToAppDev = renderLink(APP_DEV_URL, 'Application Development');
export const linkToCloud = renderLink(CLOUD_URL, 'Cloud Computing');
export const linkToDevOps = renderLink(DEVOPS_URL, 'DevOps');
export const linkToCyberSec = renderLink(CYBER_SEC_URL, 'Cyber Security');
export const linkToBB = renderLink(BB_URL, 'BlackBerry');
export const linkToTeradici = renderLink(TERADICI_URL, 'Teradici');
