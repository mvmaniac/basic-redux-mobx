export interface User {
  nickname: string;
  password: string;
}

export interface UserStore {
  isLoggingIn: boolean;
  data: User | null;
  logIn: (data: User) => void;
  logOut: () => void;
}

export interface PostStore {
  data: string[];
  addPost: (data: string) => void;
}
