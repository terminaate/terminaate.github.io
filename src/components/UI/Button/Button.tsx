import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import cl from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<any> {
  children?: ReactNode;
  className?: string;
}

const Button: FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button className={classNames(className, cl.button)} {...props}>
      {children}
    </button>
  );
};

export default Button;
