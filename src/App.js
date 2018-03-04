import React, { Component } from 'react';

const FilterLink = ({
  filter, currentFilter, children, ...props
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        props.store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter });
      }}
    >
      {children}
    </a>
  );
};

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
            <li
              onClick={() => {
                this.props.store.dispatch({ type: 'TOGGLE_TODO', id: todo.id });
              }}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              key={todo.id}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <p>
          Show:
          <FilterLink
            filter="SHOW_ALL"
            currentFilter={this.props.visibilityFilter}
            store={this.props.store}
          >
            All
          </FilterLink>{' '}
          <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={this.props.visibilityFilter}
            store={this.props.store}
          >
            Active
          </FilterLink>{' '}
          <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={this.props.visibilityFilter}
            store={this.props.store}
          >
            Completed
          </FilterLink>
        </p>
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
