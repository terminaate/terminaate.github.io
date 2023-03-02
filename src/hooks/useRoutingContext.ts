import { useContext } from 'react';
import RoutingContext, { RoutingContextType } from '@/contexts/RoutingContext';

export default () => useContext<RoutingContextType>(RoutingContext);
