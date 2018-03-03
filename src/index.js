import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';

import Filters from './Filters';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './Constants';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function render() {
  ReactDOM.render(
    <App {...store.getState()} dispatch={dispatch} />,
    document.getElementById('root'),
  );
}

/*
 * Reducers
 */

const visibilityFilter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
    default:
      return state;
  }
};

const todoApp = Redux.combineReducers({
  visibilityFilter,
  todos,
});

const store = Redux.createStore(todoApp);
store.subscribe(render);

const dispatch = (action) => {
  console.log('----------------');
  console.log('dispatching action:');
  console.log(action);
  store.dispatch(action);
};

render();
registerServiceWorker();
