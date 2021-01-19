import React from 'react';
import {storeContext} from './Context';

function useUserStore() {
  const {userStore} = React.useContext(storeContext);
  return userStore;
}

export default useUserStore;
