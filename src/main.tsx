import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import './index.css';
import { RoutingContextProvider } from '@/contexts/RoutingContext';

const root = createRoot(document.getElementById('root')!);
root.render(
  <RoutingContextProvider>
    <App />
  </RoutingContextProvider>,
);
