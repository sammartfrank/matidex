import { SxProps } from '@mui/system';

export const getSizeStyles = (size: string): SxProps => {
  switch (size) {
    case 'large':
      return {
        width: '127px',
        height: '64px',
        fontSize: '1.25rem',
        fontFamily: '"Konnect-regular", sans-serif',
      };
    case 'medium':
      return {
        width: '104px',
        height: '49px',
        fontSize: '1.125rem',
        fontFamily: '"Konnect-regular", sans-serif',
        textTransform: 'none',
      };
    case 'small':
      return {
        width: '82px',
        height: '40px',
        fontSize: '1rem',
        padding: '9px 16px',
        fontFamily: '"Konnect-regular", sans-serif',
        textTransform: 'none',
      };
    case 'wallet':
      return {
        width: '200px',
        height: '64px',
        fontSize: '1rem',
        padding: '9px 16px',
        fontFamily: '"Konnect-regular", sans-serif',
        textTransform: 'none',
      };

    default:
      return {
        width: '104px',
        height: '49px',
        fontSize: '1.125rem',
        textTransform: 'none',
      };
  }
};
