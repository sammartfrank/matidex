import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';
import { Divider } from '@mui/material';
import AppbarComponent from '../src/components/organisms/Appbar';

export default function Swap() {
  const theme = useTheme();

  return (
    // create a swap dex with material ui and react
    <Container maxWidth='md'>
      <AppbarComponent />
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Matisse dex swap
        </Typography>
        <Divider />
      </Box>
    </Container>
  );
}
