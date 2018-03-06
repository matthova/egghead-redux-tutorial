import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import { VisibilityFilters } from '../actions';

const App = ({ match: { params } }) => {
  const urlFilter = params.filter || '';

  const filter =
    Object.keys(VisibilityFilters).find(key => VisibilityFilters[key] === urlFilter) || 'SHOW_ALL';

  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={filter} />
      <Footer filter={filter} />
    </div>
  );
};

export default App;
