import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { About, Contacts, News, Production, Products, Catalog } from 'scenes';
import { MainLayout } from 'components';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={About} />
    <Route path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/news" component={News} />
    <Route path="/production" component={Production} />
    <Route path="/products" component={Products} />
    <Route path="/catalog" component={Catalog} />
    <Route path="/catalog/:category" component={Catalog} />
  </Route>
);

export type RouteType =   '/' | '/about' | '/contacts' | '/news' | '/production' | '/products' | '/catalog';

export type RouteDescription = {
  isNavigationTree?: boolean;
  isRightSideBar?: boolean;
};

export const routesDescription: {[key in RouteType]: RouteDescription} = {
  '/': { isNavigationTree: false },
  '/about': { isNavigationTree: false },
  '/contacts': { isNavigationTree: false },
  '/news': { isNavigationTree: false, isRightSideBar: true },
  '/production': { isNavigationTree: true },
  '/products': { isNavigationTree: true },
  '/catalog': { isNavigationTree: true },
};
