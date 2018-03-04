import React, { Component } from 'react';
import { createStore } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux',
  };

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodo();

// // Reducers
// const addCounter = list => [...list, 0];

// const removeCounter = (list, index) => [...list.slice(0, index), ...list.slice(index + 1)];

// const incrementCounter = (list, index) => [
//   ...list.slice(0, index),
//   list[index] + 1,
//   ...list.slice(index + 1),
// ];

// // End reducers

// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];

//   deepFreeze(listBefore);

//   expect(addCounter(listBefore)).toEqual(listAfter);
// };

// const testRemoveCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 20];

//   deepFreeze(listBefore);

//   expect(removeCounter(listBefore, 1)).toEqual(listAfter);
// };

// const testIncrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 11, 20];

//   deepFreeze(listBefore);
//   expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
// };

// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello World</div>;
  }
}

export default App;
