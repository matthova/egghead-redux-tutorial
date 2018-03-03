import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../Constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
    default:
      return state;
  }
};

export default todos;
