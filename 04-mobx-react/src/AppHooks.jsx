import React, {useCallback} from 'react';
import {useObserver, useLocalStore} from 'mobx-react';

import {userStore, postStore} from './store';

const AppHooks = () => {
  const state = useLocalStore(() => ({
    name: '',
    password: '',
    onChangeName(event) {
      this.name = event.target.value;
    },
    onChangePassword(event) {
      this.password = event.target.value;
    }
  }));

  const onLogin = useCallback(() => {
    userStore.logIn({
      name: state.name,
      password: state.password
    });
  }, [state.name, state.password]);

  const onLogout = useCallback(() => {
    userStore.logOut();
  }, []);

  const nickname = userStore.data ? (
    <div>{`${userStore.data.name} / ${userStore.data.password}`}</div>
  ) : (
    <div>로그인 해주세요.</div>
  );

  return useObserver(() => (
    <div>
      {userStore.isLoggingIn ? <div>로그인 중 - Hooks</div> : nickname}

      {!userStore.data ? (
        <button type="button" onClick={onLogin}>
          로그인
        </button>
      ) : (
        <button type="button" onClick={onLogout}>
          로그아웃
        </button>
      )}

      <div>{postStore.data.length}</div>

      <input type="text" value={state.name} onChange={state.onChangeName} />
      <input
        type="password"
        value={state.password}
        onChange={state.onChangePassword}
      />
    </div>
  ));
};

export default AppHooks;
