import { MutableRefObject, useRef } from 'react';
import { useWindowEvent } from '@/hooks/useWindowEvent';

type OptionsEvent = 'mousedown' | 'mouseup' | 'click';

type Options = {
  event?: OptionsEvent;
  except?: MutableRefObject<HTMLElement>;
};

export const useOutsideClick = <T extends HTMLElement>(
  then: () => void,
  options: Options = {},
) => {
  const { event = 'mousedown', except } = options;

  const ref = useRef<null | T>(null);

  const handler = (e: MouseEvent) => {
    const target = e.target as T;

    if (ref.current === null) {
      return;
    }

    if (!ref.current?.contains(target) && !except?.current?.contains(target)) {
      then();
    }
  };

  useWindowEvent(event, handler);

  return ref;
};
