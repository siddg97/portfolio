import React from 'react';
import PropTypes from 'prop-types';
import {
    SocialProvider,
    SocialLink as Social,
} from '@mui-treasury/components/socialLink';
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';

const social = {
    linkedin: {
        url: 'https://www.linkedin.com/in/siddg97/',
        brand: 'LinkedIn',
    },
    github: {
        url: 'https://github.com/siddg97',
        brand: 'GithubCircle',
    },
};

const SocialLinks = ({ type }) => {
    const socialLinkStyles =
        type === '' ? useMoonSocialLinkStyles : usePoofSocialLinkStyles;
    return (
        <SocialProvider useStyles={socialLinkStyles}>
            {Object.values(social).map(({ url, brand }) => (
                <Social brand={brand} href={url} key={`${brand}-social-link`} />
            ))}
        </SocialProvider>
    );
};

SocialLinks.propTypes = {
    type: PropTypes.string,
};

SocialLinks.defaultProps = {
    type: '',
};

export default SocialLinks;
