import { AnchorHTMLAttributes, FC, MouseEvent, useCallback } from 'react';
import { useRoutingActions } from '@/contexts/RoutingContext/hooks/useRoutingActions';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export const Link: FC<Props> = ({
  href,
  children,
  onClick = () => {},
  ...props
}) => {
  const { setCurrentPage: navigate } = useRoutingActions();

  const onLinkClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    navigate(href);

    onClick(e);
  }, []);

  return (
    <a onClick={onLinkClick} {...props}>
      {children}
    </a>
  );
};
