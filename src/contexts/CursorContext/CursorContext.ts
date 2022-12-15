import { Action } from './CursorContextReducer';
import React, { createContext } from 'react';

export interface ICursorContext {
  state: {
    text?: string;
    position?: 'top' | 'left' | 'right' | 'bottom';
    element: HTMLElement;
  }[];
  dispatch: (action: Action) => void | React.Dispatch<Action>;
}

export type CursorItemProps = Omit<ArrayElement<ICursorContext['state']>, "element">

export const initialState: ICursorContext = {
  state: [],
  dispatch: () => {},
};

const CursorContext = createContext<ICursorContext>(initialState);

export default CursorContext;
