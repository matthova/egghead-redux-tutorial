import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';

import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function render() {
  ReactDOM.render(
    <App {...store.getState()} dispatch={dispatch} />,
    document.getElementById('root'),
  );
}

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
