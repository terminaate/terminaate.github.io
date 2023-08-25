import { useCallback, useState } from 'react';

export default function useToggle(
  initialState: boolean,
): [typeof initialState, (newState?: typeof initialState) => void];
export default function useToggle(initialState) {
  const [state, setState] = useState<typeof initialState>(initialState);

  const changeState = useCallback(
    (newState?: typeof initialState) => {
      setState(newState ?? !state);
    },
    [state],
  );

  return [state, changeState];
}
