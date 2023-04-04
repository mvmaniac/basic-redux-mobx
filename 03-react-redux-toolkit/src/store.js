import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';

// 아래 코드를 사용하면
// 각 reducer의 initialState 값을 덮어씀
// const initialState = {
//   userReducer: {
//     isLoggingIn: false,
//     data: null
//   },
//   postReducer: []
// };

const firstMiddleware = (store) => (next) => (action) => {
  console.log('로깅', action);
  next(action);
};

const store = configureStore({
  reducer,
  // preloadedState: initialState, // 초기 state 설정, 주로 서버 사이드 렌더링 시 사용 됨
  middleware: [firstMiddleware, ...getDefaultMiddleware()], // 커스텀 추가 후 기본 미들웨어 추가
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
