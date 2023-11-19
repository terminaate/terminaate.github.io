import { DispatchAction } from '@/lib/context/types/DispatchAction';

export type ActionHandler<S> = (state: S, action: DispatchAction) => S;
