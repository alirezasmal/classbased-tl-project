import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({
  // component: Component,
  children,
  auth,
  ...rest
}) => {
  if (auth) {
    return <Route>{children}</Route>;
  } else {
    return <Redirect to="/auth" />;
  }
  // return (
  //   <Route
  //     {...rest}
  //     render={() =>
  //       auth ? <Component /> : <Redirect to="/auth" />
  //     }
  //   />
  // );
};

export default ProtectedRoute;
