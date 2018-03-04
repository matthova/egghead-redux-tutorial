import React, { Component } from 'react';

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
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
        <ul>{this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
      </div>
    );
  }
}
const App = props => (
  <div>
    <TodoApp {...props} />
    <div>Hello World</div>
  </div>
);

export default App;
