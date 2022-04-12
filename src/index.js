import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Eliftech_TT_calculator/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
