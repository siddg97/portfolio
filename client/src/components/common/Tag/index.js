import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
    tag: {
        margin: spacing(0.5),
    },
}));

const Tag = ({ text }) => {
    const classes = useStyles();
    return (
        <Chip variant={'outlined'} className={classes.tag} label={text} color='primary' />
    );
};

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Tag;
