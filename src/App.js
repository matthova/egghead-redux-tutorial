import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    const { todos, store, visibilityFilter } = this.props;

    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo
          onAddClick={(text) => {
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text,
            });
          }}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })}
        />
        <VisibilityFilter
          currentFilter={visibilityFilter}
          onFilterClick={(filter) => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter,
            });
          }}
        />
      </div>
    );
  }
}
const App = props => (
  <div>
    <TodoApp {...props} />
  </div>
);

export default App;
