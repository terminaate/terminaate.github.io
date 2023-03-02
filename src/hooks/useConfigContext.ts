import { useContext } from 'react';
import ConfigContext, { ConfigContextType } from '@/contexts/ConfigContext';

export default () => useContext<ConfigContextType>(ConfigContext);
