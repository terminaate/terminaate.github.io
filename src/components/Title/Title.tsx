import React, { HTMLAttributes } from 'react';
import cl from './Title.module.scss';

interface ITitle extends HTMLAttributes<HTMLDivElement | HTMLHeadElement> {
  container?: boolean;
}

const Title: React.FC<ITitle> = ({ children, container, ...props }) => {
  return container ? (
    <div {...props} className={cl.titleContainer}>
      <h1 className={cl.title}>{children}</h1>
    </div>
  ) : (
    <h1 {...props} className={cl.title}>
      {children}
    </h1>
  );
};

export default Title;
