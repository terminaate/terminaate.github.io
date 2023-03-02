import { Pages } from '@/components/Routing';
import { createContext } from 'react';
import { createContextDefaultState } from '@/utils/createContextDefaultState';
import { ContextState } from '@/types/ContextState';

export interface IRoutingContextState {
  currentPage: keyof typeof Pages;
}

export type RoutingContextType = ContextState<IRoutingContextState>

export const initialState = createContextDefaultState<IRoutingContextState>({
  currentPage: import.meta.env.DEV ? 'AboutPage' : 'IntroPage',
});

const RoutingContext = createContext<RoutingContextType>(initialState);

export default RoutingContext;
