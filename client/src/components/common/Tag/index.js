import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
    tag: {
        margin: spacing(0.5),
    },
}));

const Tag = ({ text }) => {
    const classes = useStyles();
    const {
        palette: { type: themeType },
    } = useTheme();
    const variant = themeType === 'light' ? 'default' : 'outlined';
    return (
        <Chip variant={variant} className={classes.tag} label={text} color='secondary' />
    );
};

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tag;
