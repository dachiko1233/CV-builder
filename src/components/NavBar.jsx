import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

export default function NavBar() {
  return (
    <header className="nav-main container">
      <Logo />
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <NavLink to="/">Edit CV</NavLink>
          </li>
          <li>
            <NavLink to="/preview">Preview CV</NavLink>
          </li>

          <Button button="Fill Example CV" />
        </ul>
      </nav>
    </header>
  );
}
