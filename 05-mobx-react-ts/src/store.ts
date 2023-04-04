import { observable, action } from 'mobx';
import { UserStore, User, PostStore } from './types/types';

const postStore = observable<PostStore>({
  data: [],
  addPost: action((data: string) => {
    postStore.data.push(data);
  })
});

const userStore = observable<UserStore>({
  isLoggingIn: false,
  data: null,
  logIn: action((data: User) => {
    userStore.isLoggingIn = true;
    setTimeout(() => {
      userStore.data = data;
      userStore.isLoggingIn = false;
      postStore.addPost('hello');
    }, 2000);
  }),
  logOut: action(() => {
    userStore.data = null;
  })
});

export { userStore, postStore };
