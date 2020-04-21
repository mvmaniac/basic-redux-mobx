import produce from 'immer';

const initialState = [];

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draftStatus) => {
    switch (action.type) {
      case 'ADD_POST': {
        const draft = draftStatus;
        draft.push(action.data);

        break;
      }

      default:
    }
  });
};

export default postReducer;
