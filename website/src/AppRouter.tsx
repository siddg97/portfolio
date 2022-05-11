import { LoadingOverlay } from '@mantine/core';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('src/pages/Home')),
    name: 'About',
  },
  {
    path: '/work',
    component: lazy(() => import('src/pages/Work')),
    name: 'Work',
  },
  {
    path: '/contact',
    component: lazy(() => import('src/pages/Contact')),
    name: 'Contact',
  },
];

function AppRouter() {
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
}

export default AppRouter;
