import { useContext } from 'react';
import { CursorContext } from '@/contexts/CursorContext';
import { createContextActions } from '@/lib/context/createContextActions';
import { actions } from '@/contexts/CursorContext/actions';

export const useCursorActions = () => {
  const { dispatch } = useContext(CursorContext);

  return createContextActions<typeof actions>(actions, dispatch);
};
