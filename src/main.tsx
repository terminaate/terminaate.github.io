import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import NavigateSetter from '@/components/NavigateSetter';
import { Provider } from 'react-redux';
import store from '@/store';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <NavigateSetter />
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);
