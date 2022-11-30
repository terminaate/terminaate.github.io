import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import cl from './BasicPage.module.scss';
import Header from '@/components/Header';

const BasicPage: FC<HTMLAttributes<HTMLDivElement>> = ({className, children, ...props}) => {
  return (
    <div {...props} className={classNames(cl.basicPage, className!)}>
      <Header />
      {children}
    </div>
  );
};

export default BasicPage;
