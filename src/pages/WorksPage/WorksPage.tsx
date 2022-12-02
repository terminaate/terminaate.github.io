import React, { useCallback, useLayoutEffect, useState } from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './WorksPage.module.scss';
import { BsPlusSquare } from 'react-icons/all';
import { useAppSelector } from '@/store';
import { WorkData } from '@/types/WorkData';
import UserService from '@/services/UserService';

const WorksPage = () => {
  const { authorized } = useAppSelector((state) => state.userSlice);
  const [works, setWorks] = useState<WorkData[]>([]);
  const [currentWork, setCurrentWork] = useState<WorkData | null>(null);

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
