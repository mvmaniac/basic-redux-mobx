import * as React from 'react';
import {createContext} from 'react';
import {userStore, postStore} from './store';

export const storeContext = createContext({
  userStore,
  postStore
});

// eslint-disable-next-line react/prop-types
const StoreProvider: React.FC = ({children}) => (
  <storeContext.Provider value={{userStore, postStore}}>
    {children}
  </storeContext.Provider>
);

export default StoreProvider;
