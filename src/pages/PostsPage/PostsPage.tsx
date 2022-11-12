import React, { FC } from 'react';
import cl from './PostsPage.module.scss';
import BasicPage from '@/components/BasicPage';

const PostsPage: FC = () => {
  // const [posts, setPosts] = useState([])

  return (
    <BasicPage
      header={true}
      container={true}
      containerClassName={cl.postsPageContainer}
      className={cl.postsPage}
    >
      Currently posts page is blank ¯\_(ツ)_/¯
    </BasicPage>
  );
};

export default PostsPage;
