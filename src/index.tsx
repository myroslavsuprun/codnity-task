/**
 * The starting point of the React.js application.
 *
 * Contains style resetting, font addition
 * third-party API providers etc.
 */

// **** React Core **** //

import React from 'react';
import ReactDOM from 'react-dom/client';

// **** Third-party providers **** //

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

// **** Styling **** //

import { theme } from 'utils';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// **** App **** //

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/codnity-task">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
