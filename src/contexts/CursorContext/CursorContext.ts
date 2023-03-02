import { createContext, MutableRefObject } from 'react';
import { ContextState } from '@/types/ContextState';
import { createContextDefaultState } from '@/utils/createContextDefaultState';

export type CursorContextState = {
  id: number;
  text?: string;
  position?: 'top' | 'left' | 'right' | 'bottom';
  ref: MutableRefObject<null | HTMLElement>;
}[];

export type CursorContextType = ContextState<CursorContextState>;

export type CursorItemProps = Omit<ArrayElement<CursorContextState>, 'ref'>;

export const initialState = createContextDefaultState<CursorContextState>([]);

const CursorContext = createContext<CursorContextType>(initialState);

export default CursorContext;
