'use client';
import * as React from 'react';
import { PaletteMode, createTheme } from '@mui/material/';
import { getLPTheme } from '../ui/theme';

export const useColorMode = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return [mode, toggleColorMode] as const;
};

export const useCustomThemeToggle = (mode: PaletteMode) => {
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);
  const defaultTheme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);
  
  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return [showCustomTheme, LPtheme, defaultTheme, toggleCustomTheme] as const;
};
