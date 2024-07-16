import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    primary: {
      main: '#0A6847', // Your primary color
    },
    secondary: {
      main: '#f50057', // Adjust this to your preference
    },
  },
});

export default function createMyTheme(mode: 'light' | 'dark') {
  return createTheme(getDesignTokens(mode));
}
