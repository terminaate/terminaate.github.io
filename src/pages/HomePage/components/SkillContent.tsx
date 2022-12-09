import { SkillContentProps } from '@/pages/HomePage/data';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cl from '@/pages/HomePage/HomePage.module.scss';
import AnimatedSymbolsText from '@/components/AnimatedSymbolsText';
import { FiArrowRight } from 'react-icons/all';
import { AnimatePresence, motion } from 'framer-motion';

interface ISkillContent extends SkillContentProps {
  currentSkill: string;
  setCurrentSkill: React.Dispatch<React.SetStateAction<string>>;
}

const SkillContent: FC<ISkillContent> = ({
  title,
  icon,
  currentSkill,
  setCurrentSkill,
}) => {
  const { t } = useTranslation('home');

  return (
    <li onClick={() => setCurrentSkill(title)} className={cl.skillContent}>
      <div className={cl.skillContentContainer}>
        {icon && <>{icon}</>}
        <AnimatedSymbolsText
          animateOnVisible={true}
          text={title}
          className={cl.skillContentText}
          infinite={title === currentSkill}
          {...(title === currentSkill
            ? { delayAnim: 100, delay: 100, clearDelay: 100 }
            : {})}
        />
        <FiArrowRight
          data-active={title === currentSkill}
          className={cl.rightIcon}
        />
      </div>
      <AnimatePresence>
        {title === currentSkill && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={cl.skillContentDesc}
          >
            {t(`${title.toLowerCase().replaceAll(' ', '-')}_text`)}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default SkillContent;
