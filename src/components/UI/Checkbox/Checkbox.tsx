import React, { InputHTMLAttributes, useId } from 'react';
import cl from './Checkbox.module.scss';
import classNames from 'classnames';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const Checkbox: React.FC<ICheckbox> = ({
  checked = false,
  title,
  containerClassName,
  ...props
}) => {
  const id = useId();

  return (
    <div className={classNames(cl.checkBoxContainer, containerClassName)}>
      {title && <label htmlFor={id}>{title}</label>}
      <div data-checked={checked} className={cl.checkBox}>
        <input {...props} id={id} checked={checked} type={'checkbox'} />
        <div data-checked={checked} className={cl.point} />
      </div>
    </div>
  );
};

export default Checkbox;
