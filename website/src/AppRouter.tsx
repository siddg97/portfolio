import { LoadingOverlay } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('src/pages/Home')),
  },
  {
    path: '/about',
    component: lazy(() => import('src/pages/About')),
  },
  {
    path: '/experience',
    component: lazy(() => import('src/pages/Experience')),
  },
  {
    path: '/projects',
    component: lazy(() => import('src/pages/Projects')),
  },
  {
    path: '/skills',
    component: lazy(() => import('src/pages/Skills')),
  },
  {
    path: '/contact',
    component: lazy(() => import('src/pages/Contact')),
  },
];

const Router = () => {
  return (
    <Suspense
      fallback={
        <LoadingOverlay
          loaderProps={{
            size: 'xl',
            variant: 'bars',
            color: 'orange',
          }}
          overlayOpacity={1}
          transitionDuration={1000}
          visible
        />
      }
    >
      <Routes>
        {routes.map(r => (
          <Route
            key={r.path}
            path={r.path}
            element={<r.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Router;
