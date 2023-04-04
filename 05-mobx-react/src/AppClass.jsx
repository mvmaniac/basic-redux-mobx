import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { userStore, postStore } from './store';

@observer
class AppClass extends Component {
  constructor() {
    super();
    this.state = observable({
      name: '',
      password: ''
    });
  }

  onLogin = () => {
    const { name, password } = this.state;
    userStore.logIn({
      name,
      password
    });
  };

  // eslint-disable-next-line class-methods-use-this
  onLogout = () => {
    userStore.logOut();
  };

  onChangeName = (event) => {
    this.state.name = event.target.value;
  };

  onChangePassword = (event) => {
    this.state.password = event.target.value;
  };

  render() {
    const { name, password } = this.state;
    const nickname = userStore.data ? (
      <div>{`${userStore.data.nickname} / ${userStore.data.password}`}</div>
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
