export interface DispatchAction<T = string | number, P = any> {
  type: T;
  payload: P;
}
