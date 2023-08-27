import { ADD_POST, AddPostAction } from '../types/post';

export const addPost = (data: string): AddPostAction => ({
  type: ADD_POST,
  data,
});

export default {};
