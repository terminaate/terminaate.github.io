import { Action } from './ConfigContextReducer';
import React, { createContext } from 'react';

export interface IConfigContext {
  state: {
    showCursor: boolean;
    showCustomCursor: boolean;
    transitionBetweenPages: boolean;
  };
  dispatch: (action: Action) => void | React.Dispatch<Action>;
}

export const initialState: IConfigContext = {
  state: {
    showCursor: import.meta.env.DEV,
    showCustomCursor: true,
    transitionBetweenPages: true,
  },
  dispatch: () => {},
};

const ConfigContext = createContext<IConfigContext>(initialState);

export default ConfigContext;
