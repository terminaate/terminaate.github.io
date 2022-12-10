import React, { useState } from 'react';
import PageContainer from '@/components/PageContainer';
import cl from './WorksPage.module.scss';
import { WorkData } from '@/types/WorkData';
import { useTranslation } from 'react-i18next';

const works: WorkData[] = [
  {
    type: '',
    title: '',
    description: '',
    githubLink: '',
    link: '',
    image: '',
    tags: ['123'],
  },
];

const WorksPage = () => {
  const { t } = useTranslation('works');

  return (
    <PageContainer title={`//${t('title')}`} className={cl.worksPage}>
      <div className={cl.container}>
        {works.map((work, key) => (
          <div className={cl.workContainer} key={key}>
            Work
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default WorksPage;
