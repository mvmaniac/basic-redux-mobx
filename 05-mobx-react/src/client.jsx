import React from 'react';
import ReactDOM from 'react-dom/client';

import AppClass from './AppClass';
import AppHooks from './AppHooks';
import StoreProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <AppHooks />
    </StoreProvider>
  </React.StrictMode>,
);
