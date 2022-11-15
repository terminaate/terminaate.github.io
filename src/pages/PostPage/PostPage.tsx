import React, { useEffect, useRef, useState } from 'react';
import BasicPage from '@/components/BasicPage';
import { useParams } from 'react-router-dom';
import { PostData } from '@/types/PostData';
import UserService from '@/services/UserService';
import NotFoundPage from '@/pages/NotFoundPage';

const PostPage = () => {
  const [post, setPost] = useState<PostData>();
  const { id } = useParams();
  const isPostGot = useRef<boolean>(false);

  const getServerData = async () => {
    const { data: serverPost } = await UserService.getPost(id!);
    if (serverPost) {
      isPostGot.current = true;
      setPost(serverPost);
    }
  };

  useEffect(() => {
    getServerData();
  }, []);

  if (!isPostGot.current) {
    return <NotFoundPage />;
  }

  return (
    <BasicPage header={true} container={true}>

    </BasicPage>
  );
};

export default PostPage;