import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function NavBar() {
  return (
    <>
      <Logo />
      <nav className="nav-bar">
        <ul className="nav-link">
          <li>
            <NavLink to="/">Edit CV</NavLink>
          </li>
          <li>
            <NavLink to="/preview">Preview CV</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
