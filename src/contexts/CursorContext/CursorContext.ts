import { createContext } from 'react';
import { ContextState } from '@/lib/context/types/ContextState';
import { createContextDefaultState } from '@/lib/context/createContextDefaultState';
import { TargetAndTransition } from 'framer-motion';

type ElementData = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CursorContextState = null | {
  text?: string;
  position?: 'top' | 'left' | 'right' | 'bottom';
  magneticElement?: ElementData;
  magneticAntiPressure?: number;
  fitToElement?: { borderRadius: string };
  hoveredStyles?: Omit<TargetAndTransition, 'transition' | 'transitionEnd'>;
};

export type CursorContextType = ContextState<CursorContextState>;

export const initialState = createContextDefaultState<CursorContextState>(null);

export const CursorContext = createContext<CursorContextType>(initialState);
