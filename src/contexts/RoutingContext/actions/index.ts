import { setCurrentPage } from './setCurrentPage';
import { ActionHandler } from '@/lib/context/types/ActionHandler';
import { RoutingContextState } from '@/contexts/RoutingContext';
import { RoutingContextActions } from '@/common/actions/RoutingContextActions';

export const actions = {
  setCurrentPage,
};

export const actionsHandlers: Record<
  RoutingContextActions,
  ActionHandler<RoutingContextState>
> = {
  [RoutingContextActions.SET_PAGE](state, action) {
    return { currentPage: action.payload };
  },
};
