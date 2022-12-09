import { DependencyList, useCallback, useRef } from 'react';

export default (
  callback: (...args: any[]) => void,
  deps: DependencyList = [],
) => {
  const returns = useRef<{ args: any[]; target: any }[]>([]);

  const memoizedCallback = useCallback((...args: any[]) => {
    const candidate = returns.current.find(
      (r) => r.args.join() === args.join(),
    );
    if (candidate) {
      return candidate.target;
    } else {
      const target = callback(...args);
      returns.current.push({ args: args, target });
    }
  }, deps);

  return memoizedCallback;
};
