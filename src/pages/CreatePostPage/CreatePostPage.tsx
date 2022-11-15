import React, { ChangeEvent, ReactElement, useState } from 'react';
import BasicPage from '@/components/BasicPage';
import cl from './CreatePostPage.module.scss';
import Input from '@/components/UI/Input';
import { AiFillFile, BsCode, MdArticle } from 'react-icons/all';
import useInputState from '@/hooks/useInputState';
import Button from '@/components/UI/Button';
import { useAppDispatch } from '@/store';
import { setNotificationText } from '@/store/reducers/notificationSlice';
import UserService from '@/services/UserService';
import { useNavigate } from 'react-router-dom';
import TextArea from '@/components/UI/TextArea';
import { motion } from 'framer-motion';
import Markdown from '@/components/Markdown';

type TabProps = {
  key: number;
  title: string;
  icon: ReactElement;
  content: (...props: any) => ReactElement;
}
const tabs: TabProps[] = [
  {
    key: 0,
    title: 'Code',
    icon: <BsCode />,
    content: (content: string, onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void) => (
      <TextArea
        className={cl.textArea} rows={19} cols={30}
        value={content} onChange={onContentChange}
        placeholder={'Content there...'}
        inputMode={'none'}
      />
    ),
  },
  {
    key: 1,
    title: 'Preview',
    icon: <AiFillFile />,
    content: (content) => (
      <div className={cl.previewContainer}>
        <Markdown>{content}</Markdown>
      </div>
    ),
  },
];

const CreatePostPage = () => {
  const [currentTab, setCurrentTab] = useState<TabProps['key']>(0);
  const [title, onTitleChange] = useInputState('');
  const [content, onContentChange] = useInputState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCreateButtonClick = async () => {
    if (!title) {
      return dispatch(setNotificationText('Input title!'));
    } else if (title.length < 3) {
      return dispatch(setNotificationText('Min title length is 3!'));
    } else if (title.length > 32) {
      return dispatch(setNotificationText('Max title length is 32!'));
    }

    const newPost = await UserService.createPost({ title, content });
    if (newPost.status === 201) {
      return navigate('/posts');
    }
  };

  return (
    <BasicPage containerClassName={cl.container} header={true} container={true}>
      <h1 className={cl.title}>
        <MdArticle />
        <span>Create post</span>
      </h1>
      <Input placeholder={'Title'} value={title} onChange={onTitleChange} />
      <div className={cl.textAreaContainer}>
        <div className={cl.tabs}>
          {tabs.map((tab, k) => (
            <div onClick={() => setCurrentTab(tab.key)} className={cl.tabContainer} key={k}
                 data-active={tab.key === currentTab}>
              <div className={cl.tabContent}>
                {tab.icon}
                <h3 className={cl.tabTitle}>{tab.title}</h3>
              </div>
              {tab.key === currentTab && (
                <motion.div className={cl.underline} layoutId='underline' />
              )}
            </div>
          ))}
        </div>
        {tabs.find(e => e.key === currentTab)!.content(content, onContentChange)}
      </div>
      <div className={cl.buttonsContainer}>
        <Button onClick={onCreateButtonClick}>Create</Button>
      </div>
    </BasicPage>
  );
};

export default CreatePostPage;