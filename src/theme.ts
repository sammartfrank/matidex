import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1F6DC9',
    },
    secondary: {
      main: '#020B44',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
