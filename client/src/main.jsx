import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Routes from './routes/Routes';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
