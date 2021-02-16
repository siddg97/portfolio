import React from 'react';
import BaseCard from '../BaseCard';
import { Typography, Link } from '@material-ui/core';
import PropTypes from 'prop-types';
import GridN from 'components/layout/GridN/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    list: {
        padding: 0,
    },
}));

const TimelineCard = ({ title, org, accomps }) => {
    const classes = useStyles();
    const header = (
        <>
            <Typography variant={'overline'}>{org}</Typography>
            <br />
            <Typography weight={'bold'} variant={'button'}>
                <Link color='secondary' underline={'none'}>
                    {title}
                </Link>
            </Typography>
        </>
    );
    const content = (
        <List dense className={classes.list}>
            {accomps.map((acc, i) => (
                <ListItem key={`${org}-accomps-${i}`}>
                    <ListItemText primary={acc} />
                </ListItem>
            ))}
        </List>
    );
    return (
        <BaseCard>
            <GridN spacing={1}>
                {header}
                {content}
            </GridN>
        </BaseCard>
    );
};

TimelineCard.propTypes = {
    title: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    accomps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TimelineCard;
