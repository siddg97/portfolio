import React from 'react';
import GridN from 'components/layout/GridN/index';
import SectionCard from 'components/cards/SectionCard/index';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

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

    const loadingIndicator = (
        <div className={classes.loader}>
            <LinearProgress />
            <LinearProgress color='secondary' />
            <LinearProgress />
            <LinearProgress color='secondary' />
        </div>
    );

    const projectsOverline = 'Selected';
    const projectsTitle = 'Projects';
    const projectsContent = (
        <GridN mdCols={2}>
            {projects.map((proj) => (
                <ProjectCard key={proj.name} {...proj} />
            ))}
        </GridN>
    );

    const reposOverline = 'Popular';
    const reposTitle = 'Repositories';

    const { data: topRepos, status: topReposStatus } = useGhTopRepos();
    const reposContent = topReposStatus === 'success' && (
        <GridN smCols={2} mdCols={3}>
            {topRepos.map((repo) => (
                <RepoCard key={repo.html_url} {...repo} />
            ))}
        </GridN>
    );

    return (
        <GridN>
            <SectionCard overline={projectsOverline} title={projectsTitle} />
            {projectsContent}
            <br />
            <SectionCard overline={reposOverline} title={reposTitle} />
            {topReposStatus === 'loading' && loadingIndicator}
            {reposContent}
        </GridN>
    );
};

export default Projects;
