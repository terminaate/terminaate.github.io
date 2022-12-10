import { DependencyList, useCallback, useRef } from 'react';

export default (
  callback: (...args: any[]) => any,
  deps: DependencyList = [],
) => {
  const returns = useRef<{ args: any[]; target: any }[]>([]);

  return useCallback((...args: any[]) => {
    const candidate = returns.current.find(
      (r) => r.args.join() === args.join(),
    );
    if (candidate) {
      return candidate.target;
    } else {
      const target = callback(...args);
      returns.current.push({ args, target });
    }
  }, deps);
};
