import { Routing } from '@/components/Routing';
import { Cursor } from '@/components/Cursor';
import { DevToolsModal } from '@/components/DevToolsModal';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { ScreenBreakPoints } from '@/common/constants/ScreenBreakPoints';
import { useConfigActions } from '@/contexts/ConfigContext/hooks/useConfigActions';
import { Suspense, useEffect } from 'react';
import { useConfigState } from '@/contexts/ConfigContext/hooks/useConfigState';

export const App = () => {
  const isMobile = useMatchMedia(`(max-width: ${ScreenBreakPoints.MOBILE}px)`);
  const { updateConfig } = useConfigActions();
  const { showCursor } = useConfigState();

  useEffect(() => {
    document.body.setAttribute('data-cursor', showCursor + '');
  }, [showCursor]);

  useEffect(() => {
    updateConfig({ showCustomCursor: !isMobile });
  }, [isMobile]);

  return (
    <>
      <Cursor />
      <Suspense fallback={null}>
        <Routing />
      </Suspense>
      <DevToolsModal />
    </>
  );
};
