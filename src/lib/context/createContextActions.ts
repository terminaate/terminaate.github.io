import { ContextActions } from '@/lib/context/types/ContextActions';
import { Dispatch } from 'react';

export const createContextActions = <A extends Record<keyof A, A[keyof A]>>(
  actions: Record<keyof A, A[keyof A]>,
  dispatch: Dispatch<any>,
) => {
  const mappedActions = Object.keys(actions).reduce<ContextActions<A>>(
    (acc, curr) => {
      return {
        ...acc,
        [curr]: (...args: Parameters<A[keyof A]>) => {
          // TODO: fix this
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return dispatch(actions[curr](...args));
        },
      };
    },
    {} as A,
  );

  return mappedActions;
};
