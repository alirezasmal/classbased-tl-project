import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Auth.css';
const Auth = () => {
  const history = useHistory();
  const isLoggedIn = true;
  const [loginPage, setLoginPage] = useState(true);
  // auth handler
  const verifyAuth = () => {
    isLoggedIn ? (
      history.push('/todolist')
    ) : (
      <div style={{ color: 'red' }}>error</div>
    );
  };
  return (
    <>
      <header>Your Login or SignUp Page</header>
      <div className="box">
        <div className="toggle">
          <h1
            onClick={() => {
              setLoginPage(true);
            }}
            className={loginPage ? 'active' : ''}
          >
            Login
          </h1>
          <h1
            className={loginPage ? '' : 'active'}
            onClick={() => {
              setLoginPage(false);
            }}
          >
            SignUp
          </h1>
        </div>
        {loginPage ? (
          <form className="auth-form">
            <input
              className="email-input"
              type="email"
              placeholder="email"
            />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
            />
            <button
              className="submit-btn"
              type="submit"
              onClick={verifyAuth}
            >
              Login
            </button>
          </form>
        ) : (
          <form className="auth-form">
            <input
              className="email-input"
              type="email"
              placeholder="email"
            />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
            />
            <button
              className="submit-btn"
              type="submit"
              onClick={verifyAuth}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </>
  );
};
export default Auth;
// ! PRACTICE : MAKE A REUSABLE COMPONENT OUT OF IT
