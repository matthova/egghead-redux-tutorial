import { v4 } from 'uuid';

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: '',
  SHOW_ACTIVE: 'active',
  SHOW_COMPLETED: 'completed',
};
