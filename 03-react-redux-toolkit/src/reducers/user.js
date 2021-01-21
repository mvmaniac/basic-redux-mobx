import {createSlice} from '@reduxjs/toolkit';

import {logIn} from '../actions/user';

const initialState = {
  isLoggingIn: false,
  data: null,
  prices: Array(100)
    .fill()
    .map((value, index) => (index + 1) * 100)
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // 동기, 내부적인 코드
  reducers: {
    logout(state, action) {
      // immer가 자동 적용되어 있음
      const draft = state;
      draft.data = null;
    }
  },
  // 비동기, 외부적인 코드
  extraReducers: {
    // logIn.pending => user/logIn/pending
    [logIn.pending](state, action) {
      // pending: 대기
      // immer가 자동 적용되어 있음
      const draft = state;
      draft.isLoggingIn = true;
    },
    // logIn.fulfilled => user/logIn/fulfilled
    [logIn.fulfilled](state, action) {
      // fulfilled: 성공
      // immer가 자동 적용되어 있음
      const draft = state;
      draft.data = action.payload; // 받는 데이터는 action.payload 안에 있음
      draft.isLoggingIn = false;
    },
    // logIn.rejected => user/logIn/rejected
    [logIn.rejected](state, action) {
      console.log(action.error); // 에러 데이터는 action.error 안에 있음
      // rejected: 에러
      // immer가 자동 적용되어 있음
      const draft = state;
      draft.data = null;
      draft.isLoggingIn = false;
    }
  }
});

export default userSlice;
