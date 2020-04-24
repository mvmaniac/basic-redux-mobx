import React from 'react';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader/root';

import AppClass from './AppClass';
import AppHooks from './AppHooks';
import StoreProvider from './Context';

const Hot = hot(AppHooks);

render(
  // <StoreProvider>
  <Hot />,
  // </StoreProvider>,
  document.querySelector('#root')
);
