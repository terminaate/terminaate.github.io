import { FC, PropsWithChildren } from 'react';
import cl from './BasicPage.module.scss';

const BasicPage: FC<PropsWithChildren> = ({ children }) => {
  return <main className={cl.basicPage}>{children}</main>;
};

export default BasicPage;
