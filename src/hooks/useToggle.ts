import { useCallback, useState } from 'react';

export function useToggle(
  initialState: boolean,
): [boolean, (newState?: boolean) => void] {
  const [state, setState] = useState<typeof initialState>(initialState);

  const changeState = useCallback(
    (newState?: typeof initialState) => {
      setState(newState ?? !state);
    },
    [state],
  );

  return [state, changeState];
}
