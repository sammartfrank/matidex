import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';

import { ColorModeContext } from '../src/context';
import { useFeatures } from '../src/hooks';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const { theme, colorMode, connectionMode, connected } = useFeatures();

  const ctx = {
    ...colorMode,
    ...connectionMode,
    connected
  };
  return (
    <ColorModeContext.Provider value={ctx}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Matisse</title>
          <link href='../src/assets/fonts/Konnect-Regular.ttf' rel='stylesheet' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
}
