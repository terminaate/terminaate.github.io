import { ConfigContextState } from '@/contexts/ConfigContext';
import { ChangeEvent, useCallback } from 'react';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';
import { useConfigActions } from '@/contexts/ConfigContext/hooks/useConfigActions';

export function useConfigInput<T extends keyof ConfigContextState>(
  key: T,
): [
  ConfigContextState[T],
  (e: ChangeEvent<HTMLInputElement>) => void,
  (newValue: ConfigContextState[T]) => void,
] {
  const { [key]: state } = useConfigState();
  const { updateConfig } = useConfigActions();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue =
        typeof state === 'boolean' ? e.target.checked : e.target.value;

      updateConfig({ [key]: newValue });
    },
    [state],
  );

  const setState = useCallback(
    (newValue: ConfigContextState[T]) => {
      updateConfig({ [key]: newValue });
    },
    [state],
  );

  return [state, onChange, setState];
}
