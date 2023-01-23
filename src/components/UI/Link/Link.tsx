import React, { AnchorHTMLAttributes, MouseEvent, useCallback } from 'react';
import useNavigate from '@/hooks/useNavigate';

interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<ILink> = ({ href, children, ...props }) => {
  const navigate = useNavigate();

  const onClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    navigate(href);
  }, []);

  return (
    <a onClick={onClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
