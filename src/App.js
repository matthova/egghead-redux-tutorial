import React, { Component } from 'react';

import Todo from './Todo';
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
    const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);
    return (
      <div>
        <input type="text" ref={ref => (this.input = ref)} />
        <button
          onClick={() => {
            this.props.store.dispatch({
              type: 'ADD_TODO',
              text: this.input.value,
              id: nextTodoId++,
            });
            this.input.value = '';
          }}
        >
          ADD TODO
        </button>
        <ul>
          {visibleTodos.map(todo => (
            <Todo
              onClick={() => this.props.store.dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
              completed={todo.completed}
              text={todo.text}
              key={todo.id}
            />
          ))}
        </ul>
        <VisibilityFilter currentFilter={this.props.visibilityFilter} store={this.props.store} />
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
