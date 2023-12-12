import { Pages } from '@/components/Routing';
import { createContext } from 'react';
import { createContextDefaultState } from '@/lib/context/createContextDefaultState';
import { ContextState } from '@/lib/context/types/ContextState';

export type RoutingContextState = {
  currentPage: keyof typeof Pages;
};

export type RoutingContextType = ContextState<RoutingContextState>;

const DEFAULT_PAGE = import.meta.env.DEV ? 'AboutPage' : 'IntroPage';

export const initialState = createContextDefaultState<RoutingContextState>({
  currentPage: 'IntroPage',
});

export const RoutingContext = createContext<RoutingContextType>(initialState);
