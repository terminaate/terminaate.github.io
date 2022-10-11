import React, { FC, useEffect, useState } from 'react';
import GithubService, {
  GithubRepoProps,
  GithubUserProps,
} from '@/services/GithubService';
import cl from './GithubModal.module.scss';
import AnimatedSymbolsText from '../AnimatedSymbolsText';
import MovableModal, { MovableModalStatement } from '../MovableModal';
import htmlImg from '!/logos/html.svg';
import cssImg from '!/logos/css.svg';
import javascriptImg from '!/logos/javascript.svg';
import typescriptImg from '!/logos/typescript.svg';
import pythonImg from '!/logos/python.svg';
import { AxiosResponse } from 'axios';
import classNames from 'classnames';
import {
  AiOutlineLink,
  IoLocationSharp,
  FaUsers,
  AiOutlineClockCircle,
} from 'react-icons/all';

interface IGithubModal {
  modal: MovableModalStatement;
  setModal: React.Dispatch<React.SetStateAction<MovableModalStatement>>;
}

const GithubModal: FC<IGithubModal> = ({ modal, setModal }) => {
  const [user, setUser] = useState<GithubUserProps>({} as GithubUserProps);
  const [repos, setRepos] = useState<GithubRepoProps[]>([]);

  const setAsyncState = (
    setState: React.Dispatch<React.SetStateAction<any>>,
    promise: Promise<AxiosResponse>,
  ) => {
    promise.then((r: AxiosResponse) =>
      r.status === 200 ? setState(r.data) : '',
    );
  };

  const getLanguageIcon = (lang: string) => {
    const langs: { [key: string]: string } = {
      JavaScript: javascriptImg,
      Python: pythonImg,
      HTML: htmlImg,
      CSS: cssImg,
      TypeScript: typescriptImg,
    };
    return langs[lang];
  };

  useEffect(() => {
    setAsyncState(setUser, GithubService.getMe());
    setAsyncState(setRepos, GithubService.getMyRepos());
  }, []);

  const getDateAndMonthName = (date: Date) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${date.getDate()} ${months[date.getMonth()]}`;
  };

  return (
    <>
      {Object.values(user).length > 0 && (
        <MovableModal
          minWidth={'800px'}
          className={cl.githubModal}
          width={'50%'}
          title={'❤️My github️'}
          height={'60%'}
          modal={modal}
          setModal={setModal}
        >
          <div className={cl.userInfo}>
            <div
              className={cl.userAvatar}
              style={{ backgroundImage: `url(${user.avatar_url})` }}
            />
            <span className={cl.userName}>{user.name}</span>
            <AnimatedSymbolsText
              onClick={() => open('//github.com/terminaate')}
              infinite={true}
              className={cl.userNickname}
              text={'T$rm1naate'}
            />
            <span className={cl.userBio}>{user.bio}</span>
            <div className={cl.userFollowers}>
              <FaUsers />
              <span>
                {user.followers} <span>followers</span>
              </span>
            </div>
            <div className={classNames(cl.userFollowers, cl.userLocation)}>
              <IoLocationSharp />
              <span>{user.location}</span>
            </div>
            <div className={classNames(cl.userFollowers, cl.userLocation)}>
              <AiOutlineLink />
              <span>{user.blog}</span>
            </div>
          </div>
          <div className={cl.userRepos}>
            {repos.map((repo, index) => (
              <div className={cl.repoContainer} key={index}>
                <div className={cl.repoHeader}>
                  <div
                    className={cl.repoName}
                    onClick={() => open(repo.svn_url, '_blank')}
                  >
                    <img src={repo.owner.avatar_url} alt="" />
                    <span>{repo.full_name}</span>
                  </div>
                  <img
                    className={cl.repoLanguage}
                    src={getLanguageIcon(repo.language)}
                    alt=""
                  />
                </div>
                <div className={cl.repoDesc}>{repo.description}</div>
                <div className={cl.repoLastCommit}>
                  <AiOutlineClockCircle />
                  <span>{getDateAndMonthName(new Date(repo.updated_at))}</span>
                </div>
              </div>
            ))}
          </div>
        </MovableModal>
      )}
    </>
  );
};

export default GithubModal;
