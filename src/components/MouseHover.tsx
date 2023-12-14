import { FC, HTMLAttributes, MouseEvent, ReactNode, useEffect } from 'react';
import { useCursorActions } from '@/contexts/CursorContext/hooks/useCursorActions';
import { CursorContextState } from '@/contexts/CursorContext';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  magnetic?: boolean;
};

export const MouseHover: FC<Props & Partial<CursorContextState>> = ({
  children,
  text,
  position,
  magnetic = false,
  ...props
}) => {
  const { setCursorState } = useCursorActions();

  useEffect(() => {
    return () => {
      setCursorState(null);
    };
  }, []);

  const onMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const elementX = target.offsetLeft + target.offsetWidth / 2;
    const elementY = target.offsetTop + target.offsetHeight / 2;

    const newData: CursorContextState = {
      text,
      position,
    };

    if (magnetic) {
      newData.elementData = {
        x: elementX,
        y: elementY,
        width: target.clientWidth,
        height: target.clientHeight,
      };
    }

    setCursorState(newData);
  };

  const onMouseOut = () => {
    setCursorState(null);
  };

  return (
    <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} {...props}>
      {children}
    </div>
  );
};
