import React, { FC, InputHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import cl from './Input.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactElement;
}

const Input: FC<IInput> = ({ className, children, ...props }) => {
  return (
    <>
      <div className={classNames(cl.container, className!)}>
        <input type="text" className={cl.input} {...props} />
        {children}
      </div>
    </>
  );
};

export default Input;
