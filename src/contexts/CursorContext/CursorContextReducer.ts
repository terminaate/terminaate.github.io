import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { CursorContextState } from '@/contexts/CursorContext/CursorContext';
import { actionsHandlers } from './actions';

export function CursorContextReducer(
  state: CursorContextState,
  action: DispatchAction,
): typeof state {
  if (actionsHandlers[action.type]) {
    return actionsHandlers[action.type](state, action);
  }

  throw new Error('Unknown action type.');
}
