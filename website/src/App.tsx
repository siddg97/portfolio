import { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import AppFrame from 'src/components/AppFrame/AppFrame';
import AppRouter from './AppRouter';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(
      value || (colorScheme === 'dark' ? 'light' : 'dark')
    );
  return (
    <BrowserRouter>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }} withGlobalStyles>
          <AppFrame>
            <AppRouter />
          </AppFrame>
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  );
}

export default App;
