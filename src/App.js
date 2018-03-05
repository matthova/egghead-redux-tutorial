import React from 'react';

import './styles/App.css';
import AddTodo from './TodoComponents/AddTodo';
import VisibleTodoList from './TodoComponents/VisibleTodoList';
import VisibilityFilter from './TodoComponents/VisibilityFilter';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <VisibilityFilter />
  </div>
);

export default App;
