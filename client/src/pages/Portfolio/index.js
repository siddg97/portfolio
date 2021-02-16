import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineCard from 'components/cards/TimelineCard/index';
import GridN from 'components/layout/GridN/index';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    oppositeContent: {
        flex: 0.2,
    },
}));

const items = [
    {
        title: 'Associate Frontend Developer',
        org: 'Teradici',
        from: 'Jan 2021', // TODO: Convert to time stamps
        to: 'Aug 2021', // TODO: Convert to time stamps
        current: true,
        accomps: [],
    },
    {
        title: 'Software Development Intern',
        org: 'BlackBerry Inc',
        from: 'Jan 2020', // TODO: Convert to time stamps
        to: 'Aug 2020', // TODO: Convert to time stamps
        current: false,
        accomps: [
            'Developed standalone programs using C and Python for acoustic analysis',
            'Optimized existing tools to achieve over 40% performance gains',
            'Devised test scripts to validate voice detection in audio wave files',
            'Developed testing tools for identification of bugs in existing software',
            'Participated extensively in code reviews',
            'Resolved over 100+ issue tickets over 8 months',
            'Completed internal training programs for the QNX Neutrino RTOS',
        ],
    },
    {
        title: 'Undergraduate Student',
        org: 'Simon Fraser University',
        from: 'Jan 2018', // TODO: Convert to time stamps
        to: 'Dec 2021', // TODO: Convert to time stamps
        current: true,
        accomps: ['Bachelors of Science', 'Majoring in Computing Sciences'],
    },
];

const Portfolio = () => {
    const classes = useStyles();
    const renderTimelineItem = ({ title, org, from, to, current, accomps }, i) => (
        <TimelineItem key={`timeline-${org}`}>
            <TimelineOppositeContent
                className={classes.oppositeContent}
                color='textSecondary'
            >
                <Typography color='primary' variant='body2'>{`${from} - ${
                    current ? 'Present' : to
                }`}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined' />
                {i !== items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
                <TimelineCard
                    title={title}
                    org={org}
                    current={current}
                    accomps={accomps}
                />
            </TimelineContent>
        </TimelineItem>
    );
    return (
        <GridN>
            <Timeline align='left'>{items.map(renderTimelineItem)}</Timeline>
        </GridN>
    );
};

export default Portfolio;
