import { ContextState } from '@/lib/context/types/ContextState';

export const createContextDefaultState = <T = any>(
  state: T,
): ContextState<T> => ({
  state,
  dispatch: function () {
    return this.state;
  },
});
