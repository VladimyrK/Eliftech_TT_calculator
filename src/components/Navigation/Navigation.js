import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="/"
      >
        Banks
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="calculator"
      >
        Calculator
      </NavLink>
    </nav>
  );
}
