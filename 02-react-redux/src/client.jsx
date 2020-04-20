import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {hot} from 'react-hot-loader/root';

import store from './store';
import App from './App';

const Hot = hot(App);

render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector('#root')
);
