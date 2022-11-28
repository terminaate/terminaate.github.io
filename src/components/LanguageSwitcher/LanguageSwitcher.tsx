import React from 'react';
import cl from './LanguageSwitcher.module.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const tabs = ['ru', 'en'];

const LanguageSwitcher = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <div className={cl.container}>
      {tabs.map((item, i) => (
        <motion.button
          layout
          key={i}
          onClick={() => changeLanguage(`${item}-${item.toUpperCase()}`)}
          className={cl.languageButton}
        >
          <span>{item.toUpperCase()}</span>
          {language.toLowerCase().includes(item) && (
            <motion.div className={cl.underline} layoutId="underline" />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
