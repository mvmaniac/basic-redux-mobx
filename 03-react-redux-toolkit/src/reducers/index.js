import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './user';
import postSlice from './post';

export default combineReducers({
  userReducer: userSlice.reducer,
  postReducer: postSlice.reducer,
});
