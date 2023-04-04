const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: 'a',
  compB: 10,
  compC: null
};

// store
const store = createStore(reducer, initialState);
store.subscribe(() => console.log(store.getState()));

// action
const changeComp = (type, data) => ({ type, data });

store.dispatch(changeComp('CHANGE_COMP_A', 'b'));
store.dispatch(changeComp('CHANGE_COMP_B', 11));
store.dispatch({ type: 'CHANGE_COMP_C', data: undefined });
