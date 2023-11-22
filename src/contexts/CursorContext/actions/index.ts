import { ActionHandler } from '@/lib/context/types/ActionHandler';
import { CursorContextActions } from '@/common/actions/CursorContextActions';
import { CursorContextState } from '@/contexts/CursorContext';
import { removeRef } from './removeRef';
import { pushRef } from './pushRef';

export const actions = {
  pushRef,
  removeRef,
};

export const actionsHandlers: Record<
  CursorContextActions,
  ActionHandler<CursorContextState>
> = {
  [CursorContextActions.PUSH_REF](state, action) {
    return [...state, action.payload];
  },

  [CursorContextActions.REMOVE_REF](state, action) {
    return state.filter((s) => s.id !== action.payload);
  },
};
