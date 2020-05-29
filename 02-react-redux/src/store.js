import {createStore, compose, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers';

const initialState = {
  userReducer: {
    isLoggingIn: false,
    data: null
  },
  postReducer: []
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState); // 비동기
  }
  return next(action); // 동기
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
