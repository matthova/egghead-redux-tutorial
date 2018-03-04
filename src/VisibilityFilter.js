import React from 'react';

const FilterLink = ({
  filter, currentFilter, children, onClick,
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

const VisibilityFilter = ({ currentFilter, onFilterClick }) => (
  <p>
    {'Show: '}
    <FilterLink filter="SHOW_ALL" currentFilter={currentFilter} onClick={onFilterClick}>
      All
    </FilterLink>{' '}
    <FilterLink filter="SHOW_ACTIVE" currentFilter={currentFilter} onClick={onFilterClick}>
      Active
    </FilterLink>{' '}
    <FilterLink filter="SHOW_COMPLETED" currentFilter={currentFilter} onClick={onFilterClick}>
      Completed
    </FilterLink>
  </p>
);

export default VisibilityFilter;
