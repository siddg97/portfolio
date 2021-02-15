import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const GridN = ({ children, cols }) => {
    const classes = useStyles();
    const xs = 12;
    const md = 12 / cols;
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {children.map((child, key) => (
                    <Grid item xs={xs} md={md} key={key}>
                        {child}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

GridN.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    cols: PropTypes.number,
};

GridN.defaultProps = {
    children: [],
    cols: 1,
};

export default GridN;
