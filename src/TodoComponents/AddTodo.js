import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input type="text" ref={ref => (input = ref)} />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
