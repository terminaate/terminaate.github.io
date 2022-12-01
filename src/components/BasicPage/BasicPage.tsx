import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import cl from './BasicPage.module.scss';
import Header from '@/components/Header';

type BasicPageProps = HTMLAttributes<HTMLDivElement>;

const BasicPage: FC<BasicPageProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={classNames(cl.basicPage, props.className)}>
      <Header />
      {children}
    </div>
  );
};

export default BasicPage;
