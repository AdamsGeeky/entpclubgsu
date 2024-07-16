import { createTheme, ThemeOptions } from '@mui/material/styles/';

const getLPTheme = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1d1d1d',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
  },
});

const theme = createTheme(getLPTheme('light'));

export { getLPTheme };
export default theme;
