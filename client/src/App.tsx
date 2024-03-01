import * as React from 'react';
import PrivateRoute from './routes/PrivateRoute';
import Home from './pages/Home';

export default function App() {
  return <PrivateRoute component={Home} />
}