import React from 'react';
import cl from './ErrorMessage.module.scss';

interface IErrorMessage {
  error: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ error }) => {
  return (
    <div data-error={Boolean(error)} className={cl.errorContainer}>
      <span className={cl.error}>{error}</span>
    </div>
  );
};

export default ErrorMessage;
