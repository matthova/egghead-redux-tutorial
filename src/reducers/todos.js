import { combineReducers } from 'redux';
import { VisibilityFilters } from '../actions';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds,
});

export default todos;

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (inTodos, filter = 'SHOW_ALL') => {
  const allTodos = getAllTodos(inTodos);

  const urlFilter =
    Object.keys(VisibilityFilters).find(key => VisibilityFilters[key] === filter) || 'SHOW_ALL';

  switch (urlFilter) {
    case 'SHOW_ALL':
      return allTodos;
    case 'SHOW_ACTIVE':
      return allTodos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return allTodos.filter(t => t.completed);
    default:
      return allTodos;
  }
};
