import { FC, HTMLAttributes, ReactNode, useEffect, useRef } from 'react';
import { CursorItemProps } from '@/contexts/CursorContext';
import { useCursorActions } from '@/contexts/CursorContext/hooks/useCursorActions';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const MouseHover: FC<Props & Partial<CursorItemProps>> = ({
  children,
  text,
  position,
  ...props
}) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const { removeRef, pushRef } = useCursorActions();

  useEffect(() => {
    const id = Date.now();
    pushRef({ text, position, ref, id });

    return () => {
      removeRef(id);
    };
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};
