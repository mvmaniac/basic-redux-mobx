const { observable } = require('mobx');

const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  }
});

const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      postStore.data.push(1);
    }, 2000);
  },
  logOut() {
    this.data = null;
  }
});

export { userStore, postStore };
