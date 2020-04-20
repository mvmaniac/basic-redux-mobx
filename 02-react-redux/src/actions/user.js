const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  };
};

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data
  };
};

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error
  };
};

const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'dev'
          })
        );
      }, 2000);
      // axios.post().then().catch()으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT'
  };
};

export {logIn, logOut};
