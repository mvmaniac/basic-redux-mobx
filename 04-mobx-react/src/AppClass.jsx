import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import {userStore, postStore} from './store';

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
    userStore.logIn({
      name: 'dev',
      password: '1234'
    });
  };

  onLogout = () => {
    userStore.logOut();
  };

  onChangeName = (e) => {
    this.state.name = e.target.value;
  };

  onChangePassword = (e) => {
    this.state.password = e.target.value;
  };

  render() {
    const {name, password} = this.state;
    const nickname = userStore.data ? (
      <div>{userStore.data.name}</div>
    ) : (
      <div>로그인 해주세요.</div>
    );

    return (
      <div>
        {userStore.isLoggingIn ? <div>로그인 중</div> : nickname}

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
