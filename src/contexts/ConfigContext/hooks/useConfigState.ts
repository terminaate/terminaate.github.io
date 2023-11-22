import { useContext } from 'react';
import { ConfigContext, ConfigContextType } from '@/contexts/ConfigContext';

export const useConfigState = () =>
  useContext<ConfigContextType>(ConfigContext).state;
