import React, { FC, HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import useCursorContext from '@/hooks/useCursorContext';
import { pushRef, removeRef } from '@/contexts/CursorContext';

interface IMouseHover extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MouseHover: FC<IMouseHover> = ({ children, ...props }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { dispatch } = useCursorContext();

  useEffect(() => {
    const id = Date.now();
    dispatch(pushRef({ ...props, ref, id }));

    return () => {
      dispatch(removeRef(id));
    };
  }, []);

  return <div ref={ref} {...props}>{children}</div>;
};

export default MouseHover;
