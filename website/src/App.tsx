import {
  MantineProvider,
  Button,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useState } from 'react';
import AppFrame from 'src/components/AppFrame/AppFrame';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(
      value || (colorScheme === 'dark' ? 'light' : 'dark')
    );
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <AppFrame>
          <Button>Hello world!</Button>
        </AppFrame>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
