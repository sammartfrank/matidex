// create an Appbar component with a connect wallet button with material ui
import React, { useState, useContext } from 'react';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, useTheme } from '@mui/system';
import Image from 'next/image';
import logo from '../../../../public/images/svg/logo.svg';
import Button, { ButtonSize, ButtonVariants } from '../../atoms/Button';
import Connected from './Connected';

import { ColorModeContext } from '../../../context';

const AppbarComponent = () => {
  const theme = useTheme();

  const { toggleColorMode = () => {}, toggleConnectionMode = () => {}, connected } = useContext(ColorModeContext);

  const handleConnect = () => {
    toggleConnectionMode();
  };

  return (
    <Appbar
      position='static'
      color='transparent'
      enableColorOnDark
      style={{
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          border: 'none',
          boxShadow: 'none',
          justifyContent: 'space-between',
          padding: '0',
        }}
      >
        <Box sx={{ background: theme.palette.mode === 'dark' ? 'white' : 'none', padding: '0 1rem' }}>
          <Image src={logo} alt='logo' width={100} height={100} />
        </Box>
        <Box sx={{ display: 'flex', minWidth: '300px' }}>
          <IconButton color='inherit' onClick={toggleColorMode} sx={{ mx: 4 }}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {!connected ? (
            <Button
              text='Connect wallet'
              size={ButtonSize.Wallet}
              variant={ButtonVariants.Contained}
              handler={handleConnect}
            />
          ) : (
            <Connected />
          )}
        </Box>
      </Toolbar>
    </Appbar>
  );
};

export default AppbarComponent;
