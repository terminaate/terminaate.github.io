import React, { FC } from 'react';
import cl from './PostsPage.module.scss';
import BasicPage from '@/components/BasicPage';

const PostsPage: FC = () => {
  return (
    <BasicPage header={true} container={true} className={cl.postsPage}>
      Currently posts page is blank ¯\_(ツ)_/¯
    </BasicPage>
  );
};

export default PostsPage;
