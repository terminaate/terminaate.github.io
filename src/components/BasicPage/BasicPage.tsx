import React, { FC, HTMLAttributes } from 'react';
import cl from './BasicPage.module.scss';
import Header from '@/components/Header';

const BasicPage: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <div className={cl.basicPage} {...props}>
    <Header />
    {children}
  </div>
);

export default BasicPage;
