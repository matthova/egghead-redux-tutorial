import React from 'react';
import { NavLink } from 'react-router-dom';
import { VisibilityFilters } from '../actions';

const FilterLink = ({ to, active, children }) => (
  <NavLink
    to={to}
    style={
      active
        ? {
            textDecoration: 'none',
            color: 'black',
            cursor: 'default',
          }
        : null
    }
  >
    {children}
  </NavLink>
);

export default FilterLink;
