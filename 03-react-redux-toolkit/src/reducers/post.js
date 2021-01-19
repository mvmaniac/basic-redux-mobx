import {createSlice} from '@reduxjs/toolkit';

import {addPost} from '../actions/post';

const initialState = {
  data: []
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  // 동기, 내부적인 코드
  reducers: {},
  // 비동기, 외부적인 코드
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {
        // immer의 불변성이 깨지는 경우 변경된 state를 return 해주면 됨...
        // state = 123;
        // return state;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        const draft = state.data;
        draft.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})

      // 공통 처리
      // pending 포함된 action type 인 경우 state의 isLoading 값을 true로 함
      .addMatcher(
        (action) => action.type.inclue('/pending'),
        (state) => {
          const draft = state;
          draft.isLoading = true;
        }
      )

      .addDefaultCase((state, action) => {
        // switch문의 default 같은 역할
      })
});

export default postSlice;
