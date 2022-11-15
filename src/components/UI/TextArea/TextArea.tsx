import React, { TextareaHTMLAttributes } from 'react';
import cl from './TextArea.module.scss';
import classNames from 'classnames';

interface ITextArea extends TextareaHTMLAttributes<any> {
  className?: string;
}

const TextArea: React.FC<ITextArea> = ({ className, ...props }) => {
  return (
    <textarea className={classNames(className!, cl.textarea)} {...props} />
  );
};

export default TextArea;