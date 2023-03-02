import { DispatchAction } from '@/types/DispatchAction';
import { CursorContextState } from '@/contexts/CursorContext/CursorContext';

export const pushRef = (
  payload: ArrayElement<CursorContextState>,
): DispatchAction<typeof payload> => ({
  type: 'PUSH_REF',
  payload,
});

export const removeRef = (payload: ArrayElement<CursorContextState>['id']) => ({
  type: 'REMOVE_REF',
  payload,
});

export function CursorContextReducer(
  state: CursorContextState,
  action: DispatchAction,
): typeof state;
export function CursorContextReducer(state, action) {
  switch (action.type) {
    case 'PUSH_REF':
      return [...state, action.payload];
    case 'REMOVE_REF':
      return state.filter((s) => s.id !== action.payload);
  }
  throw new Error('Unknown action type.');
}
