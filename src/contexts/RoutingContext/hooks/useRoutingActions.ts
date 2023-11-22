import { useContext } from 'react';
import { RoutingContext } from '@/contexts/RoutingContext';
import { actions } from '../actions';
import { createContextActions } from '@/lib/context/createContextActions';

export const useRoutingActions = () => {
  const { dispatch } = useContext(RoutingContext);

  return createContextActions<typeof actions>(actions, dispatch);
};
