import React from 'react';

function Navbar({ onSearch }) {
  return (
    <nav className="navbar">
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Search todos..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;
