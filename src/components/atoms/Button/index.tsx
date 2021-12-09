import { Brightness7 } from '@mui/icons-material';

import Button from '@mui/material/Button';

import { getSizeStyles } from './dls';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Wallet = 'wallet',
}
export enum ButtonVariants {
  Text = 'text',
  Outlined = 'outlined',
  Contained = 'contained',
}

interface Props {
  text?: string;
  variant?: ButtonVariants;
  iconLeft?: boolean;
  iconRight?: boolean;
  size?: ButtonSize;
  handler?: () => void;
  isSecondary?: boolean;
  icon?: React.ReactElement;
}

const ButtonBooster = ({
  text = '',
  variant = ButtonVariants.Contained,
  size = ButtonSize.Medium,
  iconLeft = false,
  iconRight = false,
  handler = () => {},
  isSecondary = false,
  icon = undefined,
}: Props) => {
  const placeholder = 'Click';
  const iconPlaceholder = !icon ? <Brightness7 /> : icon;
  const color = isSecondary ? 'secondary' : 'primary';

  if (iconLeft || iconRight) {
    return (
      <>
        {iconLeft && (
          <Button
            color={color}
            variant={variant}
            startIcon={iconPlaceholder}
            sx={getSizeStyles(size)}
            onClick={handler}
          >
            {text || placeholder}
          </Button>
        )}
        {iconRight && (
          <Button
            color={color}
            variant={variant}
            endIcon={iconPlaceholder}
            sx={{ ...getSizeStyles(size) }}
            onClick={handler}
          >
            {text || placeholder}
          </Button>
        )}
      </>
    );
  }

  return (
    <Button color={color} variant={variant} sx={getSizeStyles(size)} onClick={handler}>
      {text || placeholder}
    </Button>
  );
};

export default ButtonBooster;
