import * as React from 'react';
import { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { userStore, postStore } from './store';

interface State {
  name: string;
  password: string;
}

@observer
class AppClass extends Component<Record<string, unknown>, State> {
  constructor(props = {}) {
    super(props);
    this.state = observable({
      name: '',
      password: ''
    });
  }

  onLogin = (): void => {
    userStore.logIn({
      nickname: 'dev',
      password: '1234'
    });
  };

  onLogout = (): void => {
    userStore.logOut();
  };

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // TODO: 타입에러 해결
    // this.state.name = event.target.value;
  };

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // TODO: 타입에러 해결
    // this.state.password = event.target.value;
  };

  render(): JSX.Element {
    const { name, password } = this.state;
    const nickname = userStore.data ? (
      <div>{userStore.data.nickname}</div>
    ) : (
      <div>로그인 해주세요.</div>
    );

    return (
      <div>
        {userStore.isLoggingIn ? <div>로그인 중 - Class</div> : nickname}

        {!userStore.data ? (
          <button type="button" onClick={this.onLogin}>
            로그인
          </button>
        ) : (
          <button type="button" onClick={this.onLogout}>
            로그아웃
          </button>
        )}

        <div>{postStore.data.length}</div>

        <input type="text" value={name} onChange={this.onChangeName} />
        <input
          type="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    );
  }
}

export default AppClass;
