import React from 'react';

import Input from '@mui/material';

interface Props {
  label?: string;
  value?: string;
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  placeholder?: string;
  type?: string;
  sx?: object;
}

const InputBase = ({
  type,
  value,
  handler,
  placeholder,
  sx,
  iconLeft,
  iconRight,
  label,
}: Props): React.ReactElement => {
  return <Input type={type} value={value} onChange={handler} />;
};

export default InputBase;
