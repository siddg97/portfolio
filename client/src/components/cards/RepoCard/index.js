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

const RepoCard = ({
    name,
    html_url,
    description,
    stargazers_count,
    size,
    forks_count,
    language,
}) => {
    const cardStyle = useStyles();

    const content = (
        <CardContent className={cardStyle.content}>
            {html_url}
            <br />
            {description}
            <br />
            {stargazers_count}
            <br />
            {size}
            <br />
            {forks_count}
            <br />
            {language}
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

RepoCard.propTypes = {
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
    stargazers_count: PropTypes.string,
    size: PropTypes.string,
    forks_count: PropTypes.string,
    language: PropTypes.string,
};

export default RepoCard;
