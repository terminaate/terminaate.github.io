import React, { useEffect, useRef, useState } from 'react';
import BasicPage from '@/components/BasicPage';
import { useNavigate, useParams } from 'react-router-dom';
import { PostData } from '@/types/PostData';
import UserService from '@/services/UserService';
import NotFoundPage from '@/pages/NotFoundPage';
import cl from './PostPage.module.scss';
import DateService from '@/services/DateService';
import Markdown from '@/components/Markdown';
import { userAvatarUrl } from '@/http';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import Button from '@/components/UI/Button';

// TODO
// add translations in backend

const PostPage = () => {
  const { authorized } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const [post, setPost] = useState<PostData>();
  const { id } = useParams();
  const isPostGot = useRef<boolean>(false);
  const navigate = useNavigate();

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

  const onAuthorContainerClick = () => {
    dispatch(setModal({ userModal: true, userModalData: post?.author }));
  };

  const onChangeButtonClick = () => {
    navigate(`/posts/${post?.id}/edit`);
  };

  return (
    <BasicPage containerClassName={cl.container} header={true} container={true}>
      <header className={cl.header}>
        <div className={cl.postInfoContainer}>
          <div onClick={onAuthorContainerClick} className={cl.authorContainer}>
            <div className={cl.authorImage}>
              <img src={userAvatarUrl + post?.author.id} alt="" />
            </div>
            <span>{post?.author.login}</span>
          </div>
          <h1 className={cl.title}>{post?.title}</h1>
          <span className={cl.updatedAt}>
            {DateService.getFormattedData(post?.updatedAt!)}
          </span>
        </div>
        {authorized && <Button onClick={onChangeButtonClick}>Change</Button>}
      </header>
      <div className={cl.postContentContainer}>
        <Markdown>{post?.content!}</Markdown>
      </div>
    </BasicPage>
  );
};

export default PostPage;
