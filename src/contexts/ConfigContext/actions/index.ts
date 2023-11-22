import { ActionHandler } from '@/lib/context/types/ActionHandler';
import { ConfigContextActions } from '@/common/actions/ConfigContextActions';
import { ConfigContextState } from '@/contexts/ConfigContext';
import { updateConfig } from './updateConfig';

export const actions = {
  updateConfig,
};

export const actionsHandlers: Record<
  ConfigContextActions,
  ActionHandler<ConfigContextState>
> = {
  [ConfigContextActions.UPDATE_CONFIG](state, action) {
    return { ...state, ...action.payload };
  },
};
