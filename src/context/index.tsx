import { createContext, useContext } from 'react';

interface ModeContext {
  toggleColorMode?: () => void;
  toggleConnectionMode?: () => void;
  connected: boolean;
}

export const ColorModeContext = createContext<ModeContext>({
  toggleColorMode: () => {},
  toggleConnectionMode: () => {},
  connected: false,
});

const useModeContext = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useModeContext must be inside a Provider');
  }
  return context;
};

export { useModeContext };
