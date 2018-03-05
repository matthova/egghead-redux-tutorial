import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';

import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const todoApp = combineReducers(reducers);
const store = createStore(todoApp, persistedState);
store.subscribe(throttle(() => {
  const { todos } = store.getState();
  saveState({ todos });
}, 1000));

export default store;
