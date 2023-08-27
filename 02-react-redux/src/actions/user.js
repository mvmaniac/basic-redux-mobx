const logInRequest = (data) => ({
  type: 'LOG_IN_REQUEST',
  data,
});

const logInSuccess = (data) => ({
  type: 'LOG_IN_SUCCESS',
  data,
});

const logInFailure = (error) => ({
  type: 'LOG_IN_FAILURE',
  error,
});

const logIn =
  (data) =>
  // async action creator
  (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'dev',
          }),
        );
      }, 2000);
      // axios.post().then().catch()으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
const logOut = () => ({
  type: 'LOG_OUT',
});

export { logIn, logOut };
