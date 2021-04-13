import React from 'react';
import { Home, Projects, Portfolio, Contact } from 'pages';
// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import Star from '@material-ui/icons/Star';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

export const routes = [
    {
        primaryText: 'Home',
        component: <Home />,
        path: '/',
        exact: true,
        icon: <DashboardIcon />,
    },
    {
        primaryText: 'Portfolio',
        component: <Portfolio />,
        path: '/portfolio',
        exact: true,
        icon: <Star />,
    },
    {
        primaryText: 'Projects',
        component: <Projects />,
        path: '/projects',
        exact: true,
        icon: <DonutLargeIcon />,
    },
    {
        primaryText: 'Get In Touch',
        component: <Contact />,
        path: '/contact',
        exact: true,
        icon: <QuestionAnswerIcon />,
    },
];
