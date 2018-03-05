import React, { Component } from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input type="text" ref={ref => (input = ref)} />
      <button
        onClick={() => {
          dispatch({
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
};

export default connect()(AddTodo);
