import React, { FC, MouseEvent, useEffect, useState } from 'react';
import cl from './PostsPage.module.scss';
import BasicPage from '@/components/BasicPage';
import { PostData } from '@/types/PostData';
import { UserData } from '@/types/UserData';
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

const PostsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { authorized } = useAppSelector(state => state.userSlice);
  const [posts, setPosts] = useState<PostData[]>([]);
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<PostData[]>([]);
  const [searchInput, onSearchInputChange] = useInputState('', (e) => {
    setSearchedPosts(posts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase())));
  });
  const navigate = useNavigate();

  const getServerData = async () => {
    const { data: serverUsers } = await UserService.getAllUsers();
    const { data: serverPosts } = await UserService.getAllPosts();
    setPosts(serverPosts.reverse().map(post => ({
      ...post,
      content: post.content.length > 40 ? post.content.slice(0, post.content.length / 1.5) + '...' : post.content,
    })));
    setUsers(serverUsers);
  };

  useEffect(() => {
    getServerData();
  }, []);

  const createNewPost = () => {
    setPosts([{
      id: '123',
      content: '123',
      title: '123',
      author: '123',
    }, ...posts]);
  };

  const deletePost = async (e: MouseEvent, postId: string) => {
    e.stopPropagation();
    const { data: deletedPost } = await UserService.deletePost(postId);
    setPosts(posts.filter(post => post.id !== deletedPost.id));
  };

  const getPostAuthorName = (userId: string) => {
    return users.find(u => u.id === userId)?.login;
  };

  const openUserModal = (e: MouseEvent, userId: string) => {
    e.stopPropagation();
    const user = users.find(u => u.id === userId)!;
    dispatch(setModal({ userModal: true, userModalData: user }));
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
        <Input icon={<FaSearch />} value={searchInput} onChange={onSearchInputChange} className={cl.searchInput}
               placeholder={'Search'} />
        {authorized && (
          <Button onClick={createNewPost} className={cl.createPostButton}>Create post</Button>
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
          {(searchInput ? searchedPosts : posts).map(post => (
            <motion.div
              layout
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={post.id}
              className={cl.postContainer}
              onClick={() => navigateToPostPage(post.id)}
            >
              <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
                          className={cl.postInfo}>
                <div onClick={(e) => openUserModal(e, post.author)} className={cl.authorContainer}>
                  <div className={cl.authorImage}>
                    <img src={userAvatarUrl + post.author} alt='' />
                  </div>
                  <span>{getPostAuthorName(post.author)}</span>
                </div>
                <h1 className={cl.postTitle}>{post.title}</h1>
                <span className={cl.postDesc}>{post.content}</span>
              </motion.div>
              {authorized && (
                <div className={cl.postButtonsContainer}>
                  <Button onClick={(e) => deletePost(e, post.id)}
                          className={cl.deletePostButton}>Delete</Button>
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
