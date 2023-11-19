import { NavDesktop } from '@/components/Nav/NavDesktop';
import { useMatchMedia } from '@/hooks/useMatchMedia';
import { NavMobile } from '@/components/Nav/NavMobile';
import { ScreenBreakPoints } from '@/common/constants/ScreenBreakPoints';

export const Nav = () => {
  const isMobile = useMatchMedia(`(max-width: ${ScreenBreakPoints.MOBILE}px)`);

  return isMobile ? <NavMobile /> : <NavDesktop />;
};
