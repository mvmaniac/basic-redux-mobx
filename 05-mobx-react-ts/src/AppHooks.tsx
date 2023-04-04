import * as React from 'react';
import { useCallback } from 'react';
import { action } from 'mobx';
import { useObserver, useLocalStore } from 'mobx-react';

import { userStore, postStore } from './store';

interface LocalStore {
  name: string;
  password: string;
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppHooks = (): JSX.Element => {
  const state = useLocalStore<LocalStore>(() => ({
    name: '',
    password: '',
    // action으로 함수를 감쌀 때 화살표 함수 아닌 그냥 함수로 해도 됨
    onChangeName: action(
      // eslint-disable-next-line prefer-arrow-callback
      function (
        this: LocalStore,
        event: React.ChangeEvent<HTMLInputElement>
      ): void {
        state.name = event.target.value;
      }
    ),
    onChangePassword: action(
      // eslint-disable-next-line prefer-arrow-callback
      function (this: LocalStore, event: React.ChangeEvent<HTMLInputElement>) {
        state.password = event.target.value;
      }
    )
  }));

  const onLogin = useCallback(() => {
    userStore.logIn({
      nickname: state.name,
      password: state.password
    });
  }, [state.name, state.password]);

  const onLogout = useCallback(() => {
    userStore.logOut();
  }, []);

  const nickname = userStore.data ? (
    <div>{`${userStore.data.nickname} / ${userStore.data.password}`}</div>
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
