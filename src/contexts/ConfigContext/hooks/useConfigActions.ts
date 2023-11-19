import { useContext } from 'react';
import { createContextActions } from '@/lib/context/createContextActions';
import { ConfigContext } from '@/contexts/ConfigContext';
import { actions } from '../actions';

export const useConfigActions = () => {
  const { dispatch } = useContext(ConfigContext);

  return createContextActions<typeof actions>(actions, dispatch);
};
