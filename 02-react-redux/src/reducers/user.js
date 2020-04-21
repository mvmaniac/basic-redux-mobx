import produce from 'immer';

const initialState = {
  isLoggingIn: false,
  data: null
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draftState) => {
    switch (action.type) {
      case 'LOG_IN_REQUEST': {
        const draft = draftState;
        draft.data = null;
        draft.isLoggingIn = true;

        break;
      }

      case 'LOG_IN_SUCCESS': {
        const draft = draftState;
        draft.data = action.data;
        draft.isLoggingIn = false;

        break;
      }

      case 'LOG_IN_FAILURE': {
        const draft = draftState;
        draft.data = null;
        draft.isLoggingIn = false;

        break;
      }

      case 'LOG_OUT': {
        const draft = draftState;
        draft.data = null;

        break;
      }

      default:
    }
  });
};

export default userReducer;
