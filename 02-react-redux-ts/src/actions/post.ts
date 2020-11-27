import {ADD_POST, AddPostAction} from '../types/post';

export const addPost = (data: string): AddPostAction => {
  return {
    type: ADD_POST,
    data
  };
};

export default {};
