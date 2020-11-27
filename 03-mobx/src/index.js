const {observable, autorun, reaction, action, runInAction} = require('mobx');

const state = observable({
  compA: 'A',
  compB: 10,
  compC: null
});

autorun(() => {
  console.log('autorun changed', state.compA);
});

reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log('reaction change compB');
  }
);

const change = action(() => {
  state.compA = 'action for change compA';
});

runInAction(() => {
  state.compA = 'run in action change compA';
  state.compB = 15;
  state.compC = undefined;
});

runInAction(() => {
  state.compC = 'run in action change2 compC';
});

change();
