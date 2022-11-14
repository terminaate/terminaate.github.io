import React, { FC, MouseEvent, useEffect, useState } from 'react';
import cl from './PostsPage.module.scss';
import BasicPage from '@/components/BasicPage';
import { PostData } from '@/types/PostData';
import UserService from '@/services/UserService';
import Input from '@/components/UI/Input';
import { AnimatePresence, motion } from 'framer-motion';
import { userAvatarUrl } from '@/http';
import { useAppDispatch, useAppSelector } from '@/store';
import { setModal } from '@/store/reducers/modalsSlice';
import Button from '@/components/UI/Button';
import useInputState from '@/hooks/useInputState';
import { FaSearch } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { UserData } from '@/types/UserData';

const PostsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { authorized } = useAppSelector((state) => state.userSlice);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<PostData[]>([]);
  const [searchInput, onSearchInputChange] = useInputState('', (e) => {
    setSearchedPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  });
  const navigate = useNavigate();

  const getPostDate = (d: string) => {
    const date = new Date(d);
    if (!date) {
      return d;
    }
    const hours = date.getHours() < 9 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  };

  const getPostContent = (content: string) => {
    return (content.length > 40
      ? content.slice(0, content.length / 1.5)
      : content) + '...';
  };

  const getServerData = async () => {
    const { data: serverPosts } = await UserService.getAllPosts();
    setPosts(
      serverPosts.reverse().map((post) => ({
        ...post,
        content: getPostContent(post.content),
        updatedAt: getPostDate(post.updatedAt),
      })),
    );
  };

  useEffect(() => {
    getServerData();
  }, []);

  const createNewPost = () => {
    setPosts([
      {
        id: '123',
        content: '123',
        title: '123',
        author: {
          id: '123',
          login: '123',
        },
        updatedAt: 'asd',
      },
      ...posts,
    ]);
  };

  const deletePost = async (e: MouseEvent, postId: string) => {
    e.stopPropagation();
    const { data: deletedPost } = await UserService.deletePost(postId);
    setPosts(posts.filter((post) => post.id !== deletedPost.id));
  };

  const openUserModal = async (e: MouseEvent, userData: UserData) => {
    e.stopPropagation();
    dispatch(setModal({ userModal: true, userModalData: userData }));
  };

  const navigateToPostPage = (postId: string) => {
    navigate('/posts/' + postId);
  };

  return (
    <BasicPage
      header={true}
      container={true}
      containerClassName={cl.postsPageContainer}
      className={cl.postsPage}
    >
      <div className={cl.filterContainer}>
        <Input
          icon={<FaSearch />}
          value={searchInput}
          onChange={onSearchInputChange}
          className={cl.searchInput}
          placeholder={'Search'}
        />
        {authorized && (
          <Button onClick={createNewPost} className={cl.createPostButton}>
            Create post
          </Button>
        )}
      </div>
      <motion.div
        layout={'position'}
        transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.7 }}
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{ opacity: 0, x: 50 }}
        className={cl.postsContainer}
      >
        <AnimatePresence>
          {(searchInput ? searchedPosts : posts).map((post) => (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={post.id}
              className={cl.postContainer}
              onClick={() => navigateToPostPage(post.id)}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cl.postInfo}
              >
                <div
                  onClick={(e) => openUserModal(e, post.author)}
                  className={cl.authorContainer}
                >
                  <div className={cl.authorImage}>
                    <img src={userAvatarUrl + post.author.id} alt='' />
                  </div>
                  <span>{post.author.login}</span>
                </div>
                <h1 className={cl.postTitle}>{post.title}</h1>
                <span className={cl.postDesc}>{post.content}</span>
                <span className={cl.postDate}>{post.updatedAt}</span>
              </motion.div>
              {authorized && (
                <div className={cl.postButtonsContainer}>
                  <Button
                    onClick={(e) => deletePost(e, post.id)}
                    className={cl.deletePostButton}
                  >
                    Delete
                  </Button>
                  <Button className={cl.changePostButton}>Change</Button>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </BasicPage>
  );
};

export default PostsPage;
