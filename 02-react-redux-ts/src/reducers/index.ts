import {combineReducers} from 'redux';
import {enableES5} from 'immer';

import userReducer from './user';
import postReducer from './post';

if (process.env.NODE_ENV === 'production') {
  enableES5();
}

const reducer = combineReducers({
  userReducer,
  postReducer
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
