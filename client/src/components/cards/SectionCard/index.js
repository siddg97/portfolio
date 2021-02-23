import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Link } from '@material-ui/core';
import GridN from 'components/layout/GridN/index';

const useStyles = makeStyles(({ spacing }) => ({
    card: {
        height: '100%',
        padding: spacing(2),
    },
}));

const SectionCard = ({ title, overline, subtitle, content }) => {
    const cardStyle = useStyles();
    const header = (
        <>
            <Typography variant={'overline'}>{overline}</Typography>
            <Typography weight={'bold'} variant={'h4'} gutterBottom>
                <Link underline={'none'}>{title}</Link>
            </Typography>
            {subtitle && (
                <Typography gutterBottom>
                    <b>{subtitle}</b>
                </Typography>
            )}
        </>
    );

    const body = content ? content : null;
    return (
        <Card variant='outlined' elevation={0} classes={{ root: cardStyle.card }}>
            <GridN>
                {header}
                {body}
            </GridN>
        </Card>
    );
};

SectionCard.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    overline: PropTypes.node.isRequired,
    content: PropTypes.node,
};

SectionCard.defaultProps = {
    subtitle: '',
    content: '',
};

export default SectionCard;
