import React, { useState, useContext, useMemo, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, MenuItem, Select, OutlinedInput, InputAdornment, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import { ColorModeContext } from '../../../context';

const Exchange = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const [assetSelected, setAssetSelected] = useState<string>('eth');
  const [balance, setBalance] = useState<number>(0);
  const { connected } = useContext(ColorModeContext);
  const theme = useTheme();

  const matches = useMediaQuery('(min-width:600px)');
  const assets = useMemo(
    () => ({
      eth: {
        name: 'Ethereum',
        symbol: 'ETH',
        balance: 0.122,
        decimals: 18,
        icon: 'eth',
      },
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        balance: 1.64399,
        decimals: 8,
        icon: 'btc',
      },
    }),
    []
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAssetSelected(event.target.value as string);
  };
  const handleAmountChange = (event: React.ChangeEvent<{ value: number }>) => {
    setAmount(event.target.value as number);
  };
  const handleMax = () => {
    const [key, val] = Object.entries(assets).find(([key, value]) => key === assetSelected);
    setAmount(val.balance);
  };

  const getBalance = (asset: string) => {
    const [key, val] = Object.entries(assets).find(([key, value]) => key === asset);
    return val.balance;
  };

  useEffect(() => {
    const asset = assets[assetSelected];
    setBalance(parseFloat(asset.balance));
  }, [connected]);
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: matches ? '35%' : '100%' }}>
          <label htmlFor='asset'>From</label>
          <Select value={assetSelected} onChange={handleChange} disabled={!connected}>
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
            <Typography variant='body1' sx={{ color: theme.palette.ash.darker }}>
              Balance: {assetSelected ? getBalance(assetSelected) : null}
            </Typography>
          </Box>
          <OutlinedInput
            name='amount'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            placeholder='Amount'
            value={amount}
            onChange={handleAmountChange}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={handleMax} edge='end' disabled={!connected || !assetSelected}>
                  Max
                </IconButton>
              </InputAdornment>
            }
          />
          <small style={{ color: theme.palette.ash.darker }}>Max to use all your funds</small>
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
            <Select disabled={!connected}>
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
