import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    paper: {
        height: '100%',
    },
    stat: {
        padding: spacing(1),
        textAlign: 'center',
        [breakpoints.down('sm')]: {
            marginBottom: spacing(1),
        },
        [breakpoints.up('md')]: {
            margin: 0,
        },
    },
}));

const GhStatsCard = ({ repos, followers, following }) => {
    const classes = useStyles();

    const renderStat = (label, value) => (
        <Paper variant='outlined' elevation={0} className={classes.stat}>
            <Typography variant='button' color='primary'>
                {label}
            </Typography>
            <br />
            <Typography variant='button'>{value}</Typography>
        </Paper>
    );

    const repoStat = renderStat('Repositories', repos);
    const followerStat = renderStat('Followers', followers);
    const followingStat = renderStat('Following', following);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
                {repoStat}
            </Grid>
            <Grid item xs={12} md={2}>
                {followerStat}
            </Grid>
            <Grid item xs={12} md={2}>
                {followingStat}
            </Grid>
        </Grid>
    );
};

GhStatsCard.propTypes = {
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
};

export default GhStatsCard;
