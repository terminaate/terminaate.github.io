import React, { FC, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import cl from './Input.module.scss';

interface IInput extends InputHTMLAttributes<any> {
  className?: string;
  container?: boolean;
  containerClassName?: string;
  children?: ReactNode;
  icon?: ReactElement;
}

const Input: FC<IInput> = ({ className, container, children, containerClassName, icon, ...props }) => {
  return (
    <>
      {container ? (
        <div className={classNames(containerClassName!, cl.inputContainer)}>
          <input className={classNames(className!, cl.input)} {...props} />
          {children}
        </div>
      ) : (
        <>
          {icon ? (
            <div className={classNames(className!, cl.inputIconContainer)}>
              {icon}
              <input className={cl.input} {...props} />
            </div>
          ) : (
            <input className={classNames(className!, cl.input)} {...props} />
          )}
        </>

      )}
    </>
  );
};

export default Input;
