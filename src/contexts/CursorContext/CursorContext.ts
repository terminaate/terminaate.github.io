import { createContext } from 'react';
import { ContextState } from '@/lib/context/types/ContextState';
import { createContextDefaultState } from '@/lib/context/createContextDefaultState';

type ElementData = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CursorContextState = null | {
  text?: string;
  position?: 'top' | 'left' | 'right' | 'bottom';
  elementData?: ElementData;
};

export type CursorContextType = ContextState<CursorContextState>;

export const initialState = createContextDefaultState<CursorContextState>(null);

export const CursorContext = createContext<CursorContextType>(initialState);
