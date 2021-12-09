import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import Swap from './index';

interface Props {
  children: React.ReactNode;
  component?: React.ComponentType<any>;
  value: number;
  index: number;
}

function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ boxShadow: ' 0px 4px 32px rgba(0, 0, 0, 0.1)' }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsBase() {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery('(min-width:898px)');
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} sx={{ width: matches ? '50%' : '100%' }}>
        <Tab
          label='Swap'
          {...a11yProps(0)}
          style={{
            width: '50%',
            background: theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.primary.main,
            color: theme.palette.mode === 'light' ? 'white' : theme.palette.secondary.main,
          }}
        />
        <Tab label='Pool' disabled {...a11yProps(1)} style={{ width: '50%', background: theme.palette.ash.main }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Swap />
      </TabPanel>
    </Box>
  );
}
