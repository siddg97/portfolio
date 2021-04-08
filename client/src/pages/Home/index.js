import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {
    useGhLangStars,
    useGhLangStats,
    useGhTopRepos,
    useGhUserData,
} from 'hooks/queries';
import { initLangChart, initRepoChart, initStarChart } from 'utils/chart_utils';
import GridN from 'components/layout/GridN/index';
import SectionCard from 'components/cards/SectionCard/index';
import ChartCard from 'components/cards/ChartCard/index';
import {
    linkToAppDev,
    linkToCloud,
    linkToCyberSec,
    linkToDevOps,
    linkToSFU,
    linkToVancouver,
    linkToWebDev,
} from 'constants/index';
import BaseCard from 'components/cards/BaseCard/index';
import GhStatsCard from 'components/cards/GhStatsCard/index';

const Home = () => {
    const { data: userData, status: userDataStatus } = useGhUserData();
    const { data: topReposData, status: topReposStatus } = useGhTopRepos();
    const { data: langStatsData, status: langStatsStatus } = useGhLangStats();
    const { data: langStarsData, status: langStarsStatus } = useGhLangStars();

    const charts = [
        {
            title: 'Repos Per Language',
            status: langStatsStatus,
            chartId: 'langStatsChart',
            chartData: langStatsData,
            chartFn: initLangChart,
        },
        {
            title: 'Stars Per Language',
            status: langStarsStatus,
            chartId: 'langStarsChart',
            chartData: langStarsData,
            chartFn: initStarChart,
        },
        {
            title: 'Top Repositories',
            status: topReposStatus,
            chartId: 'topReposChart',
            chartData: topReposData,
            chartFn: initRepoChart,
        },
    ];

    const introTitle = 'Siddharth Gupta';
    const introOverline = 'welcome to my corner of the internet';
    const introSubtitle = <b>Student @ {linkToSFU}</b>;
    const introContent = (
        <>
            <Typography indent={'small'}>
                Hello! I&apos;m <b>Siddharth Gupta</b>, I am an undergraduate student in
                my final year of studies at {linkToSFU}, {linkToVancouver}. I love
                programming in my free time and have a knack for keeping up with the
                latest technologies. My area of interests include:
            </Typography>
            <Typography component={'div'}>
                <ul>
                    <li>{linkToWebDev}</li>
                    <li>{linkToAppDev}</li>
                    <li>{linkToCloud}</li>
                    <li>{linkToDevOps}</li>
                    <li>{linkToCyberSec}</li>
                </ul>
            </Typography>
        </>
    );

    const renderGithubStats = () => {
        if (userDataStatus === 'loading') {
            return null;
        }
        return (
            <GhStatsCard
                repos={userData.public_repos}
                followers={userData.followers}
                following={userData.following}
            />
        );
    };
    const githubTitle = 'Github';
    const githubOverline = 'At a Glance';
    const chartsGrid = (
        <GridN mdCols={3}>
            {charts.map((c) => (
                <ChartCard {...c} key={c.chartId} />
            ))}
        </GridN>
    );

    const ghCard = (
        <BaseCard>
            <GridN>
                {renderGithubStats()}
                {chartsGrid}
            </GridN>
        </BaseCard>
    );

    return (
        <GridN>
            <SectionCard
                title={introTitle}
                subtitle={introSubtitle}
                overline={introOverline}
                content={introContent}
            />
            <Divider />
            <SectionCard title={githubTitle} overline={githubOverline} content={ghCard} />
        </GridN>
    );
};

export default Home;
