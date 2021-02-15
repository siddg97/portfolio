import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { childrenPropType } from 'constants/index';

const useStyles = makeStyles(({ spacing }) => ({
    card: {
        height: '100%',
        padding: spacing(2),
    },
}));

const BaseCard = ({ children }) => {
    const cardStyle = useStyles();
    return (
        <Card elevation={0} classes={{ root: cardStyle.card }}>
            {children}
        </Card>
    );
};

BaseCard.propTypes = {
    children: childrenPropType,
};

export default BaseCard;
