import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = ({ filter }) => (
  <p>
    Show:{' '}
    <FilterLink to={VisibilityFilters.SHOW_ALL} active={filter === 'SHOW_ALL'}>
      All
    </FilterLink>
    {', '}
    <FilterLink to={VisibilityFilters.SHOW_ACTIVE} active={filter === 'SHOW_ACTIVE'}>
      Active
    </FilterLink>
    {', '}
    <FilterLink to={VisibilityFilters.SHOW_COMPLETED} active={filter === 'SHOW_COMPLETED'}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
