import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
    content: {
        padding: spacing(2),
    },
    card: {
        height: '100%',
    },
    skeleton: {
        height: 350,
    },
}));

const ProjectCard = ({ name, tags, description }) => {
    const cardStyle = useStyles();

    const content = (
        <CardContent className={cardStyle.content}>
            {description}
            <br />
            {JSON.stringify(tags)}
        </CardContent>
    );

    const header = <CardHeader title={name} />;
    return (
        <Card elevation={0} classes={{ root: cardStyle.card }}>
            {header}
            {content}
        </Card>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
};

export default ProjectCard;
