import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilter from './VisibilityFilter';
import store from './store';

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
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { todos, visibilityFilter } = store.getState();

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
        <VisibilityFilter />
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
