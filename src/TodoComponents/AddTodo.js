import React, { Component } from 'react';
import PropTypes from 'prop-types';

let nextTodoId = 0;
class AddTodo extends Component {
  render() {
    let input;
    const { store } = this.context;

    return (
      <div>
        <input type="text" ref={ref => (input = ref)} />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text: input.value,
            });

            input.value = '';
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}
AddTodo.contextTypes = {
  store: PropTypes.object,
};

export default AddTodo;
