import React, { PropsWithChildren } from 'react';
import cl from './BasicPage.module.scss';

const BasicPage: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={cl.basicPage}>{children}</div>;
};

export default BasicPage;
