import React from 'react';
import { render, Router } from 'cat-eye';
import { importAll } from 'global/util/sys';
import 'global/cat-eye';
import 'global/request';
import 'global/routes';

importAll(require.context('./global/model', true, /.+\.js$/));
importAll(require.context('./components', true, /model\.js$/));

import App from './App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
