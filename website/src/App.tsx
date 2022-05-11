import { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Container,
} from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import AppRouter from './AppRouter';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) => {
    let scheme = value;
    if (!scheme) {
      scheme = colorScheme === 'dark' ? 'light' : 'dark';
    }
    setColorScheme(scheme);
  };

  return (
    <BrowserRouter>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            fontFamily: 'Fira-Medium, sans-serif',
            headings: {
              fontFamily: 'Fira-SemiBold, sans-serif',
            },
          }}
          withGlobalStyles
        >
          <Container size='xl'>
            <TopBar />
            <AppRouter />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
}

export default App;
