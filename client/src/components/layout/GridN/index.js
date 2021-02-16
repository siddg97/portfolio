import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { childrenPropType } from 'constants/index';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const GridN = ({ children, xsCols, smCols, mdCols, spacing }) => {
    const classes = useStyles();
    const xs = 12 / xsCols;
    const sm = 12 / smCols;
    const md = 12 / mdCols;

    let elements = React.Children.toArray(children);
    const content = elements.map((child, key) => (
        <Grid item xs={xs} sm={sm} md={md} key={key}>
            {child}
        </Grid>
    ));

    return (
        <div className={classes.root}>
            <Grid container spacing={spacing}>
                {content}
            </Grid>
        </div>
    );
};

GridN.propTypes = {
    children: childrenPropType,
    xsCols: PropTypes.number,
    smCols: PropTypes.number,
    mdCols: PropTypes.number,
    spacing: PropTypes.number,
};

GridN.defaultProps = {
    children: [],
    xsCols: 1,
    smCols: 1,
    mdCols: 1,
    spacing: 2,
};

export default GridN;
