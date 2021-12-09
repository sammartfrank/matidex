import React, { useContext } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { ColorModeContext } from '../../../context';
import Exchange from './exchange';
import Hint from './Hint'
import ConnectWallet from './ConnectWallet'



const Swap = () => {
  const { connected } = useContext(ColorModeContext);
  const matches = useMediaQuery('(min-width:900px)');
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
      }}
    >
      <Grid item xs={matches ? 6 : 12}>
        <Typography variant='h6' sx={{ my: 5, ml: 5, fontSize: '2rem', color: theme.palette.mode === 'dark' ? theme.palette.primary.main : 'none' }}>
          Select a token to start swaping
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ px: 5, width: '100%' }}>
            <Exchange connected={connected} />
          </Box>
        </Box>
      </Grid>
      {!connected ? <ConnectWallet /> : <Hint />}
    </Box>
  );
};

export default Swap;
