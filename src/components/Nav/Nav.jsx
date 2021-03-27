import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
const Nav = ({ isAuthenticated, logouthandler, username }) => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/"> Home page</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/auth" onClick={logouthandler}>
              Log Out
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/auth"> Login / Sign Up</Link>
          </li>
        )}
        <li>
          <Link to="/todolist"> Your TodoList</Link>
        </li>
      </ul>
      {isAuthenticated && (
        <div style={{ color: '#101010' }}>
          Hello dear{' '}
          <span style={{ fontSize: 'larger', color: 'blue' }}>
            {username}
          </span>
        </div>
      )}
    </nav>
  );
};
export default Nav;
//
//
//
//
//
//
//
//
//
//
//
//
//

/* <nav>
<ul>
  <li>
    <Link to="/"> Home page</Link>
  </li>
  <li>
    <Link to="/auth"> Login</Link>
  </li>
  <li>
    <Link to="/todolist"> Your TodoList</Link>
  </li>
</ul>
</nav> */
