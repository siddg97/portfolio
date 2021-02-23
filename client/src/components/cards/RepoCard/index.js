import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    CardActions,
    IconButton,
} from '@material-ui/core';
import Tag from 'components/common/Tag/index';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
    },
    content: {
        flexGrow: 1,
        padding: spacing(2),
        paddingTop: 0,
    },
    stats: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    fill: {
        flexGrow: 1,
    },
}));

const RepoCard = ({ name, html_url, description, stargazers_count, size, language }) => {
    const classes = useStyles();

    const header = (
        <CardHeader
            title={name}
            action={
                <IconButton
                    color='secondary'
                    href={html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <OpenInNewIcon />
                </IconButton>
            }
        />
    );
    const content = (
        <CardContent classes={{ root: classes.content }}>
            <Typography variant={'body1'} weight='bold'>
                {description}
            </Typography>
        </CardContent>
    );

    const starStatText = `${stargazers_count} ${
        stargazers_count !== 1 ? 'Stars' : 'Star'
    }`;
    const tags = (
        <CardActions
            disableSpacing
            classes={{
                root: classes.stats,
            }}
        >
            <Tag text={language} />
            <Tag text={starStatText} />
            <div className={classes.fill} />
            <Tag text={`${size} KB`} />
        </CardActions>
    );

    return (
        <Card elevation={0} classes={{ root: classes.root }}>
            {header}
            {content}
            {tags}
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
