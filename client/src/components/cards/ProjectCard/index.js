import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';
import Tag from 'components/common/Tag/index';

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
}));

const ProjectCard = ({ name, tags, description }) => {
    const classes = useStyles();

    const content = (
        <CardContent classes={{ root: classes.content }}>
            <Typography variant={'body1'} weight='bold'>
                {description}
            </Typography>
        </CardContent>
    );

    const projectTags = (
        <CardActions>
            {tags.map((t, i) => (
                <Tag text={t} key={i} />
            ))}
        </CardActions>
    );

    const header = <CardHeader title={name} />;
    return (
        <Card elevation={0} classes={{ root: classes.root }}>
            {header}
            {content}
            {projectTags}
        </Card>
    );
};

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
};

export default ProjectCard;
