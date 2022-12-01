import React, { FC, ReactNode } from 'react';
import cl from './Tooltip.module.scss';

interface ITooltip {
  children: ReactNode;
  text: string;
  position?: 'top' | 'left' | 'bottom' | 'right';
}

const Tooltip: FC<ITooltip> = ({ children, text, position = 'right' }) => {
  return (
    <div className={cl.tooltipContainer}>
      <span data-position={position} className={cl.tooltip}>
        {text}
      </span>
      {children}
    </div>
  );
};

export default Tooltip;
