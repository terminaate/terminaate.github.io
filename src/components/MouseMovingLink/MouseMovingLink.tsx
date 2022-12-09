import React, {
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactElement,
  useRef,
} from 'react';
import cl from './MouseMovingLink.module.scss';
import { useNavigate } from 'react-router-dom';
import useMatchMedia from '@/hooks/useMatchMedia';
import useMouseMove from '@/hooks/useMouseMove';
import Tooltip from '@/components/Tooltip';
import classNames from 'classnames';

export interface IMouseMovingLink extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement;
  link: string;
  style: CSSProperties;
  title: string;
}

const MouseMovingLink: FC<IMouseMovingLink> = ({
  icon,
  link,
  style,
  title,
  className,
  ...props
}) => {
  const navigate = useNavigate();
  const linkRef = useRef<null | HTMLButtonElement>(null);
  const mediaMatch = useMatchMedia('(max-width: 1000px)');

  useMouseMove((e) => {
    const { current: link } = linkRef;
    if (mediaMatch || !link) return;

    const x = (window.innerWidth - e.pageX * 3) / 90;
    const y = (window.innerHeight - e.pageY * 3) / 90;
    link.style.transform = `translate(${x}px, ${y}px)`;
  });

  return !mediaMatch ? (
    <div {...props} className={classNames(cl.linkContainer, className)}>
      <button
        ref={linkRef}
        onClick={() => navigate(link)}
        style={style}
        className={cl.linkButton}
      >
        <Tooltip position={'top'} text={title}>
          {icon}
        </Tooltip>
      </button>
    </div>
  ) : null;
};

export default MouseMovingLink;
