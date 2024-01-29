import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

export default function PrivateRoute({ component: Component, ...rest }) {
  const token = useAppSelector((state) => state.auth.token);

  return (
      <Route
        {...rest}
        render={(props) =>
          token !== "" ? <Component {...props} /> : <Redirect to={'/login'} />
        }
      />
  );
}
