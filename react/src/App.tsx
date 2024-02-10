import { useDarkMode } from 'usehooks-ts';
import Navigation from './components/Navigation.tsx';

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <main
      className={`${isDarkMode ? 'dark' : ''} w-full min-h-screen p-2 text-foreground bg-background`}
    >
      <Navigation />
      <div className='mt-6 flex w-full flex-col items-center'>Hello</div>
    </main>
  );
}

export default App;
