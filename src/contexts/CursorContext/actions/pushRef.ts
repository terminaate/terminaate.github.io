import { CursorContextState } from '@/contexts/CursorContext';
import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { CursorContextActions } from '@/common/actions/CursorContextActions';

export const pushRef = (
  payload: ArrayElement<CursorContextState>,
): DispatchAction<CursorContextActions, typeof payload> => ({
  type: CursorContextActions.PUSH_REF,
  payload,
});
