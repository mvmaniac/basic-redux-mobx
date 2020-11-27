import produce from 'immer';
import {ADD_POST, AddPostAction} from '../types/post';

const initialState: string[] = [];

const postReducer = (
  prevState = initialState,
  action: AddPostAction
): string[] => {
  return produce(prevState, (draftStatus) => {
    switch (action.type) {
      case ADD_POST: {
        const draft = draftStatus;
        draft.push(action.data);

        break;
      }

      default:
    }
  });
};

export default postReducer;
