import './index.css';
import Global from './Global';
import { createRoot } from 'react-dom/client';
import React from 'react';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Global />
  </React.StrictMode>
);

