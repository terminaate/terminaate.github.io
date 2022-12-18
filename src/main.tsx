import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.scss';
import ContextsProviders from '@/components/ContextsProviders';

document.body.setAttribute('data-cursor', import.meta.env.DEV + '');

const root = createRoot(document.getElementById('root')!);
root.render(
  <ContextsProviders>
    <App />
  </ContextsProviders>,
);
