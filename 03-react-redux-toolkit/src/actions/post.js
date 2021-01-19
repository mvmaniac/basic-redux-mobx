import {createAsyncThunk} from '@reduxjs/toolkit';

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const addPost = createAsyncThunk('post/add', async () => {
  await delay(500, {
    title: '새 개시글',
    content: '내요'
  });
});

export {addPost};
export default {};
