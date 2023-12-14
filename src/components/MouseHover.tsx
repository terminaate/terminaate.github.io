import { FC, HTMLAttributes, MouseEvent, ReactNode, useEffect } from 'react';
import { useCursorActions } from '@/contexts/CursorContext/hooks/useCursorActions';
import { CursorContextState } from '@/contexts/CursorContext';

type Props = HTMLAttributes<HTMLDivElement> &
  Partial<CursorContextState> & {
    children: ReactNode;
    magnetic?: boolean;
  };

export const MouseHover: FC<Props> = ({
  children,
  text,
  position,
  fitToElement,
  hoveredStyles,
  magnetic,
  magneticAntiPressure = 5,
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

    const elementCenterX =
      target.getBoundingClientRect().left + target.offsetWidth / 2;
    const elementCenterY =
      target.getBoundingClientRect().top + target.offsetHeight / 2;

    const newData: CursorContextState = {
      text,
      position,
      hoveredStyles,
    };

    if (magnetic) {
      newData.magneticElement = {
        x: elementCenterX,
        y: elementCenterY,
        width: target.clientWidth,
        height: target.clientHeight,
      };

      if (fitToElement) {
        newData.fitToElement = fitToElement;
      }

      newData.magneticAntiPressure = magneticAntiPressure;
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
