import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import GridN from 'components/layout/GridN/index';

const useStyles = makeStyles(({ spacing }) => ({
    card: {
        borderRadius: spacing(2),
        height: '100%',
        padding: spacing(2),
    },
}));

const SectionCard = ({ title, overline, subtitle, content }) => {
    const cardStyle = useStyles();
    const header = (
        <>
            <Typography variant={'overline'}>{overline}</Typography>
            {title}
            <Typography gutterBottom>{subtitle}</Typography>
        </>
    );

    const body = <>{content}</>;
    return (
        <Card elevation={0} classes={{ root: cardStyle.card }}>
            <GridN>
                {header}
                {body}
            </GridN>
        </Card>
    );
};

SectionCard.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    overline: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};

export default SectionCard;
