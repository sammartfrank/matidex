import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import AppbarComponent from '../src/components/organisms/Appbar';
import Tabs from '../src/components/organisms/Swap/Tabs';

export default function Index() {
  return (
    <Container sx={{ padding: 0 }}>
      <AppbarComponent />
      <Container maxWidth='lg' sx={{ padding: 0 }}>
        <Box my={5}>
          <Tabs />
        </Box>
      </Container>
    </Container>
  );
}
