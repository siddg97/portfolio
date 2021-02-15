import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {
    useGhLangStars,
    useGhLangStats,
    useGhTopRepos,
    useGhUserData,
} from 'hooks/queries';
import {
    APP_DEV_URL,
    CLOUD_URL,
    CYBER_SEC_URL,
    DEVOPS_URL,
    SFU_URL,
    VAN_URL,
    WEB_DEV_URL,
} from 'constants/index';
import {
    initLangChart,
    initRepoChart,
    initStarChart,
    initUserChart,
} from 'utils/chart_utils';
import GridN from 'components/layout/GridN/index';
import SectionCard from 'components/cards/SectionCard/index';
import ChartCard from 'components/cards/ChartCard/index';

const Home = () => {
    const renderLink = (url, content) => (
        <Link href={url} target='_blank' rel='noopener noreferrer'>
            <b>{content}</b>
        </Link>
    );

    const { data: userData, status: userDataStatus } = useGhUserData();
    const { data: topReposData, status: topReposStatus } = useGhTopRepos();
    const { data: langStatsData, status: langStatsStatus } = useGhLangStats();
    const { data: langStarsData, status: langStarsStatus } = useGhLangStars();

    const linkToSFU = renderLink(SFU_URL, 'Simon Fraser University');
    const linkToVancouver = renderLink(VAN_URL, 'Vancouver, BC');
    const linkToWebDev = renderLink(WEB_DEV_URL, 'Web Development');
    const linkToAppDev = renderLink(APP_DEV_URL, 'Application Development');
    const linkToCloud = renderLink(CLOUD_URL, 'Cloud Computing');
    const linkToDevOps = renderLink(DEVOPS_URL, 'DevOps');
    const linkToCyberSec = renderLink(CYBER_SEC_URL, 'Cyber Security');

    const charts = [
        {
            title: 'Github Summary',
            status: userDataStatus,
            chartId: 'userChart',
            chartData: userData,
            chartFn: initUserChart,
        },
        {
            title: 'Top Languages',
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

    const cardTitle = (
        <Typography weight={'bold'} variant={'h4'} gutterBottom>
            Hi, I&apos;m Siddharth <Link underline={'none'}>Gupta</Link>
        </Typography>
    );

    const cardOverline = 'A little bit about me';
    const cardSubtitle = <b>Student @ {linkToSFU}</b>;
    const cardContent = (
        <>
            <Typography indent={'small'}>
                I&apos;m <b>Siddharth Gupta</b>, Currently in my final year of studies at{' '}
                {linkToSFU}, {linkToVancouver}. I love programming in my free time and
                have a knack for keeping up with the latest technologies. My area of
                interests include:
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

    const chartsGrid = (
        <GridN cols={2}>
            {charts.map((c) => (
                <ChartCard {...c} key={c.chartId} />
            ))}
        </GridN>
    );

    return (
        <GridN>
            <SectionCard
                title={cardTitle}
                subtitle={cardSubtitle}
                overline={cardOverline}
                content={cardContent}
            />
            {chartsGrid}
        </GridN>
    );
};

export default Home;
