import React, { useCallback, useLayoutEffect, useState } from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './WorksPage.module.scss';
import { BsPlusSquare } from 'react-icons/all';
import { useAppSelector } from '@/store';
import { WorkData } from '@/types/WorkData';
import UserService from '@/services/UserService';
import Title from '@/components/Title';
import { useTranslation } from 'react-i18next';

const WorksPage = () => {
  const { authorized } = useAppSelector((state) => state.userSlice);
  const [works, setWorks] = useState<WorkData[]>([]);
  const [currentWork, setCurrentWork] = useState<WorkData | null>(null);
  const { t } = useTranslation('works');

  const getServerWorks = useCallback(async () => {
    const { data } = await UserService.getAllWorks();
    setWorks(data);
  }, []);

  useLayoutEffect(() => {
    getServerWorks();
  }, []);

  const onWorkClick = (work: WorkData) => {
    setCurrentWork(work);
  };

  return (
    <PageContainer className={cl.worksPage}>
      <Title container>//{t('title')}</Title>
      <ul className={cl.worksList}>
        {works.map((work, key) => (
          <li key={key} className={cl.workItem}>{work.title}</li>
        ))}
      </ul>
      <div className={cl.container}></div>
      {authorized && (
        <button className={cl.createWorkButton}>
          <BsPlusSquare />
        </button>
      )}
    </PageContainer>
  );
};

export default WorksPage;
