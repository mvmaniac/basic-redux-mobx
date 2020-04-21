const {observable, autorun, runInAction} = require('mobx');

const state = observable({
  compA: 'a',
  compB: 10,
  compC: null
});

autorun(() => {
  console.log('changed');
});

runInAction(() => {
  state.compA = 'C';
  state.compB = 15;
  state.compC = undefined;
});

runInAction(() => {
  state.compB = 20;
});
