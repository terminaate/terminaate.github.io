import { ICursorContext } from './CursorContext';

export type Action<T = any> = {
  type: string;
  payload?: T;
};

export const pushRef = (payload: ArrayElement<ICursorContext['state']>): Action<typeof payload> => ({
  type: 'PUSH_REF',
  payload,
});

export const CursorContextReducer = (
  state: ICursorContext['state'],
  action: Action,
): typeof state => {
  switch (action.type) {
    case 'PUSH_REF':
      return [...state, action.payload];
  }
  throw new Error('Unkown action type.');
};
