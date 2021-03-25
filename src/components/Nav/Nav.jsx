import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
const Nav = ({ isAuthenticated, logouthandler }) => {
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
