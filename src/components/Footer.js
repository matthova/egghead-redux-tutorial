import React from 'react';
import { withRouter } from 'react-router';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = ({ match: { params } }) => {
  const filter = params.filter || '';
  const urlFilter =
    Object.keys(VisibilityFilters).find(key => VisibilityFilters[key] === filter) || 'SHOW_ALL';

  return (
    <p>
      Show:{' '}
      <FilterLink to={VisibilityFilters.SHOW_ALL} active={urlFilter === 'SHOW_ALL'}>
        All
      </FilterLink>
      {', '}
      <FilterLink to={VisibilityFilters.SHOW_ACTIVE} active={urlFilter === 'SHOW_ACTIVE'}>
        Active
      </FilterLink>
      {', '}
      <FilterLink to={VisibilityFilters.SHOW_COMPLETED} active={urlFilter === 'SHOW_COMPLETED'}>
        Completed
      </FilterLink>
    </p>
  );
};

export default withRouter(Footer);
