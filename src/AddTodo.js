import React from 'react';

const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <div>
      <input type="text" ref={ref => (input = ref)} />
      <button
        onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}
      >
        ADD TODO
      </button>
    </div>
  );
};

export default AddTodo;
