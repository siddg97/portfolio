import { Contact, Home, Projects, Resume } from '../pages';

export const routes = [
  {
    path: '/',
    navText: 'Home',
    component: <Home />,
  },
  {
    path: 'projects',
    navText: 'Projects',
    component: <Projects />,
  },
  {
    path: 'resume',
    navText: 'Resume',
    component: <Resume />,
  },
  {
    path: 'contact',
    navText: 'Contact',
    component: <Contact />,
  },
];
