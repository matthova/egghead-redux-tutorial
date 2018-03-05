import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './styles/index.css';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: PropTypes.object,
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
