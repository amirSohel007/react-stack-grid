/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
import routes from './routes';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));


const render = (nextRoutes) => {
  root.render(
    <AppContainer>
      <Root routes={nextRoutes} />
    </AppContainer>
  );
};

render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;
    render(nextRoutes);
  });
}
