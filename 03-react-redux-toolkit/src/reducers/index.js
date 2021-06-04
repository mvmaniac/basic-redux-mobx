import {combineReducers} from '@reduxjs/toolkit';
import {enableES5} from 'immer';

import userSlice from './user';
import postSlice from './post';

if (process.env.NODE_ENV === 'production') {
  enableES5();
}

export default combineReducers({
  userReducer: userSlice.reducer,
  postReducer: postSlice.reducer
});
