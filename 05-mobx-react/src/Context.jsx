import React from 'react';
import {userStore, postStore} from './store';

export const storeContext = React.createContext({
  userStore,
  postStore
});

// eslint-disable-next-line react/prop-types
const StoreProvider = ({children}) => (
  <storeContext.Provider>{children}</storeContext.Provider>
);

export default StoreProvider;
