import { RefObject, useEffect } from 'react';

export default (ref: RefObject<HTMLElement>, then: () => void, elseThen: () => void) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { target } = e as MouseEvent & { target: HTMLElement };
      if (null === ref.current) {
        return;
      }

      if (!ref.current?.contains(target)) {
        then();
      } else {
        elseThen();
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
}