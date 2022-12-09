import React, { FC, HTMLAttributes } from 'react';
import cl from './Title.module.scss';

const Title: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div {...props} className={cl.titleContainer}>
      <h1 className={cl.title}>{children}</h1>
    </div>
  );
};

export default Title;
