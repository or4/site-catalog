import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { About, Contacts, News, Production, Products } from 'scenes';
import MainLayout from 'components/MainLayout';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={About} />
    <Route path="/" component={About} />
    <Route path="about" component={About} />
    <Route path="contacts" component={Contacts} />
    <Route path="news" component={News} />
    <Route path="production" component={Production} />
    <Route path="products" component={Products} />
  </Route>
);
