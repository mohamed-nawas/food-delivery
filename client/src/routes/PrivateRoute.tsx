import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

export default function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
  const token = useAppSelector((state) => state.auth.token);

  React.useEffect(() => {
    console.log(`token: ${token}`)
  }, [token])

  return (
      <Route
        {...rest}
        render={(props) =>
          token !== "" ? <Component {...props} /> : <Redirect to={'/login'} />
        }
      />
  );
}
