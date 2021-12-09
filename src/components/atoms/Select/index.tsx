import { MenuItem, Select } from '@mui/material';


// Todo define types and implement funcionality 
const SelectBase = (props) => {
  return (
    <Select {...props}>
      <MenuItem value='ETH'>ETH</MenuItem>
      <MenuItem value='CAKE'>CAKE</MenuItem>
      <MenuItem value='BNB'>BNB</MenuItem>
      <MenuItem value='BTC'>BNB</MenuItem>
    </Select>
  );
};

export default SelectBase;
