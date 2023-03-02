import { IConfigContextState } from './ConfigContext';
import { DispatchAction } from '@/types/DispatchAction';

export const updateConfig = (payload: Partial<IConfigContextState>) => ({
  type: 'UPDATE_CONFIG',
  payload,
});

export function ConfigContextReducer(
  state: IConfigContextState,
  action: DispatchAction,
): typeof state;
export function ConfigContextReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CONFIG':
      return { ...state, ...action.payload };
  }
  throw new Error('Unknown action type.');
}
