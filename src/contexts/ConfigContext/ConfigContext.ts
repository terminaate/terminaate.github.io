import { createContext } from 'react';
import { ContextState } from '@/types/ContextState';
import { createContextDefaultState } from '@/utils/createContextDefaultState';

export interface IConfigContextState {
  showCursor: boolean;
  showCustomCursor: boolean;
  transitionBetweenPages: boolean;
  devToolsModal: boolean;
}

export type ConfigContextType = ContextState<IConfigContextState>;

export const initialState = createContextDefaultState<IConfigContextState>({
  showCursor: import.meta.env.DEV,
  showCustomCursor: true,
  transitionBetweenPages: true,
  devToolsModal: false,
});

const ConfigContext = createContext<ConfigContextType>(initialState);

export default ConfigContext;
