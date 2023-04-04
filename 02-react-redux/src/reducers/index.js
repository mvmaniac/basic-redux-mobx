import { combineReducers } from 'redux';
import { enableES5 } from 'immer';

import userReducer from './user';
import postReducer from './post';

if (process.env.NODE_ENV === 'production') {
  enableES5();
}

export default combineReducers({
  userReducer,
  postReducer
});
