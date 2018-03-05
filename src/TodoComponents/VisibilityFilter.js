import React from 'react';
import { connect } from 'react-redux';

const Link = ({ active, onClick, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: ownProps.filter,
    });
  },
});
const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

const VisibilityFilter = () => (
  <p>
    {'Show: '}
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
);

export default VisibilityFilter;
