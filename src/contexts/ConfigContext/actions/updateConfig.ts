import { ConfigContextState } from '@/contexts/ConfigContext';
import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { ConfigContextActions } from '@/common/actions/ConfigContextActions';

export const updateConfig = (
  payload: Partial<ConfigContextState>,
): DispatchAction<ConfigContextActions, typeof payload> => ({
  type: ConfigContextActions.UPDATE_CONFIG,
  payload,
});
