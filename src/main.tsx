import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
);
