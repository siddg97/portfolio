import { Outlet, Route, Routes } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';
import { Navigation, PageContainer } from './components';
import { routes } from './routes';

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <main
      className={`${isDarkMode ? 'dark bg-accent-gr bg-auto' : ''} w-full min-h-screen text-foreground bg-background`}
    >
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={
            <PageContainer>
              <Outlet />
            </PageContainer>
          }
        >
          {routes.map(r => (
            <Route index={r.path === '/'} path={r.path} element={r.component} />
          ))}
          {/*<Route path='*' element={<NoMatch />} />*/}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
