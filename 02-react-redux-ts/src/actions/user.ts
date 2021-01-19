import {
  LogInFailureAction,
  LogInRequest,
  LogInRequestAction,
  LogInSuccess,
  LogInSuccessAction,
  LogOutAction,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT
} from '../types/user';
import {addPost} from './post';

const logInRequest = (data: LogInRequest): LogInRequestAction => ({
  type: LOG_IN_REQUEST,
  data
});

const logInSuccess = (data: LogInSuccess): LogInSuccessAction => ({
  type: LOG_IN_SUCCESS,
  data
});

const logInFailure = (error: Error): LogInFailureAction => ({
  type: LOG_IN_FAILURE,
  error
});

export const logIn = (data: LogInRequest): ThunkAction =>
  // async action creator
  (dispatch) => {
    // async action
    dispatch(logInRequest(data));
    try {
      // axios.post().then().catch()으로 나중에 대체
      window.setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'dev'
          })
        );
      }, 2000);

      dispatch(addPost(''));
    } catch (error) {
      dispatch(logInFailure(error));
    }
  };

export const logOut = (): LogOutAction => ({
  type: LOG_OUT
});
