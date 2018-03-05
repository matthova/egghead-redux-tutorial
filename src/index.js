import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './styles/index.css';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
