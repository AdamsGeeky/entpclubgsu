'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createMyTheme from './theme';
import Navbar from './ui/components/NavBar';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(() => createMyTheme(mode), [mode]);

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#0A6847" />
        <meta name="msapplication-TileColor" content="#0A6847" />
        <meta name="theme-color" content="#0A6847" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar  mode={mode} toggleColorMode={toggleColorMode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}