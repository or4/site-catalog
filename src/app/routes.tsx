import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { About, Contacts, Production, Products } from 'scenes';
import { MainLayout } from 'components';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={About} />
    <Route path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/production" component={Production} />
    <Route path="/products" component={Products} />
    <Route path="/products/:category" component={Products} />
  </Route>
);

export type RouteType =   '/about' | '/contacts' | '/production' | '/products';
export type RouterContent = 'tree' | 'photo' | 'price' | 'news' | 'way';

export const routesContent: {[key in RouteType] : Array<RouterContent>} = {
  '/about': ['photo', 'price', 'news'],
  '/production': ['tree', 'price', 'news'],
  '/contacts': ['way', 'price'],
  '/products': ['tree', 'price'],
};

export const routeHas =
  (route: RouteType, content: RouterContent) => routesContent[route].indexOf(content) >= 0;

const routeContentIsRequiredData: Array<RouterContent> = ['tree', 'price', 'way'];
export const routeContentIsRequired = (content: RouterContent) => routeContentIsRequiredData.indexOf(content) >= 0;
