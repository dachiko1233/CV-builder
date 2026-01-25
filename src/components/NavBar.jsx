import React from 'react';

export default function NavBar() {
  return (
    <header className="container">
      <div className="nav-bar">
        <h1 className="title">CV Creator</h1>
        <div className="nav-link">
          <nav className="nav">
            <a href="#">Edit CV</a>
            <a href="#">Preview CV</a>
          </nav>
          <button className="btn-nav">Fill Example CV</button>
        </div>
      </div>
    </header>
  );
}
