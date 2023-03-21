import React from 'react';
import ReactDOM from 'react-dom/client';

import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';

import ResetStyle from '@/styles/reset';
import GlobalStyle from '@/styles/global';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />

    <BrowserRouter>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
