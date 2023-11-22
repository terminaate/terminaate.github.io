import { createContext } from 'react';
import { ContextState } from '@/lib/context/types/ContextState';
import { createContextDefaultState } from '@/lib/context/createContextDefaultState';

export type ConfigContextState = {
  showCursor: boolean;
  showCustomCursor: boolean;
  transitionBetweenPages: boolean;
  devToolsModal: boolean;
};

export type ConfigContextType = ContextState<ConfigContextState>;

export const initialState = createContextDefaultState<ConfigContextState>({
  showCursor: import.meta.env.DEV,
  showCustomCursor: true,
  transitionBetweenPages: true,
  devToolsModal: false,
});

export const ConfigContext = createContext<ConfigContextType>(initialState);
