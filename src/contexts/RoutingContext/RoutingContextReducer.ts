import { IRoutingContextState } from './RoutingContext';
import { DispatchAction } from '@/types/DispatchAction';

export const setCurrentPage = (page: IRoutingContextState['currentPage']) => ({
  type: 'SET_PAGE',
  payload: page,
});

export function RoutingContextReducer(
  state: IRoutingContextState,
  action: DispatchAction,
): typeof state;
export function RoutingContextReducer(state, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
  }
  throw new Error('Unknown action type.');
}
