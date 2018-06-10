import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { About, Contacts, News, Production, Products } from 'scenes';
import { MainLayout } from 'components';

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

export type RouteType =   '/' | 'about' | 'contacts' | 'news' | 'production' | 'products';

export type RouteDescription = {
  isNavigationTree?: boolean;
  isRightSideBar?: boolean;
};

export const routesDescription: {[key in RouteType]: RouteDescription} = {
  '/': { isNavigationTree: true },
  'about': { isNavigationTree: true },
  'contacts': { isNavigationTree: true },
  'news': { isNavigationTree: true, isRightSideBar: true },
  'production': { isNavigationTree: true },
  'products': { isNavigationTree: true },
};

// export const routesHasNavigationTree: RouteType[] = ['/', 'about'];
// export const routesHasRightSideBar: RouteType[] = ['/', 'about', 'contacts', 'news'];
