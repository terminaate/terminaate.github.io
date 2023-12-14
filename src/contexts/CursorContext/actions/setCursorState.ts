import { CursorContextState } from '@/contexts/CursorContext';
import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { CursorContextActions } from '@/common/actions/CursorContextActions';

export const setCursorState = (
  payload: CursorContextState,
): DispatchAction<CursorContextActions, typeof payload> => ({
  type: CursorContextActions.SET_CURSOR_STATE,
  payload,
});
