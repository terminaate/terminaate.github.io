import { useContext } from 'react';
import { RoutingContext, RoutingContextType } from '@/contexts/RoutingContext';

export const useRoutingState = () =>
  useContext<RoutingContextType>(RoutingContext).state;
