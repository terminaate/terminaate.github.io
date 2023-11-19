import { CursorContextState } from '@/contexts/CursorContext';
import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { CursorContextActions } from '@/common/actions/CursorContextActions';

export const removeRef = (
  payload: ArrayElement<CursorContextState>['id'],
): DispatchAction<CursorContextActions, typeof payload> => ({
  type: CursorContextActions.REMOVE_REF,
  payload,
});
