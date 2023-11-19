import { FC, InputHTMLAttributes, useId } from 'react';
import cl from './Checkbox.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
};

export const Checkbox: FC<Props> = ({
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
        <motion.div layout className={cl.point} />
      </div>
    </div>
  );
};
