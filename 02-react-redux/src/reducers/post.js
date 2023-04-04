import produce from 'immer';

const initialState = [];

// eslint-disable-next-line default-param-last
const postReducer = (prevState = initialState, action) =>
  produce(prevState, (draftStatus) => {
    switch (action.type) {
      case 'ADD_POST': {
        const draft = draftStatus;
        draft.push(action.data);

        break;
      }

      default:
    }
  });

export default postReducer;
