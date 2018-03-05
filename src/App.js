import React, { Component } from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import VisibilityFilter from './VisibilityFilter';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <VisibilityFilter />
  </div>
);

export default App;
