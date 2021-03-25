import React from 'react';
import Auth from '../components/Auth';
const AuthPage = ({ authHandler, isAuthenticated }) => {
  return (
    <Auth
      isAuthenticated={isAuthenticated}
      authHandler={authHandler}
    />
  );
};
export default AuthPage;
