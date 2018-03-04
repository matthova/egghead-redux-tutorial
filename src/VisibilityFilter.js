import React from 'react';

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

const VisibilityFilter = ({ currentFilter, store }) => (
  <p>
    {'Show: '}
    <FilterLink filter="SHOW_ALL" currentFilter={currentFilter} store={store}>
      All
    </FilterLink>{' '}
    <FilterLink filter="SHOW_ACTIVE" currentFilter={currentFilter} store={store}>
      Active
    </FilterLink>{' '}
    <FilterLink filter="SHOW_COMPLETED" currentFilter={currentFilter} store={store}>
      Completed
    </FilterLink>
  </p>
);

export default VisibilityFilter;
