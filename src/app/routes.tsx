import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Main, About } from 'scenes';
import MainLayout from 'components/MainLayout';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={Main} />
    <Route path="/" component={Main} />
    <Route path="main" component={Main} />
    <Route path="about" component={About} />
  </Route>
);
