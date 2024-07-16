'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface ToggleColorModeProps {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ mode, toggleColorMode }) => {
  const theme = useTheme();

  return (
    <IconButton
      sx={{
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      }}
      onClick={toggleColorMode}
    >
      {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ToggleColorMode;
