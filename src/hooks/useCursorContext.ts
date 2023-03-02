import { useContext } from 'react';
import CursorContext, { CursorContextType } from '@/contexts/CursorContext';

export default () => useContext<CursorContextType>(CursorContext);
