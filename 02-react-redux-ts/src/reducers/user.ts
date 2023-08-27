import { produce } from 'immer';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
  UserReducerAction,
  UserState,
} from '../types/user';

const initialState: UserState = {
  isLoggingIn: false,
  data: null,
};

const userReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  prevState = initialState,
  action: UserReducerAction,
): UserState =>
  produce(prevState, (draftState) => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        const draft = draftState;
        draft.data = null;
        draft.isLoggingIn = true;

        break;
      }

      case LOG_IN_SUCCESS: {
        const draft = draftState;
        draft.data = action.data;
        draft.isLoggingIn = false;

        break;
      }

      case LOG_IN_FAILURE: {
        const draft = draftState;
        draft.data = null;
        draft.isLoggingIn = false;

        break;
      }

      case LOG_OUT: {
        const draft = draftState;
        draft.data = null;

        break;
      }

      default:
    }
  });

export default userReducer;
