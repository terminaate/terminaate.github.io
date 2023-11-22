import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { Dispatch } from 'react';

export interface ContextState<State> {
  state: State;
  dispatch: Dispatch<DispatchAction>;
}
