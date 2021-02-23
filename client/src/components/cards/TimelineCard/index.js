import React from 'react';
import BaseCard from '../BaseCard';
import { Typography } from '@material-ui/core';
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

const TimelineCard = ({ title, org, accomps, mobile }) => {
    const classes = useStyles();
    const header = (
        <>
            <Typography weight={'bold'} color='secondary' gutterBottom>
                {title}
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

    if (mobile) {
        return (
            <>
                {header}
                {content}
            </>
        );
    }

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
    mobile: PropTypes.bool,
};

TimelineCard.defaultProps = {
    mobile: false,
};

export default TimelineCard;
