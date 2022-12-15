import React, { FC, JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode, useEffect, useRef } from 'react';
import useCursorContext from '@/hooks/useCursorContext';
import { CursorItemProps, ICursorContext, pushRef } from '@/contexts/CursorContext';

type MouseHoverProps = PropsWithChildren & CursorItemProps

const MouseHover: FC<MouseHoverProps> = ({ children, ...props }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { dispatch } = useCursorContext();

  useEffect(() => {
    if (ref.current !== null) {
      dispatch(pushRef({ element: ref.current, ...props }));
    }
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default MouseHover;
