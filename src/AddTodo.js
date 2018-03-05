import React from 'react';

import store from './store';

let nextTodoId = 0;
const AddTodo = ({ onAddClick }) => {
  let input;
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
        ADD TODO
      </button>
    </div>
  );
};

export default AddTodo;
