import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.css';
import { RoutingContextProvider } from '@/contexts/RoutingContext';
import { CursorContextProvider } from '@/contexts/CursorContext';

document.body.setAttribute('data-dev', import.meta.env.DEV + '');

const root = createRoot(document.getElementById('root')!);
root.render(
  <CursorContextProvider>
    <RoutingContextProvider>
      <App />
    </RoutingContextProvider>
  </CursorContextProvider>,
);
