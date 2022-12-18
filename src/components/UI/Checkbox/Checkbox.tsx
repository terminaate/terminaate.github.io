import React, { InputHTMLAttributes, useId } from 'react';
import cl from './Checkbox.module.scss';

const Checkbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  checked = false,
  title,
  ...props
}) => {
  const id = useId();

  return (
    <div className={cl.checkBoxContainer}>
      {title && <label htmlFor={id}>{title}</label>}
      <div data-checked={checked} className={cl.checkBox}>
        <input {...props} id={id} checked={checked} type={'checkbox'} />
        <div data-checked={checked} className={cl.point} />
      </div>
    </div>
  );
};

export default Checkbox;
