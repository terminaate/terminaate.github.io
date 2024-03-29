import { FC, HTMLAttributes } from 'react';
import cl from './Button.module.scss';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={cl.button}>
      {children}
    </button>
  );
};
