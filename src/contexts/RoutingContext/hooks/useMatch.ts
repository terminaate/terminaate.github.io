import { Pages } from '@/components/Routing';
import { useRoutingState } from '@/contexts/RoutingContext/hooks/useRoutingState';
import { useMemo } from 'react';

export const useMatch = (page?: keyof typeof Pages) => {
  const { currentPage } = useRoutingState();

  return useMemo(() => currentPage === page, [currentPage]);
};
