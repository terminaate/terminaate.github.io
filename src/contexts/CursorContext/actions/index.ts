import { ActionHandler } from '@/lib/context/types/ActionHandler';
import { CursorContextActions } from '@/common/actions/CursorContextActions';
import { CursorContextState } from '@/contexts/CursorContext';
import { setCursorState } from './setCursorState';

export const actions = {
  setCursorState,
};

export const actionsHandlers: Record<
  CursorContextActions,
  ActionHandler<CursorContextState>
> = {
  [CursorContextActions.SET_CURSOR_STATE](state, action) {
    return action.payload;
  },
};
