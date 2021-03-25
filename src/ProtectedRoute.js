import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({
  component: Component,
  auth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        auth ? <Component /> : <Redirect to="/auth" />
      }
    />
  );
};

export default ProtectedRoute;
