import * as React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn, logOut } from './actions/user';
import { RootState } from './reducers';
import { UserState } from './types/user';

function App(): JSX.Element {
  const user = useSelector<RootState, UserState>((state) => state.userReducer);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: 'dev',
        password: '비밀번호'
      })
    );
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  const nickname = user.data ? (
    <div>{user.data.nickname}</div>
  ) : (
    <div>로그인 해주세요.</div>
  );

  return (
    <div>
      {user.isLoggingIn ? <div>로그인 중</div> : nickname}
      {!user.data ? (
        <button type="button" onClick={onClick}>
          로그인
        </button>
      ) : (
        <button type="button" onClick={onLogout}>
          로그아웃
        </button>
      )}
    </div>
  );
}

export default App;
