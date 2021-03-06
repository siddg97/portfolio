import React from 'react';
import styled from 'styled-components';
import { getContent } from '@mui-treasury/layout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { childrenPropType } from 'constants/index';

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
            maxWidth: breakpoints.values.lg,
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
    children: childrenPropType,
};

export default withStyles(styles)(Content);
