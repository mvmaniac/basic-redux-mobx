import {
  createStore,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  compose,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { RootState } from './reducers';

const initialState: RootState = {
  userReducer: {
    isLoggingIn: false,
    data: null,
  },
  postReducer: [],
};

const firstMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    console.log('로깅', action);
    next(action);
  };

const thunkMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    if (action.thunk !== undefined) {
      return action.thunk(store.dispatch, store.getState); // 비동기
    }
    return next(action); // 동기
  };

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
