import { RoutingContextState } from '@/contexts/RoutingContext';
import { DispatchAction } from '@/lib/context/types/DispatchAction';
import { RoutingContextActions } from '@/common/actions/RoutingContextActions';

export const setCurrentPage = (
  page: RoutingContextState['currentPage'],
): DispatchAction<RoutingContextActions, typeof page> => ({
  type: RoutingContextActions.SET_PAGE,
  payload: page,
});
