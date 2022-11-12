import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import cl from './Input.module.scss';

interface IInput extends InputHTMLAttributes<any> {
  className?: string;
  container?: boolean;
  children?: ReactNode;
}

const Input: FC<IInput> = ({ className, container, children, ...props }) => {
  return (
    <>
      {container ? (
        <div className={cl.inputContainer}>
          <input type='text' className={classNames(className!, cl.input)} {...props} />
          {children}
        </div>
      ) : (
        <input type='text' className={classNames(className!, cl.input)} {...props} />
      )}
    </>
  );
};

export default Input;