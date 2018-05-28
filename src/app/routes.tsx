import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Main, About } from 'scenes';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/" component={Main} />
    <Route path="main" component={Main} />
    <Route path="about" component={About} />
  </Route>
);
