import React from 'react';
import styled from 'styled-components';
import { getContent } from '@mui-treasury/layout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ breakpoints, transitions }) => ({
    root: {
        padding: 16,
        transition: transitions.create(),
        [breakpoints.up('sm')]: {
            padding: 24,
            maxWidth: 700,
            margin: 'auto',
        },
        [breakpoints.up('md')]: {
            maxWidth: 960,
        },
    },
});

const ContentWrapper = getContent(styled);

const Content = ({ classes, children }) => {
    return (
        <ContentWrapper>
            <div className={classes.root}>{children}</div>
        </ContentWrapper>
    );
};

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default withStyles(styles)(Content);
