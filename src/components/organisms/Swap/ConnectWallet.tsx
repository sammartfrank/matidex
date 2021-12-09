import { useContext } from 'react'
import { useMediaQuery, Box, Grid, Typography, Button } from '@mui/material'
import { useTheme } from '@mui/system'
import { ColorModeContext } from '../../../context';

const ConnectWallet = () => {
  const { toggleConnectionMode } = useContext(ColorModeContext);
  const matches = useMediaQuery('(min-width:898px)');
  const theme = useTheme()
  return (
    <Grid item xs={matches ? 6 : 12}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 0.5,
          minHeight: '640px',
          background: theme.palette.ash.main,
        }}
      >
        <Box
          sx={{
            width: '50%',
            minHeight: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: theme.palette.ash.main
            }}
          />
          <Typography variant='h5' component='h3'>
            Connect your wallet
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p' sx={{ fontSize: '1rem' }}>
            To start using the app, your wallet must be connected. :)
          </Typography>

          <Button variant='text' color='primary' onClick={toggleConnectionMode}>
            Connect wallet
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ConnectWallet;