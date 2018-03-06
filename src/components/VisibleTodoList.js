import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter = 'SHOW_ALL') => {
  const urlFilter =
    Object.keys(VisibilityFilters).find(key => VisibilityFilters[key] === filter) || 'SHOW_ALL';

  switch (urlFilter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, { match: { params } }) => {
  console.log('own props', params);
  return {
    todos: getVisibleTodos(state.todos, params.filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default withRouter(VisibleTodoList);
