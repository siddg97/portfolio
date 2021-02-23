import React from 'react';
import { Home, About, Projects, Portfolio, Contact } from 'pages';
// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
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
        primaryText: 'About',
        component: <About />,
        path: '/about',
        exact: true,
        icon: <InfoIcon />,
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
