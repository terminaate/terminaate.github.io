import { useCallback, useEffect, useState } from 'react';

const useMouseMove = (callback?: (e: MouseEvent) => void): [number, number] => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (callback) {
      callback(e);
    }
    setY(e.y);
    setX(e.x);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return [x, y];
};

export default useMouseMove;
