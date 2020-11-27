import * as React from 'react';
import {render} from 'react-dom';

import AppClass from './AppClass';
import AppHooks from './AppHooks';
import StoreProvider from './Context';

render(
  <StoreProvider>
    <AppHooks />,
  </StoreProvider>,
  document.querySelector('#root')
);
