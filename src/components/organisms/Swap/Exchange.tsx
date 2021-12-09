import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, MenuItem, Select, OutlinedInput, InputAdornment, IconButton, Typography } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
interface formValues {
  amount: number;
  asset: string;
}

interface Ierror {
  amount: string;
  asset: string;
}

interface ExchangeProps {
  connected: boolean;
}

const Exchange = ({ connected }: ExchangeProps): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [assetSelected, setAssetSelected] = useState('eth');
  const matches = useMediaQuery('(min-width:600px)');

  const [assets, setAssets] = useState({
    eth: {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '0.122',
      decimals: 18,
      icon: 'eth',
    },
    btc: {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: '1.64399',
      decimals: 8,
      icon: 'btc',
    },
  });

  const getBalance = (asset: string) => {
    return assets[asset].balance;
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAssetSelected(event.target.value as string);
  };
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: matches ? '35%' : '100%' }}>
          <label htmlFor='asset'>From</label>
          <Select onChange={handleChange} fullWidth>
            {Object.keys(assets).map((key) => (
              <MenuItem key={key} value={key}>
                {assets[key].name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: matches ? '55%' : '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <label htmlFor='amount'>Amount</label>
            <Typography variant='body1'>Balance: {getBalance(assetSelected)}</Typography>
          </Box>
          <OutlinedInput
            name='amount'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            placeholder='Amount'
            value={amount}
            fullWidth
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setAmount(assets[assetSelected].balance)} edge='end'>
                  Max
                </IconButton>
              </InputAdornment>
            }
          />
          <small>Max to use all your funds</small>
        </Box>
      </Box>
      <Box sx={{ justifyContent: 'center', display: 'flex', py: 5 }}>
        <SwapVertIcon />
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: matches ? '35%' : '100%' }}>
            <label htmlFor='asset'>To</label>
            <Select fullWidth>
              {Object.keys(assets).map((key) => (
                <MenuItem disabled={key.includes(assetSelected)} key={key} value={key}>
                  {assets[key].name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: matches ? '55%' : '100%' }}>
            <label htmlFor='amount'>Amount</label>
            <OutlinedInput
              name='amount'
              disabled
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              placeholder='Amount'
              value={amount}
              fullWidth
            />
          </Box>
        </Box>
        <Box>
          <Button
            type='submit'
            color={'primary'}
            variant='contained'
            disabled={!connected}
            sx={{ width: '100%', my: 5 }}
          >
            Swap
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Exchange;
