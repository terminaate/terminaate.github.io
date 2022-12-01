import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.css';
import { Provider } from 'react-redux';
import store from '@/store';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './locales/ru';
import en from './locales/en';
import { MemoryRouter } from 'react-router-dom';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['navigator', 'localStorage'],
      lookupLocalStorage: 'lang',
    },
    resources: {
      ru,
      en,
    },
    fallbackLng: 'en',
    debug: import.meta.env.MODE === 'development',

    react: {
      transSupportBasicHtmlNodes: true,
    },

    interpolation: {
      escapeValue: false,
    },
  });

createRoot(document.getElementById('root')!).render(
  <MemoryRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </MemoryRouter>,
);
