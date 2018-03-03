import React, { Component } from 'react';
import Filters from './Filters';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './Constants';

/*
 * Components
 */
class AddTodo extends Component {
  render() {
    return (
      <div>
        <input ref={ref => (this.input = ref)} type="text" />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

const FilterLink = ({ isActive, name, onClick }) => {
  if (isActive) {
    return <span>{name}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {name}
    </a>
  );
};

const Footer = ({ filter, onFilterChange }) => (
  <p>
    Show:{' '}
    <FilterLink
      name="All"
      isActive={filter === Filters.SHOW_ALL}
      onClick={() => onFilterChange(Filters.SHOW_ALL)}
    />
    {', '}
    <FilterLink
      name="Completed"
      isActive={filter === Filters.SHOW_COMPLETED}
      onClick={() => onFilterChange(Filters.SHOW_COMPLETED)}
    />
    {', '}
    <FilterLink
      name="Active"
      isActive={filter === Filters.SHOW_ACTIVE}
      onClick={() => onFilterChange(Filters.SHOW_ACTIVE)}
    />
  </p>
);

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => <Todo {...todo} key={todo.id} onClick={() => onTodoClick(todo.id)} />)}
  </ul>
);

let nextTodoId = 0;
const App = ({ dispatch, todos, visibilityFilter }) => {
  let visibleTodos = todos;

  switch (visibilityFilter) {
    case Filters.SHOW_COMPLETED:
      visibleTodos = todos.filter(todo => todo.completed);
      break;
    case Filters.SHOW_ACTIVE:
      visibleTodos = todos.filter(todo => !todo.completed);
      break;
  }

  return (
    <div>
      <AddTodo onAddClick={text => dispatch({ type: ADD_TODO, text, id: nextTodoId++ })} />
      <TodoList todos={visibleTodos} onTodoClick={id => dispatch({ type: TOGGLE_TODO, id })} />
      <Footer
        filter={visibilityFilter}
        onFilterChange={filter => dispatch({ type: SET_VISIBILITY_FILTER, filter })}
      />
    </div>
  );
};

export default App;
