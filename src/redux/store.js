import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const todoApp = combineReducers(reducers);
const store = createStore(todoApp);

export default store;
