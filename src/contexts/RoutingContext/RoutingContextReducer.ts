import { RoutingContextState } from './RoutingContext';
import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { actionsHandlers } from './actions';

export function RoutingContextReducer(
  state: RoutingContextState,
  action: DispatchAction,
): typeof state {
  if (actionsHandlers[action.type]) {
    return actionsHandlers[action.type](state, action);
  }

  throw new Error('Unknown action type.');
}
