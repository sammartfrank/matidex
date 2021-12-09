import { useState, useContext } from 'react';
import {
  useMediaQuery,
  Container,
  Box,
  Input,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import Image from 'next/image';

import eth from '../../../../public/images/svg/ethereum.svg';
import ava from '../../../../public/images/svg/avalanche.svg';
import poly from '../../../../public/images/svg/polygon.svg';
import { ColorModeContext } from '../../../context';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { useTheme } from '@mui/system';

const Connected = () => {
  const matched = useMediaQuery('(min-width:600px)');
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [network, setNetwork] = useState('eth');
  const { toggleConnectionMode = () => {} } = useContext(ColorModeContext);
  const theme = useTheme();

  const handleDisconnect = () => {
    toggleConnectionMode();
    setShowSelect(!false);
  };

  const handleDropDownClose = () => setDropDownOpen(false);

  const handleSwap = () => {
    setShowSelect(true);
    setDropDownOpen(true);
  };

  const mockedAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  function ellipsisGenerator(str: string) {
    if (str.length > 25) {
      return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length);
    }
    return str;
  }

  const getIcon = (network: string): StaticImageData => {
    const icons: = {
      eth: eth,
      arb: ava,
      oe: poly,
    };
    return icons[network];
  };
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', position: 'relative' }}>
      <Box>
        {!matched && (
          <IconButton onClick={handleDisconnect}>
            <PowerSettingsNewIcon />
          </IconButton>
        )}
        <Input
          sx={{
            background: theme.palette.ash.main,
            border: 'none !important',
            outline: 'none',
            textOverflow: 'ellipsis',
            padding: '0.5rem 0.5rem',
            width: '245px',
            textAlign: 'center',
            fontSize: '1rem',
          }}
          disabled
          type={'text'}
          value={ellipsisGenerator(mockedAddress)}
          startAdornment={
            <InputAdornment position='start'>
              <Image width={40} height={40} src={getIcon(network)} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
              <IconButton onClick={() => handleSwap()}>
                <SwapHorizIcon />
              </IconButton>
            </InputAdornment>
          }
        />

        {showSelect && (
          <Select
            placeholder='Select a Network'
            open={dropDownOpen}
            value={network}
            onClose={handleDropDownClose}
            onChange={(e: SelectChangeEvent) => {
              setNetwork(e.target.value);
              setDropDownOpen(false);
              setShowSelect(false);
            }}
            sx={{
              width: '245px',
              border: 'none !important',
              outline: 'none',
              marginTop: '0.5rem',
              position: matched ? 'absolute' : 'relative',
              left: matched ? 23 : 0,
              top: matched ? 50 : 0,

              background: '#B3BCD066',
            }}
          >
            <MenuItem value={'eth'}>Ethereum</MenuItem>
            <MenuItem value={'arb'}>Arbitrum</MenuItem>
            <MenuItem value={'oe'}>Optimism</MenuItem>
          </Select>
        )}
      </Box>
      {matched && (
        <IconButton onClick={handleDisconnect}>
          <PowerSettingsNewIcon />
        </IconButton>
      )}
    </Container>
  );
};

export default Connected;
