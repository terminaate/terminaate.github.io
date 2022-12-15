import React, {
  CSSProperties,
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cl from './Cursor.module.scss';
import useWindowEvent from '@/hooks/useWindowEvent';
import { createPortal } from 'react-dom';
import useCursorContext from '@/hooks/useCursorContext';
import { AnimatePresence, motion } from 'framer-motion';
import { CursorItemProps } from '@/contexts/CursorContext';

interface ICursor {
  size?: number;
}

const Cursor: FC<ICursor> = ({ size = 40 }) => {
  const { state: items } = useCursorContext();
  const followerRef = useRef<null | HTMLDivElement>(null);
  const cursorRef = useRef<null | HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState<CursorItemProps>({
    text: '',
    position: 'top',
  });
  const [hovered, setHovered] = useState<boolean>(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { current: follower } = followerRef;
    const { current: cursor } = cursorRef;
    if (!follower || !cursor) return;

    const setCords = (el: HTMLElement) => {
      el.style.top = e.clientY + 'px';
      el.style.left = e.clientX + 'px';
    };

    setCords(follower);
    setCords(cursor);
  }, []);

  const setOpacity = useCallback(
    (ref: MutableRefObject<null | HTMLElement>, opacity: number) => {
      const { current: target } = ref;
      if (!target) return;

      target.style.opacity = opacity + '';
    },
    [],
  );

  const onMouseOut = useCallback(() => {
    setOpacity(followerRef, 0);
    setOpacity(cursorRef, 0);
  }, []);

  const onMouseOver = useCallback(() => {
    setOpacity(followerRef, 1);
    setOpacity(cursorRef, 1);
  }, []);

  useWindowEvent('mouseover', onMouseOver);
  useWindowEvent('mouseout', onMouseOut);
  useWindowEvent('mousemove', onMouseMove);
  useWindowEvent('contextmenu', (e) => e.preventDefault());

  useEffect(() => {
    for (const item of items) {
      const onMouseOver = () => {
        setHovered(true);
        setCurrentItem(item);
      };

      const onMouseOut = () => {
        setHovered(false);
        setCurrentItem({ text: '', position: 'top' });
      };

      item.element.addEventListener('mouseover', onMouseOver);

      item.element.addEventListener('mouseout', onMouseOut);
    }

    return () => {
      for (const item of items) {
        item.element.removeEventListener('mouseover', onMouseOver);
        item.element.removeEventListener('mouseout', onMouseOver);
      }
    };
  }, [items]);

  return createPortal(
    <>
      <div ref={cursorRef} data-hover={hovered} className={cl.cursor} />
      <div
        ref={followerRef}
        style={
          { '--size': (hovered ? size * 2 : size) + 'px' } as CSSProperties
        }
        data-hover={hovered}
        className={cl.follower}
      >
        <AnimatePresence>
          {currentItem.text && (
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
      </div>
    </>,
    document.body,
  );
};

export default Cursor;
