import { FC, useState } from 'react';
import cl from './Cursor.module.scss';
import { useWindowEvent } from '@/hooks/useWindowEvent';
import { createPortal } from 'react-dom';
import { useCursorState } from '@/contexts/CursorContext/hooks/useCursorState';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { ScreenBreakPoints } from '@/common/constants/ScreenBreakPoints';

type Props = {
  size?: number;
};

const cursorVariants: Variants = {
  initial: ({ size, mousePosition }) => ({
    opacity: 1,
    width: size,
    height: size,
    x: mousePosition.x - size / 2,
    y: mousePosition.y - size / 2,
  }),

  animate: ({ mousePosition, hovered, size }) => {
    let sizeStyles: Record<string, any> = {
      width: hovered ? size * 2 : size,
      height: hovered ? size * 2 : size,
    };

    let newMousePosition = {
      x: mousePosition.x - sizeStyles.width / 2,
      y: mousePosition.y - sizeStyles.height / 2,
    };

    if (!hovered) {
      return { ...newMousePosition, ...sizeStyles };
    }

    const {
      magneticElement,
      fitToElement,
      magneticAntiPressure,
      hoveredStyles: customHoverStyles,
    } = hovered;

    if (magneticElement) {
      if (fitToElement) {
        sizeStyles = {
          width: magneticElement.width,
          height: magneticElement.height,
          borderRadius: fitToElement.borderRadius,
        };
      }

      newMousePosition = {
        x:
          magneticElement.x -
          sizeStyles.width / 2 +
          (mousePosition.x - magneticElement.x) / magneticAntiPressure,
        y:
          magneticElement.y -
          sizeStyles.height / 2 +
          (mousePosition.y - magneticElement.y) / magneticAntiPressure,
      };
    }

    const styles = customHoverStyles || {
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      border: 'none',
    };

    return {
      ...sizeStyles,
      ...newMousePosition,
      ...styles,
      backdropFilter: 'none',
    };
  },

  exit: {
    opacity: 0,
  },
};

export const Cursor: FC<Props> = ({ size = 30 }) => {
  const currentItem = useCursorState();
  const { showCustomCursor } = useConfigState();
  const isMobile = useMatchMedia(`(max-width: ${ScreenBreakPoints.MOBILE}px)`);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isOutOfScreen, setIsOutOfScreen] = useState(false);

  useWindowEvent('mousemove', (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  });

  useWindowEvent('mouseout', () => {
    setIsOutOfScreen(true);
  });

  useWindowEvent('mouseover', () => {
    setIsOutOfScreen(false);
  });

  useWindowEvent('contextmenu', (e) => e.preventDefault());

  if (isMobile) {
    return null;
  }

  const showCursor = !isOutOfScreen && showCustomCursor;

  return createPortal(
    <AnimatePresence>
      {showCursor && (
        <motion.div
          variants={cursorVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{
            type: 'tween',
            duration: 0.2,
            x: {
              type: 'tween',
              duration: 0.05,
            },
            y: {
              type: 'tween',
              duration: 0.05,
            },
          }}
          custom={{ mousePosition, hovered: currentItem, size }}
          className={cl.cursor}
        >
          <AnimatePresence>
            {currentItem?.text && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cl.followerText}
                data-position={currentItem.position ?? 'top'}
              >
                {currentItem.text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.querySelector('#cursor')!,
  );
};
