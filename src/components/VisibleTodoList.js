import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match: { params } }) => {
  const todos = getVisibleTodos(state, params.filter);
  return { todos };
};

const VisibleTodoList = connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList);
export default withRouter(VisibleTodoList);
