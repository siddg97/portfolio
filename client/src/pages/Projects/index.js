import React from 'react';
import GridN from 'components/layout/GridN/index';
import SectionCard from 'components/cards/SectionCard/index';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    loader: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

import { useGhTopRepos } from 'hooks/queries';
import RepoCard from 'components/cards/RepoCard/index';
import { projects } from 'constants/content';
import ProjectCard from 'components/cards/ProjectCard/index';

const Projects = () => {
    const classes = useStyles();
    const overline = 'Siddharth Gupta';

    const loadingIndicator = (
        <div className={classes.loader}>
            <LinearProgress />
            <LinearProgress color='secondary' />
            <LinearProgress />
            <LinearProgress color='secondary' />
        </div>
    );

    const projectsTitle = 'Selected Projects';
    const projectsContent = (
        <GridN smCols={1} mdCols={2} lgCols={3}>
            {projects.map((proj) => (
                <ProjectCard key={proj.name} {...proj} />
            ))}
        </GridN>
    );

    const reposTitle = 'Popular Repositories';
    const { data: topRepos, status: topReposStatus } = useGhTopRepos();
    const reposContent = topReposStatus === 'success' && (
        <GridN smCols={1} mdCols={2} lgCols={3}>
            {topRepos.map((repo) => (
                <RepoCard key={repo.html_url} {...repo} />
            ))}
        </GridN>
    );

    return (
        <GridN>
            <SectionCard overline={overline} title={projectsTitle} />
            {projectsContent}
            <Divider />
            <SectionCard overline={overline} title={reposTitle} />
            {topReposStatus === 'loading' && loadingIndicator}
            {reposContent}
        </GridN>
    );
};

export default Projects;
