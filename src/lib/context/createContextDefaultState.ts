import { ContextState } from '@/lib/context/types/ContextState';

export const createContextDefaultState = <T>(state: T): ContextState<T> => ({
  state,
  dispatch() {
    return this.state;
  },
});
