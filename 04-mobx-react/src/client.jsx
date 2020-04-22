import React from 'react';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader/root';

import AppClass from './AppClass';

const Hot = hot(AppClass);

render(<Hot />, document.querySelector('#root'));
