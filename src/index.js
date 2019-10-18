/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from 'routes';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

import './index.css';

const store = configureStore();

const renderApp = () => render(
  <Provider store={store}>
    <BrowserRouter>
      {
        routes.map((r) => (<Route key={r.name} path={r.path} component={r.component} />))
      }
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
renderApp();
