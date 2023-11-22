export type ContextActions<A extends Record<keyof A, A[keyof A]>> = Record<
  keyof A,
  (...args: Parameters<A[keyof A]>) => ReturnType<A[keyof A]>
>;
