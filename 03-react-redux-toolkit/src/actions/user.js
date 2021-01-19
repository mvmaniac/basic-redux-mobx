import {createAsyncThunk} from '@reduxjs/toolkit';

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data);

  // throw new Error('비밀번호가 틀렸습니다.');

  // axios 같은 비동기 요청 처리
  // 여기서는 try ~ catch를 안 잡아도 됨...
  const result = await delay(500, {
    userId: 1,
    nickname: 'dev'
  });

  return result;
});

export {logIn};
export default {};
