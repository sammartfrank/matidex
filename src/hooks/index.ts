import { useMemo, useState } from 'react';
import { createTheme, PaletteMode } from '@mui/material';

const useFeatures = () => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [connected, setConnected] = useState<boolean>(false);

  // Theme related methods
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Connection related methods
  const connectionMode = useMemo(
    () => ({
      toggleConnectionMode: () => {
        setConnected((prevConnected: Boolean) => !prevConnected);
      },
    }),
    []
  );

  // Define the Matisse theme for global usage
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#1F6DC9',
                },
                secondary: {
                  main: '#020B44',
                },
                ash: {
                  main: 'rgba(0, 0, 0, 0.05)',
                },
              }
            : {
                primary: {
                  main: '#F148FB',
                },
                secondary: {
                  main: '#560A86',
                },
                terciary: {
                  main: '#7122FA',
                },
                ash: {
                  main: 'rgba(0, 0, 0, 0.05)',
                },
              }),
        },
        typography: {
          fontFamily: '"Konnect-regular", sans-serif',
          fontSize: 16,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
        },
      }),
    [mode]
  );

  return {
    colorMode,
    connectionMode,
    theme,
    connected,
  };
};

export { useFeatures };
