import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App } from 'containers';
import Main from 'scenes/Main';
import About from 'scenes/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="main" component={Main} />
    <Route path="about" component={About} />
  </Route>
);
