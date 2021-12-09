
import { Grid, Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/system';

const Hint = () => {
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
            width: '20%',
            height: '100px',
            borderRadius: '50%',
            background: theme.palette.ash.main,
          }}
        />
        <Box sx={{ width: '50%', gap: '1rem', display: 'flex', flexDirection: 'column', padding: '1rem 0' }}>
          <Typography variant='h5' component='h3'>
            Hint
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p' sx={{ fontSize: '1rem' }}>
            You can choose any token on the list, if there is some missing you can try adding it by the{' '}
            <strong>contract address.</strong>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Hint;