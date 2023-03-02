export interface DispatchAction<T=any> {
  type: string;
  payload: T;
}