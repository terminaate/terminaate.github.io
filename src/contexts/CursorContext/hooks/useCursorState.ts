import { useContext } from 'react';
import { CursorContextType, CursorContext } from '@/contexts/CursorContext';

export const useCursorState = () =>
  useContext<CursorContextType>(CursorContext).state;
