import { useWindowEvent } from '@/hooks/useWindowEvent';

export const useKeyPress = (
  code: string | string[],
  callback: () => void,
  event: 'keypress' | 'keydown' | 'keyup' = 'keypress',
) => {
  useWindowEvent(event, (e) => {
    if (Array.isArray(code) ? code.includes(e.code) : e.code === code) {
      callback();
    }
  });
};
